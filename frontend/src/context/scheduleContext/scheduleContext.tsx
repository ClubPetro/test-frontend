import React from 'react';
import dataBaseApi from '../../services/dataBaseApi';

export const ScheduleContext =
    React.createContext<ScheduleContext | null>(null);

export const ScheduleProvider = ({
    children,
}: ScheduleProviderProps): React.ReactElement => {
    const [scheduleList, setScheduleList] = React.useState<Schedule[]>([]);
    const [errorMessage, setErrorMessage] = React.useState<Error | null>(null);

    async function getSchedules() {
        await dataBaseApi
            .get<Schedule[]>('/schedules')
            .then(response => setScheduleList(response.data))
            .catch(error => setErrorMessage(error));
    }

    async function deleteSchedule(scheduleId: string) {
        await dataBaseApi
            .delete(`/schedules/${scheduleId}`)
            .then(() => getSchedules())
            .catch(error => setErrorMessage(error));
    }

    async function createSchedule(schedule: Schedule) {
        await dataBaseApi
            .post('/schedules', schedule)
            .then(() => getSchedules())
            .catch(error => setErrorMessage(error));
    }

    async function editSchedule(schedule: Schedule) {
        await dataBaseApi
            .put(`/schedules/${schedule.id}`, schedule)
            .then(() => getSchedules())
            .catch(error => setErrorMessage(error));
    }

    async function getSingleSchedule(
        scheduleId: string,
        setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
    ) {
        await dataBaseApi
            .get(`/schedules/${scheduleId}`)
            .then(response => setSchedule(response.data))
            .catch(error => setErrorMessage(error));
    }

    React.useEffect(() => {
        getSchedules();
    }, []);

    return (
        <ScheduleContext.Provider
            value={{
                scheduleList,
                errorMessage,
                deleteSchedule,
                createSchedule,
                editSchedule,
                getSingleSchedule,
            }}
        >
            {children}
        </ScheduleContext.Provider>
    );
};

export const useScheduleContext = (): ScheduleContext => {
    const context = React.useContext(ScheduleContext);
    if (!context) {
        throw new Error(
            'Deve-se usar um contexto dentro de um ScheduleProvider',
        );
    }
    return context;
};

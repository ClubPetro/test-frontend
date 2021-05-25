interface ScheduleFormData {
    country: string;
    location: string;
    date: string;
}

interface Schedule extends ScheduleFormData {
    id: string;
    flag: string;
}

interface ScheduleContext {
    scheduleList: Schedule[];
    errorMessage: Error | null;
    deleteSchedule: (scheduleId: string) => Promise<void>;
    createSchedule: (schedule: Schedule) => Promise<void>;
    editSchedule: (schedule: Schedule) => Promise<void>;
    getSingleSchedule: (
        ScheduleId: string,
        setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
    ) => Promise<void>;
}

interface ScheduleProviderProps {
    children: React.ReactNode;
}

interface CountryApiData {
    translations: {
        br: string;
    };
    flag: string;
}

interface DataBaseApiData {
    scheduleList: Schedule[];
}

interface CountryContext {
    countryList: CountryApiData[];
}

interface CountryProviderProps {
    children: React.ReactNode;
}

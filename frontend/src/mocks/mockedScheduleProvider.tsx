/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ScheduleContext } from '../context/scheduleContext/scheduleContext';

interface MockedScheduleProviderProps {
    scheduleList: Schedule[];
    children: React.ReactNode;
}

const MockedScheduleProvider = ({
    children,
    scheduleList,
}: MockedScheduleProviderProps) => {
    const deleteSchedule = (scheduleId: string): Promise<void> =>
        new Promise(() => {});
    const createSchedule = (schedule: Schedule): Promise<void> =>
        new Promise(() => {});
    const editSchedule = (schedule: Schedule): Promise<void> =>
        new Promise(() => {});
    const getSingleSchedule = (
        ScheduleId: string,
        setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
    ): Promise<void> => new Promise(() => {});
    const errorMessage = null;
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
            <BrowserRouter>{children}</BrowserRouter>
        </ScheduleContext.Provider>
    );
};

export default MockedScheduleProvider;

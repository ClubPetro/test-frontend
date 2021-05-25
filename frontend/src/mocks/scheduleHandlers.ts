/* eslint-disable import/no-extraneous-dependencies */
import { RequestParams, rest, RestRequest } from 'msw';

const scheduleHandlers = [
    rest.get('/schedules', (req, res, ctx) => {
        const scheduleList = sessionStorage.getItem(
            '@clubpetro-places/schedules',
        );
        if (scheduleList) {
            return res(ctx.status(200), ctx.json(scheduleList));
        }
        return res(ctx.status(404));
    }),
    rest.post(
        '/schedules',
        (req: RestRequest<Schedule, RequestParams>, res, ctx) => {
            const scheduleList = sessionStorage.getItem(
                '@clubpetro-places/schedules',
            );

            if (scheduleList) {
                const parsedScheduleList: Schedule[] = JSON.parse(scheduleList);
                const newScheduleList = [...parsedScheduleList, req.body];
                sessionStorage.setItem(
                    '@clubpetro-places/schedules',
                    JSON.stringify(newScheduleList),
                );
                return res(ctx.status(200));
            }
            const newScheduleList: Schedule[] = [];
            newScheduleList.push(req.body);
            sessionStorage.setItem(
                '@clubpetro-places/schedules',
                JSON.stringify(newScheduleList),
            );
            return res(ctx.status(404));
        },
    ),
    rest.put('/schedules/:id', (req, res, ctx) => {
        const { id } = req.params;
        const scheduleList = sessionStorage.getItem(
            '@clubpetro-places/schedules',
        );

        if (scheduleList) {
            const parsedScheduleList: Schedule[] = JSON.parse(scheduleList);
            const filteredScheduleList = parsedScheduleList.filter(
                item => item.id !== id,
            );
            const newScheduleBody = req.body;
            const newScheduleList = [...filteredScheduleList, newScheduleBody];
            sessionStorage.setItem(
                '@clubpetro-places/schedules',
                JSON.stringify(newScheduleList),
            );
            return res(ctx.status(200));
        }
        return res(ctx.status(404));
    }),
    rest.delete('/schedules/:id', (req, res, ctx) => {
        const { id } = req.params;
        const scheduleList = sessionStorage.getItem(
            '@clubpetro-places/schedules',
        );

        if (scheduleList) {
            const parsedScheduleList: Schedule[] = JSON.parse(scheduleList);
            const newScheduleList = parsedScheduleList.filter(
                item => item.id !== id,
            );
            sessionStorage.setItem(
                '@clubpetro-places/schedules',
                JSON.stringify(newScheduleList),
            );
            return res(ctx.status(200));
        }
        return res(ctx.status(400));
    }),
];

export default scheduleHandlers;

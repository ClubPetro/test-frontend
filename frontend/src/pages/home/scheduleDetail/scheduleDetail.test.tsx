/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ScheduleDetail from '.';
import MockedScheduleProvider from '../../../mocks/mockedScheduleProvider';

describe('ScheduleDetail test suite', () => {
    it('should render component form', () => {
        const routeComponentPropsMock = {
            history: {} as any,
            location: {} as any,
            match: {
                params: { id: '12' },
                isExact: false,
                path: '',
                url: '',
            },
        };
        const testList: Schedule[] = [
            {
                country: 'Brasil',
                date: '01/2121',
                flag: 'flag',
                id: '12',
                location: 'Salvador',
            },
        ];

        render(
            <MockedScheduleProvider scheduleList={testList}>
                <ScheduleDetail {...routeComponentPropsMock} />
            </MockedScheduleProvider>,
        );
        const countryTitle = screen.getByText('País');
        expect(countryTitle).toBeInTheDocument();

        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();

        const locationTitle = screen.getByText('Local');
        expect(locationTitle).toBeInTheDocument();

        const locationInput = screen.getByRole('textbox', {
            name: /local/i,
        });
        expect(locationInput).toBeInTheDocument();

        const dateTitle = screen.getByText('Meta');
        expect(dateTitle).toBeInTheDocument();

        const dateInput = screen.getByRole('textbox', {
            name: /meta/i,
        });
        expect(dateInput).toBeInTheDocument();

        const confirmButton = screen.getByRole('button', {
            name: /confirmar/i,
        });
        expect(confirmButton).toBeInTheDocument();

        const cancelButton = screen.getByRole('button', {
            name: /cancelar/i,
        });
        expect(cancelButton).toBeInTheDocument();
    });
    it('changing value of inputs', () => {
        const routeComponentPropsMock = {
            history: {} as any,
            location: {} as any,
            match: {
                params: { id: '12' },
                isExact: false,
                path: '',
                url: '',
            },
        };
        const testList: Schedule[] = [
            {
                country: 'Brasil',
                date: '01/2121',
                flag: 'flag',
                id: '12',
                location: 'Salvador',
            },
        ];

        render(
            <MockedScheduleProvider scheduleList={testList}>
                <ScheduleDetail {...routeComponentPropsMock} />
            </MockedScheduleProvider>,
        );
        fireEvent.change(
            screen.getByRole('textbox', {
                name: /local/i,
            }),
            { target: { value: 'Salvador/BA' } },
        );
    });
    it('should call mocked api', async () => {
        const routeComponentPropsMock = {
            history: {} as any,
            location: {} as any,
            match: {
                params: { id: '12' },
                isExact: false,
                path: '',
                url: '',
            },
        };
        const testList: Schedule[] = [
            {
                country: 'Brasil',
                date: '01/2121',
                flag: 'flag',
                id: '12',
                location: 'Salvador',
            },
        ];

        render(
            <MockedScheduleProvider scheduleList={testList}>
                <ScheduleDetail {...routeComponentPropsMock} />
            </MockedScheduleProvider>,
        );

        const sendButton = screen.getByRole('button', {
            name: /confirmar/i,
        });
        fireEvent.click(sendButton);

        await waitFor(() => console.log(routeComponentPropsMock.history));
    });
});

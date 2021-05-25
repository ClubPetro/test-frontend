import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '.';
import MockedScheduleProvider from '../../mocks/mockedScheduleProvider';
import MockedCountryContext from '../../mocks/mockedCountryContext';
import ScheduleSection from './scheduleSection/styles';

describe('home page test suite', () => {
    it('integration test', async () => {
        const storageList = sessionStorage.getItem(
            '@clubpetro-places/schedules',
        );
        let scheduleList: Schedule[] = [];
        if (storageList) {
            scheduleList = JSON.parse(storageList);
        } else {
            scheduleList = [];
        }
        const countryList = [
            {
                translations: {
                    br: 'Brasil',
                },
                flag: '',
            },
            {
                translations: {
                    br: 'Argentina',
                },
                flag: '',
            },
        ];
        render(
            <MockedScheduleProvider scheduleList={scheduleList}>
                <MockedCountryContext countryList={countryList}>
                    <Home />
                    <ScheduleSection />
                </MockedCountryContext>
            </MockedScheduleProvider>,
        );
        fireEvent.change(
            screen.getByRole('combobox', {
                name: /país/i,
            }),
            { target: { value: 'Brasil' } },
        );
        fireEvent.change(
            screen.getByRole('textbox', {
                name: /local/i,
            }),
            { target: { value: 'Salvador/BA' } },
        );
        fireEvent.change(
            screen.getByRole('textbox', {
                name: /meta/i,
            }),
            { target: { value: '99/9999' } },
        );

        fireEvent.click(
            screen.getByRole('button', {
                name: /adicionar/i,
            }),
        );
        await waitFor(() => screen.logTestingPlaygroundURL());
    });
});

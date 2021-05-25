import { render, screen } from '@testing-library/react';
import ScheduleCard from '.';
import MockedScheduleProvider from '../../mocks/mockedScheduleProvider';

describe('scheduleCard test component', () => {
    it('Should render Brazil schedule card', () => {
        const countryData = {
            id: '1',
            flag: 'a',
            country: 'Brasil',
            location: 'Belo Horizonte',
            date: '05/2022',
        };
        const countryList = [countryData];
        render(
            <MockedScheduleProvider scheduleList={countryList}>
                {countryList.map(item => (
                    <ScheduleCard
                        country={item.country}
                        date={item.date}
                        id={item.id}
                        imgUri={item.flag}
                        location={item.location}
                        key={item.id}
                    />
                ))}
            </MockedScheduleProvider>,
        );
        const scheduleCardTitle = screen.getByText('Brasil');
        expect(scheduleCardTitle).toBeInTheDocument();
    });
});

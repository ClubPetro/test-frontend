import { render, screen } from '@testing-library/react';
import SchedulesSection from '.';
import MockedScheduleProvider from '../../../mocks/mockedScheduleProvider';

describe('ScheduleSection test suite', () => {
    it('should render no-schedule-message', () => {
        const testList: Schedule[] = [];
        render(
            <MockedScheduleProvider scheduleList={testList}>
                <SchedulesSection />
            </MockedScheduleProvider>,
        );
        const noScheduleMessage = screen.getByText(
            'Você não tem nenhuma meta para conhecer novos lugares! Que tal criar uma nova?',
        );
        expect(noScheduleMessage).toBeInTheDocument();
    });
    it('should render one Brazil ScheduleCard component', () => {
        const brazilData = {
            country: 'Brasil',
            location: 'Salvador/BA',
            date: '01/2020',
            id: '1',
            flag: 'string',
        };
        const testList: Schedule[] = [brazilData];
        render(
            <MockedScheduleProvider scheduleList={testList}>
                <SchedulesSection />
            </MockedScheduleProvider>,
        );
        const ScheduleTitle = screen.getByText('Brasil');
        expect(ScheduleTitle).toBeInTheDocument();
    });
});

import React from 'react';
import ScheduleCard from '../../../components/scheduleCard';
import { useScheduleContext } from '../../../context/scheduleContext/scheduleContext';
import ScheduleSection from './styles';

const SchedulesSection = (): React.ReactElement => {
    const { scheduleList } = useScheduleContext();

    return (
        <ScheduleSection>
            {scheduleList.length > 0 ? (
                scheduleList.map(item => (
                    <ScheduleCard
                        country={item.country}
                        date={item.date}
                        imgUri={item.flag}
                        key={item.id}
                        location={item.location}
                        id={item.id}
                    />
                ))
            ) : (
                <h1>
                    Você não tem nenhuma meta para conhecer novos lugares!{' '}
                    <br /> Que tal criar uma nova?
                </h1>
            )}
        </ScheduleSection>
    );
};

export default SchedulesSection;

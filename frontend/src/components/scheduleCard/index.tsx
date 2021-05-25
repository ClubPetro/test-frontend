import React from 'react';
import { Link } from 'react-router-dom';
import { useScheduleContext } from '../../context/scheduleContext/scheduleContext';
import DeleteIcon from './components/deleteIcon';
import EditIcon from './components/editIcon';
import ScheduleWrapper from './styles';

interface ScheduleCardProps {
    id: string;
    imgUri: string;
    country: string;
    location: string;
    date: string;
}

const ScheduleCard = ({
    id,
    country,
    date,
    imgUri,
    location,
}: ScheduleCardProps): React.ReactElement => {
    const { deleteSchedule } = useScheduleContext();

    return (
        <ScheduleWrapper>
            <img src={imgUri} alt={country} />
            <h2>{country}</h2>
            <Link to={`/schedule-detail/${id}`} className="editIcon">
                <EditIcon />
            </Link>
            <DeleteIcon
                className="deleteIcon"
                onClick={() => deleteSchedule(id)}
            />
            <hr />
            <p className="location">Local: {location} </p>
            <p className="date">Meta: {date}</p>
        </ScheduleWrapper>
    );
};

export default ScheduleCard;

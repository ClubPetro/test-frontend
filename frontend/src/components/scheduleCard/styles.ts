import styled from 'styled-components';
import Colors from '../../styles/colors';

const ScheduleWrapper = styled.div`
    display: grid;
    grid-template-rows: 34px 36px 10px 60px 60px;
    grid-template-columns: 56px auto 30px 30px;
    align-items: center;
    border-radius: 10px;
    height: 250px;
    width: 250px;
    padding: 20px 16px;
    box-shadow: 0 1.6px 2.2px rgba(0, 0, 0, 0.02),
        0 3.8px 5.3px rgba(0, 0, 0, 0.028), 0 7.1px 10px rgba(0, 0, 0, 0.035),
        0 12.7px 17.9px rgba(0, 0, 0, 0.042),
        0 23.8px 33.4px rgba(0, 0, 0, 0.05), 0 57px 80px rgba(0, 0, 0, 0.07);

    & > img {
        width: 56px;
        height: 34px;
    }

    & > h2 {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    & > .editIcon {
        grid-row-start: 1;
        grid-column-start: 3;
        justify-self: center;
    }

    & > .deleteIcon {
        grid-row-start: 1;
        grid-column-start: 4;
        justify-self: center;
    }

    & > hr {
        grid-row-start: 3;
        grid-column-start: 1;
        grid-column-end: 5;
        border: 1px solid ${Colors.grayColors.gray1};
    }

    & > .location {
        grid-row-start: 4;
        grid-column-start: 1;
        grid-column-end: 5;
        padding-left: 4px;
    }

    & > .date {
        grid-row-start: 5;
        grid-column-start: 1;
        grid-column-end: 5;
        padding-left: 4px;
    }
`;

export default ScheduleWrapper;

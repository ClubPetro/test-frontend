import styled from 'styled-components';

const ScheduleSection = styled.section`
    max-width: 1440px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;

    & > h1 {
        margin-top: 48px;
        width: 700px;
        text-align: center;
        line-height: 60px;
        margin: 0 auto;
    }

    & > div {
        margin-right: 30px;
        margin-top: 33px;
    }

    @media (max-width: 540px) {
        flex-direction: column;
        align-items: center;

        & > div {
            margin-right: 0px;
        }
    }

    @media (min-width: 540px) and (max-width: 768px) {
        width: 560px;
    }

    @media (min-width: 768px) and (max-width: 1025px) {
        width: 100vw;
    }
`;

export default ScheduleSection;

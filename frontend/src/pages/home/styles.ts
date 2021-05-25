import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
`;

export const InputSection = styled.section`
    background-color: ${Colors.brandColor};

    & > form {
        display: flex;
        padding: 73px 0px;
        max-width: 1440px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: flex-end;

        @media (max-width: 1024px) {
            flex-direction: column;
            padding: 32px 0;
            align-items: center;

            & > div {
                margin-bottom: 32px;
            }
        }
    }
`;

export const ErrorMessage = styled.p`
    background-color: #f5edeb;
    border-style: solid;
    border-color: #e44131;
    border-width: 1px 1px 1px 7px;
    border-radius: 3px;
    height: 50px;
    width: fit-content;
    color: #ed4433;
    padding: 16px;
    display: flex;
    align-items: center;
    margin: 16px auto;

    & > svg {
        margin-right: 5px;
    }
`;

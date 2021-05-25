import styled from 'styled-components';
import Colors from '../../styles/colors';

interface InputWrapperProps {
    inputSize: string;
    border: boolean | undefined;
    blackLabel: boolean | undefined;
}

const TextInputWrapper = styled.div<InputWrapperProps>`
    & > label > h3 {
        color: ${props => (props.blackLabel ? '#000000' : '#ffffff')};
        margin-bottom: 8px;
        padding-left: 2px;
    }

    & > input {
        width: ${props => (props.inputSize === 'large' ? '445px' : '238px')};
        height: 48px;
        background: #ffffff;
        border-radius: 7px;
        border: ${props => (props.border ? '1px solid black' : '0')};
        padding: 18px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: ${Colors.grayColors.gray1};

        @media (max-width: 1024px) {
            width: 250px;
        }
    }
`;

export default TextInputWrapper;

import styled from 'styled-components';
import Colors from '../../styles/colors';

interface SelectProps {
    border: boolean | undefined;
    inputSize: 'medium' | 'large';
    blackLabel: boolean | undefined;
}

const Select = styled.div<SelectProps>`
    & > label > h3 {
        color: ${props => (props.blackLabel ? '#000000' : '#ffffff')};
        margin-bottom: 8px;
        padding-left: 2px;
    }
    & > select {
        width: ${props => (props.inputSize === 'large' ? '445px' : '303px')};
        height: 48px;
        background: #ffffff;
        border-radius: 7px;
        border: ${props => (props.border ? '1px solid black' : '0')};
        padding: 15px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: ${Colors.grayColors.gray1};

        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        background: url('/images/arrow-down-stroke-icon.png') #ffffff;
        background-repeat: no-repeat;
        background-size: 11.12px 7.29px;
        background-position: 95% center;

        @media (max-width: 1024px) {
            width: 250px;
        }
    }
`;

export default Select;

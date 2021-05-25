import styled from 'styled-components';
import Colors from '../../styles/colors';

const ButtonWrapper = styled.button<{ theme: 'primary' | 'secondary' }>`
    width: 203px;
    height: 49px;
    background: ${props =>
        props.theme === 'primary' ? Colors.primaryColor : '#FFFFFF'};
    border-radius: 7px;
    border: ${props => (props.theme === 'primary' ? '0' : `2px solid black`)};
    cursor: pointer;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: ${props => (props.theme === 'primary' ? '#FFFFFF' : '#000')};

    &:hover {
        background-color: ${props =>
            props.theme === 'primary' ? Colors.primaryColorOnHover : '#000'};
        color: #ffffff;
    }
`;

export default ButtonWrapper;

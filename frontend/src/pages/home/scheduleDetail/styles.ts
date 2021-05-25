import styled from 'styled-components';

const Wrapper = styled.section`
    max-width: 1440px;
    margin: 20px auto;

    & > h1 {
        margin-bottom: 40px;
    }

    & > img {
        width: 56px;
        margin-bottom: 16px;
    }

    & > form > h3 {
        margin-bottom: 8px;
    }

    & > form > div {
        margin-bottom: 16px;
    }

    & > form > button {
        margin-top: 16px;
    }

    & > form > button + a {
        margin-left: 40px;
    }
`;

export default Wrapper;

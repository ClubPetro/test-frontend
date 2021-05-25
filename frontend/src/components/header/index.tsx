import React from 'react';
import Wrapper from './styles';

const Header = (): React.ReactElement => {
    return (
        <Wrapper>
            <main>
                <img src="./images/lugares-logo.png" alt="Lugares" />
            </main>
        </Wrapper>
    );
};

export default Header;

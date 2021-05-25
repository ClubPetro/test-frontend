import React from 'react';
import { CountryContext } from '../context/countryContext/countryContext';

interface MockedCountryContextProps {
    countryList: CountryApiData[];
    children: React.ReactNode;
}

const mockedCountryContext = ({
    children,
    countryList,
}: MockedCountryContextProps) => {
    return (
        <CountryContext.Provider value={{ countryList }}>
            {children}
        </CountryContext.Provider>
    );
};

export default mockedCountryContext;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

interface MockedRouterProps {
    children: React.ReactNode;
}

const MockedRouter = ({ children }: MockedRouterProps) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

export default MockedRouter;

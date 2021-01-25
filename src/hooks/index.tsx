import React from 'react';

import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);

export default AppProvider;

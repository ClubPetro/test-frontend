import React from "react";

import { ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

import Nav from "./components/Nav";
import Search from "./components/Search";
import Cards from "./components/Cards";

import theme from "./styles/theme";
import { AppContextProvider } from "./context/useSearchContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <CssBaseline />
        <Nav />
        <Search />
        <Cards />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;

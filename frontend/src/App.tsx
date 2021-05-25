import Header from './components/header';
import { ScheduleProvider } from './context/scheduleContext/scheduleContext';
import Home from './pages/home';
import GlobalStyles from './styles/GlobalStyles';
import Router from './router/index';
import { CountryProvider } from './context/countryContext/countryContext';

const App = (): JSX.Element => {
    return (
        <ScheduleProvider>
            <CountryProvider>
                <GlobalStyles />
                <Header />
                <Home />
                <Router />
            </CountryProvider>
        </ScheduleProvider>
    );
};

export default App;

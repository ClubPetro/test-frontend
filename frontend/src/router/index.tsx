import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScheduleDetail from '../pages/home/scheduleDetail';
import SchedulesSection from '../pages/home/scheduleSection';

const Router = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={SchedulesSection} exact />
                <Route path="/schedule-detail/:id" component={ScheduleDetail} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

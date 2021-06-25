import React from 'react';
import {Route, Switch} from "react-router-dom";
import DaysPage from "../../pages/DaysPage";
import WorkShiftPage from "../../pages/WorkShiftPage";
import WorkPlacePage from "../../pages/WorkPlacePage";
import WorkingMonthPage from "../../pages/WorkingMonthPage";
import StaffPage from "../../pages/StaffPage";

function Routes() {
    return (
        <Switch>
            <Route path={"/days-type"} component={DaysPage}/>
            <Route path={"/staff"} component={StaffPage}/>
            <Route path={"/working-month"} component={WorkingMonthPage}/>
            <Route path={"/work-place"} component={WorkPlacePage}/>
            <Route path={"/work-shift"} component={WorkShiftPage}/>
        </Switch>
    );
}
export default Routes;
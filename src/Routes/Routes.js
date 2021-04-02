import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Loader from "../util/Loader/Loader";
import "./scrollbar.css";

const LoginPage = lazy(() => import("../Components/LoginPage/LoginPage"));
const Dashboard = lazy(() => import("../Components/Dashboard/Dashboard"));
const UserDash = lazy(() => import("../Components/Users/UserDash"));
const Parking = lazy(() => import("../Components/Parking/Parking"));
const Booking = lazy(() => import("../Components/Booking/Booking"));
const Payment = lazy(() => import("../Components/Payment/Payment"));
const Hardware = lazy(() => import("../Components/Hardware/Hardware"));
const Support = lazy(() => import("../Components/Support/Support"));
const Notification = lazy(() =>
  import("../Components/Notification/Notification")
);

const RFID = lazy(() => import("../Components/RFID/RFID"));
const MonthlyPass = lazy(() => import("../Components/MonthlyPass/MonthlyPass"));
const TicketDispenser = lazy(() =>
  import("../Components/TicketDispenser/TicketDispenser")
);
// const Settings = lazy(() => import("../Components/Settings/Settings"));
const Profile = lazy(() => import("../Components/ProfilePage/Profile/main"));
const ChangePassword = lazy(() =>
  import("../Components/ChangePassword/ChangePassword")
);

const NotFound = lazy(() => import("../util/NotFound/NotFound"));

export const Routes = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/changepassword" component={ChangePassword} />
          <Route exact path="/profile" component={Profile} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/users" component={UserDash} />
          <Route exact path="/parking" component={Parking} />
          <Route exact path="/montlypass" component={MonthlyPass} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/hardware" component={Hardware} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/notification" component={Notification} />

          <Route exact path="/rfid" component={RFID} />
          <Route exact path="/ticketdispenser" component={TicketDispenser} />

          <Route exact path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

// black = #1D2B44
// yellow = #FFC738

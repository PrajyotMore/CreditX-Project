import React from "react";
import "./App.css";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Spin } from "antd";
import MasterContestNewDetails from "./pages/reward-corner/MasterContestNewDetails";
import Converted from "./pages/myApplicaation/Converted";
import Failed from "./pages/myApplicaation/Failed";
import OverallRanking from "./pages/reward-corner/OverallRanking";
import Rewards from "./pages/reward-corner/Rewards";
import JoinClub from "./pages/reward-corner/JoinClub";
// import AppLayout from "./layouts";
// import TabsComp from "./pages/tabs/Tabs";
// import Login from "./pages/loginPage/Login";
// import Myapplication from "./pages/myApplicaation/Myapplication";
// import ForToday from "./pages/myApplicaation/ForToday";
// import CreateTask from "./pages/actions/CreateTask";
// import SdWidget from "./pages/widget/Sdwidget.js";
// import TabsWithoutBtn from "./pages/tabs/TabsWithoutBtn";
// import MasterContest from "./pages/reward-corner/MasterContest";
// import Open from "./pages/myApplicaation/Open";
// import MasterContestActive from "./pages/reward-corner/MasterContestActive";
// import MasterContestCompleted from "./pages/reward-corner/MasterContestCompleted";

const RedirectToLogin = React.lazy(() => import("./pages/loginPage/Login.js"));
// function RedirectToLogin() {
//   return <Navigate to="/login" />;
// }
const AppLayout = React.lazy(() => import("./layouts"));
const TabsComp = React.lazy(() => import("./pages/tabs/Tabs"));
const Login = React.lazy(() => import("./pages/loginPage/Login"));
const Myapplication = React.lazy(() =>
  import("./pages/myApplicaation/Myapplication")
);
const ForToday = React.lazy(() => import("./pages/myApplicaation/ForToday"));
const CreateTask = React.lazy(() => import("./pages/actions/CreateTask"));
const SdWidget = React.lazy(() => import("./pages/widget/Sdwidget"));
const DashboardWidget = React.lazy(() =>
  import("./pages/dashboardWidgets/DashboardWidget")
);

const TabsWithoutBtn = React.lazy(() => import("./pages/tabs/TabsWithoutBtn"));
const ApplicationListing = React.lazy(() =>
  import("./pages/reward-corner/ApplicationListing")
);
const Open = React.lazy(() => import("./pages/myApplicaation/Open"));
const MasterContestActive = React.lazy(() =>
  import("./pages/reward-corner/MasterContestActive")
);
const MasterContestCompleted = React.lazy(() =>
  import("./pages/reward-corner/MasterContestCompleted")
);
function App() {
  return (
    <AppLayout>
      {/* <div className="container"> */}
      {/* <Router> */}
      <React.Suspense
        fallback={
          <div className="loader">
            {" "}
            <Spin size="large" />{" "}
          </div>
        }
      >
        <Routes>
          <Route path="/tabs" element={<TabsComp />} />
        </Routes>
        <div className="body_content">
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/" element={<SdWidget />} />
          </Routes>
          <Routes>
            <Route path="/dashboard_widgets" element={<DashboardWidget />} />
          </Routes>
          <Routes>
            <Route path="/my-application" element={<Myapplication />} />
          </Routes>
          <Routes>
            <Route path="/fortoday" element={<ForToday />} />
          </Routes>
          <Routes>
            <Route path="/open" element={<Open />} />
          </Routes>
          <Routes>
            <Route path="/converted" element={<Converted />} />
          </Routes>
          <Routes>
            <Route path="/failed" element={<Failed />} />
          </Routes>
          <Routes>
            <Route path="/action" element={<CreateTask />} />
          </Routes>
          <Routes>
            <Route path="/normal-tabs" element={<TabsWithoutBtn />} />
          </Routes>
          <Routes>
            <Route path="/application-listing" element={<ApplicationListing />} />
          </Routes>
          <Routes>
            <Route
              path="/mastercontest/active"
              element={<MasterContestActive />}
            />
          </Routes>
          <Routes>
            <Route
              path="/mastercontest/completed"
              element={<MasterContestCompleted />}
            />
          </Routes>
          <Routes>
            <Route path="/mastercontest/joinclub" element={<JoinClub />} />
          </Routes>
          <Routes>
            <Route path="/mastercontest/overall" element={<OverallRanking />} />
          </Routes>
          <Routes>
            <Route
              path="/mastercontest/newdetails"
              element={<MasterContestNewDetails />}
            />
          </Routes>
          <Routes>
            <Route path="/mastercontest/rewards" element={<Rewards />} />
          </Routes>
          {/* <Routes>
              <Route path="/mastercontest/joinclub" element={<JoinClub />} />
            </Routes> */}
        </div>
      </React.Suspense>
      {/* </Router> */}
      {/* </div> */}
    </AppLayout>
  );
}

export default App;

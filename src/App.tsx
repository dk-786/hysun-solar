import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import LicesingManager from './pages/Screens/LicesingManager';
import Maintenance from './pages/Screens/Maintenance';
import ProjectManager from './pages/Screens/ProjectManager';
import SalesManager from './pages/Screens/SalesManager';
import Stock from './pages/Screens/Stock';
import StockManager from './pages/Screens/StockManager';
import Orders from './pages/Screens/Orders';
import Chat from './pages/Screens/Chat';
import ChatGroup from './pages/Screens/ChatGroup';
import Addorders from './pages/Screens/Addorders';
import AddSalesManager from './pages/Screens/AddSalesManager';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route
        path="/auth/signin"
        element={
          <>
            <PageTitle title="Sign In" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <>
            <PageTitle title="Sign Up" />
            <SignUp />
          </>
        }
      />
      <Route
        path="*"
        element={
          <DefaultLayout>
            <Routes>
              <Route
                index
                element={
                  <>
                    <PageTitle title=" Dashboard" />
                    <ECommerce />
                  </>
                }
              />
              <Route
                path="/calendar"
                element={
                  <>
                    <PageTitle title="Calendar" />
                    <Calendar />
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <PageTitle title="Profile" />
                    <Profile />
                  </>
                }
              />
              <Route
                path="/forms/form-elements"
                element={
                  <>
                    <PageTitle title="Form Elements" />
                    <FormElements />
                  </>
                }
              />
              <Route
                path="/forms/form-layout"
                element={
                  <>
                    <PageTitle title="Form Layout" />
                    <FormLayout />
                  </>
                }
              />
              <Route
                path="/tables"
                element={
                  <>
                    <PageTitle title="Tables" />
                    <Tables />
                  </>
                }
              />
              <Route
                path="/settings"
                element={
                  <>
                    <PageTitle title="Settings" />
                    <Settings />
                  </>
                }
              />
              <Route
                path="/chart"
                element={
                  <>
                    <PageTitle title="Basic Chart" />
                    <Chart />
                  </>
                }
              />
              <Route
                path="/ui/alerts"
                element={
                  <>
                    <PageTitle title="Alerts" />
                    <Alerts />
                  </>
                }
              />
              <Route
                path="/ui/buttons"
                element={
                  <>
                    <PageTitle title="Buttons" />
                    <Buttons />
                  </>
                }
              />
              <Route
                path="/licesingmanager"
                element={
                  <>
                    <PageTitle title="Licesing Manager" />
                    <LicesingManager />
                  </>
                }
              />
              <Route
                path="/maintenance"
                element={
                  <>
                    <PageTitle title="Maintenance" />
                    <Maintenance />
                  </>
                }
              />
              <Route
                path="/projectmanager"
                element={
                  <>
                    <PageTitle title="Project Manager" />
                    <ProjectManager />
                  </>
                }
              />
              <Route
                path="/salesmanager"
                element={
                  <>
                    <PageTitle title="Sales Manager" />
                    <SalesManager />
                  </>
                }
              />
              <Route
                path="/stock"
                element={
                  <>
                    <PageTitle title="Stock" />
                    <Stock />
                  </>
                }
              />
              <Route
                path="/stockmanager"
                element={
                  <>
                    <PageTitle title="Stock Manager" />
                    <StockManager />
                  </>
                }
              />
              <Route
                path="/orders"
                element={
                  <>
                    <PageTitle title="Orders" />
                    <Orders />
                  </>
                }
              />
              <Route
                path="/chat"
                element={
                  <>
                    <PageTitle title="Chat" />
                    <Chat />
                  </>
                }
              />
              <Route
                path="/chatgroup"
                element={
                  <>
                    <PageTitle title="Chat Group" />
                    <ChatGroup />
                  </>
                }
              />
              <Route
                path="/addorders"
                element={
                  <>
                    <PageTitle title="Addorders" />
                    <Addorders />
                  </>
                }
              />
              <Route
                path="/addsalesmanager"
                element={
                  <>
                    <PageTitle title="AddSalesManager" />
                    <AddSalesManager />
                  </>
                }
              />
            </Routes>
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;
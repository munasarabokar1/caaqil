import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './App.jsx';
import './theme/variables.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {
  Page,  
  Block,
  BlockTitle
} from 'konsta/react';
import store from './store';
import { Provider } from 'react-redux';
import PrivateRoute from './components/Router/PrivateRoute.jsx';
import AdminRoute from './components/Router/AdminRoute.jsx';
import Login from './screens/Login/LoginScreen.jsx';
import Home from './screens/Home/Home.jsx';
import DetialsTransection from './screens/Transections/Details.jsx';
import ListTrans from './screens/Transections/List.jsx';
import ListMacaamiil from './screens/Macaamiil/ListMacaamiil.jsx';
import ViewMacaamiil from './screens/Macaamiil/ViewMacaamiil.jsx';
import HormuudList from './screens/Hormuud/HormuudList.jsx';
import SomtelList from './screens/Somtel/SomtelList.jsx';
import InboxDetails from './screens/Inbox/InboxDetails.jsx';
import HomeAdeega from './screens/Adeega/HomeAdeega.jsx';
import ListAdeega from './screens/Adeega/ListAdeega.jsx';
import AdeegaDetails from './screens/Adeega/AdeegaDetails.jsx';
import ListWaitlist from './screens/WaitingList/ListWaitlist.jsx';
import WaitingDetials from './screens/WaitingList/WaitingDetials.jsx';
import ProfileUser from './screens/Profile/ProfileUser.jsx';
import Seles from './screens/HomeView/Seles.jsx';
import CostumerSeles from './screens/HomeView/CostumerSeles.jsx';
import Cancled from './screens/HomeView/Cancled.jsx';
import Pending from './screens/HomeView/Pending.jsx';
import OtherMsg from './screens/HomeView/OtherMsg.jsx';
import MobileMsg from './screens/HomeView/MobileMsg.jsx';
import ErrorElements from './components/404.jsx';
import ListUsers from './screens/Users/ListUsers.jsx';
import HomeStart from './screens/Home/HomeStart.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MyApp />}  
    // errorElement={
    //    <>
    //     <ErrorElements  />
    //    </>
    // }
    >
       {/* public route */}
        <Route path='/login' element={<Login />} />
        <Route path='' element={<PrivateRoute />}>
        {/* authenticated only */}
        {/* Home */}
        <Route path='/' element={<HomeStart />} />
        {/* Home View */}
        <Route path='/seles' element={<Seles />} />
        <Route path='/costumers' element={<CostumerSeles />} />
        <Route path='/unsuccess' element={<Cancled />} />
        <Route path='/pending' element={<Pending />} />
        <Route path='/other' element={<OtherMsg />} />
        <Route path='/mobile' element={<MobileMsg />} />
        {/* Macaamiil */}
        <Route path='/macaamiil' element={<ListMacaamiil />} />
        <Route path='/macaamiil/details/:id' element={<ViewMacaamiil />} />
        {/* Transections */}
        <Route path='/dhaqdhaqaaqa' element={<ListTrans />} />
        <Route path='/transections/details/:id' element={<DetialsTransection />} />
        {/* Msgs */}
        <Route path='/hormuud' element={<HormuudList />} />
        <Route path='/somtel' element={<SomtelList />} />
        <Route path='/inbox/details/:id' element={<InboxDetails />} />
        {/* Adeegyada Somtel */}
        <Route path='/adeegyada' element={<HomeAdeega />} />
        <Route path='/adeega/:type' element={<ListAdeega />} />
        <Route path='/adeegga/:type/:id' element={<AdeegaDetails />} />
        {/* Waitlist  */}
        <Route path='/waitlists' element={<ListWaitlist />} />
        <Route path='/waiting/view/:id' element={<WaitingDetials />} />
        {/* Profile user */}
        <Route path='/profile' element={<ProfileUser />} />
       
       
      </Route>
      <Route path='' element={<AdminRoute />}>
        {/* admin route and owner only */}
        <Route path='/list' element={<ListUsers />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

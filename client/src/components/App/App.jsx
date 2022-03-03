import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { reactRouter } from '../../utils/utils.js'
import AdminPanel from '../AdminComponents//AdminPanel/AdminPanel';
import AdminAddHouse from '../AdminComponents//AdminAddHouse/AdminAddHouse.jsx'
import AdminCreateReservation from '../AdminComponents//AdminCreateReservation/AdminCreateReservation.jsx';
import AdminAllReservations from '../AdminComponents//AdminAllReservations/AdminAllReservations.jsx';
import AdminAllHouses from '../AdminComponents//AdminAllHouses/AdminAllHouses.jsx';
import Nav from '../Nav/Nav';
// import './App.css'

import AdminLogin from '../AdminComponents/AdminLogin/AdminLogin';
import { HomesList } from '../HomesList/HomesList';
import { AdminConfirmReviews } from '../AdminComponents/AdminConfirmReviews/AdminConfirmReviews';
// import { AdminEditHouse } from '../AdminComponents/AdminEditHouse/AdminEditHouse';

import Home from '../Home/Home';
// import Booking from '../Booking/Booking';
import Booking2 from '../Booking/Booking2';
import AdminLogout from '../AdminComponents/AdminLogout/AdminLogout';
import NotFound from '../NotFound/NotFound';
import { AdminEditHouseCard } from '../AdminComponents/AdminEditHouseCard/AdminEditHouseCard';
import FormBooking from '../Booking/Form/FormBooking';
import ServicesList from '../ServicesList/ServicesList';
import AdminEditReservations from '../AdminComponents/AdminEditReservations/AdminEditReservations.jsx';
import CalendarBook from '../CalendarBook/CalendarBook';
import HomeCardCurrent from '../Home/HomeCardCurrent/HomeCardCurrent';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' })
    dispatch({ type: 'FETCH_GET_REVIEWS' })
    dispatch({ type: 'FETCH_GET_SERVICES' })
  }, [dispatch])

  return (



    <BrowserRouter>

      <Nav />

      <Routes>
        <Route path={reactRouter.admin.main} element={<AdminPanel />} />
        <Route path={reactRouter.admin.addHouse} element={<AdminAddHouse />} />
        <Route path={reactRouter.admin.addReservation} element={<AdminCreateReservation />} />
        <Route path={reactRouter.admin.allReservations} element={<AdminAllReservations />} />
        <Route path={reactRouter.admin.allHouses} element={< AdminAllHouses />} />
        <Route path={reactRouter.admin.confirmReviews} element={<AdminConfirmReviews />} />
        <Route path={reactRouter.admin.chooseEditHouse} element={<AdminEditHouseCard />} />
        <Route path={reactRouter.admin.login} element={<AdminLogin />} />
        <Route path={reactRouter.admin.editReservations} element={<AdminEditReservations />} />
        {localStorage.getItem('token') && <Route path={reactRouter.admin.logout} element={<AdminLogout />} />}

        <Route path={reactRouter.user.homepage} element={<Home />} />
        <Route path={reactRouter.user.booking} element={<Booking2 />} />
        <Route path={reactRouter.user.currentHouse} element={<HomeCardCurrent />} />
        <Route path={reactRouter.user.house} element={<HomesList />} />
        <Route path={reactRouter.user.addedHouse} element={<FormBooking />} />
        <Route path={reactRouter.user.services} element={<ServicesList />} />
        <Route path={reactRouter.user.notfound} element={<NotFound />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;

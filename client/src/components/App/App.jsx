import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../../redux/store'
import { reactRouter } from '../../utils/utils.js'
import AdminPanel from '../AdminComponents//AdminPanel/AdminPanel';
import AdminAddHouse from '../AdminComponents//AdminAddHouse/AdminAddHouse.jsx'
import AdminCreateReservation from '../AdminComponents//AdminCreateReservation/AdminCreateReservation.jsx';
import AdminAllReservations from '../AdminComponents//AdminAllReservations/AdminAllReservations.jsx';
import AdminAllHouses from '../AdminComponents//AdminAllHouses/AdminAllHouses.jsx';
import Nav from '../Nav/Nav';
import './App.css'

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

function App() {

  return (


    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Nav />
           <Routes>

            <Route path={reactRouter.user.homepage} element={<Home />} />
            {/* <Route path={reactRouter.user.booking} element={<Booking />} /> */}
            <Route path={reactRouter.user.booking} element={<Booking2 />} />
            <Route path={reactRouter.admin.main} element={<AdminPanel />} />
            <Route path={reactRouter.admin.addHouse} element={<AdminAddHouse />} />
            <Route path={reactRouter.admin.addReservation} element={<AdminCreateReservation />} />
            <Route path={reactRouter.admin.allReservations} element={<AdminAllReservations />} />
            <Route path={reactRouter.admin.allHouses} element={< AdminAllHouses />} />
            <Route path={reactRouter.admin.confirmReviews} element={<AdminConfirmReviews />} />
            <Route path={reactRouter.admin.chooseEditHouse} element={<AdminEditHouseCard />} />
            <Route path={reactRouter.admin.login} element={<AdminLogin />} />
            <Route path={reactRouter.user.house} element={<HomesList />} />

            {localStorage.getItem('token') && <Route path={reactRouter.admin.logout} element={<AdminLogout />} />}
            <Route path={reactRouter.user.notfound} element={<NotFound />} />

          </Routes>
        </div>
      </BrowserRouter>

    </Provider>
  );
}

export default App;

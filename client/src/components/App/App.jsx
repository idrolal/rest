import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
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
import Booking from '../Booking/Booking';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Nav />

          <Routes>
            <Route path='/booking' element={<Booking/>}/>
            <Route path={reactRouter.admin.main} element={<AdminPanel />} />
            <Route path={reactRouter.admin.addHouse} element={<AdminAddHouse />} />
            <Route path={reactRouter.admin.addReservation} element={<AdminCreateReservation />} />
            <Route path={reactRouter.admin.allReservations} element={<AdminAllReservations />} />
            <Route path={reactRouter.admin.allHouses} element={< AdminAllHouses />} />
            <Route path='/reg' element={< AdminLogin />} />

          </Routes>
        </div>
      </BrowserRouter>

    </Provider>
  );
}

export default App;

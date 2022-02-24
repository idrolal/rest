import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'
import { reactRouter } from '../../utils/utils.js'
import AdminPanel from '../AdminPanel/AdminPanel';
import AdminAddHouse from '../AdminAddHouse/AdminAddHouse.jsx'
import AdminCreateReservation from '../AdminCreateReservation/AdminCreateReservation.jsx';
import AdminAllReservations from '../AdminAllReservations/AdminAllReservations.jsx';
import AdminAllHouses from '../AdminAllHouses/AdminAllHouses.jsx';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route />
          <Route path={reactRouter.admin.main} element={<AdminPanel />} />
          <Route path={reactRouter.admin.addHouse} element={<AdminAddHouse />} />
          <Route path={reactRouter.admin.addReservation} element={<AdminCreateReservation />} />
          <Route path={reactRouter.admin.allReservations} element={<AdminAllReservations />} />
          <Route path={reactRouter.admin.allHouses} element={< AdminAllHouses />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;

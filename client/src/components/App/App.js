import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'
import { HomesList } from '../HomesList/HomesList';


function App() {
  return (
    <Provider store={store}>
      {/* <BrowserRouter>
        <Routes>
          <Route /> 
        </Routes>
      </BrowserRouter> */}

      <HomesList/>

    </Provider>
  );
}

export default App;

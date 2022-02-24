import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'
import Nav from '../Nav/Nav';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="app-container">
      <Nav/>

        <Routes>
          <Route/> 
        </Routes>
      </div>
      </BrowserRouter>

    </Provider>
  );
}

export default App;

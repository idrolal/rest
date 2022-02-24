import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route /> 
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;

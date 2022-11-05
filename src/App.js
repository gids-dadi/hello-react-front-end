import React from 'react';
import Greeting from './components/Greeting';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/configStore';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import store from './store';
import './styles.css';
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;

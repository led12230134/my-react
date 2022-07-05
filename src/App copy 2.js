import './App.css';
import ComA from './view/react-redux/ComA';
import ComB from './view/react-redux/ComB';
import store from './react-redux/store';
import {Provider} from 'react-redux';
import TargetComponent from './view/TargetComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TargetComponent />
        <Provider store={store}>
          <ComA></ComA>
          <ComB></ComB>
        </Provider>
      </header>
    </div>
  );
}

export default App;

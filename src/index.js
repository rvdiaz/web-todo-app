import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/wrappers/App';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/styles.css';
import { TodoContextProvider } from './context/TodosContext';
import { ModeInputProvider } from './context/ModeInputContext';
import { InputValueProvider } from './context/InputValueContext';
import { FilterDisplayProvider } from './context/TodoDisplayContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <ModeInputProvider>
        <InputValueProvider>
          <FilterDisplayProvider>
            <App/>
          </FilterDisplayProvider>
        </InputValueProvider>
      </ModeInputProvider>
    </TodoContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


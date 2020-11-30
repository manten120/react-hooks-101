import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';
import OperationLogs from './OperationLogs';

const app_key = 'appWithRedux';

const App = () => {
  const appState = localStorage.getItem(app_key);

  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(app_key, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm/>
        <Events/>
        <OperationLogs/>
      </div>
    </AppContext.Provider>
  );
};

export default App;
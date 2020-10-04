import React from 'react';
import Navigation from './src/routes/Navigation';
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import configureStore from "./src/store/index";

const { persistor, store } = configureStore();

export default function App() {
 
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Navigation />
      </PersistGate>
    </Provider>
  );
}


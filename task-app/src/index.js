import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './App.css'
import {Provider} from 'react-redux'
import configureStore from './confiureStore/configureStore'
const store = configureStore()
store.subscribe(()=>{
  console.log(store.getState())
})
const jsx = (<Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))
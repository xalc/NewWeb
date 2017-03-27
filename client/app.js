import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { AppContainer } from 'react-hot-loader';
import RedBox from 'redbox-react';
const render = (Component) => {
  ReactDOM.render(
    <AppContainer >
      <Component/>
    </AppContainer>,
    document.getElementById('container')
  );
};
window.onload = () =>{
   render(App);
  //  ReactDOM.render(<App/>,document.getElementById('container'));
}
// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app.jsx', () => {
    render(App);
  });
}

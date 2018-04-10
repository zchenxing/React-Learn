import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import htmladapt from './util/htmladapt'
import 'antd-mobile/dist/antd-mobile.css'
import './assets/css/font-awesome.min.css'
import './assets/sass/reset.scss';


htmladapt.init();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


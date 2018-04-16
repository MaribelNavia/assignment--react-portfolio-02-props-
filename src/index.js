import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './css/styles.css';
import {skills, eduList, jobsList} from './data/datasource.js';

ReactDOM.render(
  <App 
  skills = {skills}
  eduList = {eduList}
  jobsList = {jobsList}

   />,
  document.getElementById('root')
);

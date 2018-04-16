import React, { Component } from 'react';
import SkillList from './components/SkillList';
import EducationHistory from './components/EducationHistory';
import WorkHistory from './components/WorkHistory';


class App extends Component {
  render() {
    return (
      <div className="App">
      <SkillList skills = {this.props.skills}/>
      <EducationHistory eduList = {this.props.eduList} />
      <WorkHistory jobsList = {this.props.jobsList} />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

class SkillList extends Component{
	render(){
		console.log(this.props.skills)
		return (
			<section>
  			<h4>Skills</h4>
  			<div className="skills-list">
			{this.props.skills.map(function(skills){
				return(
    			<span className="skills-list__single">{skills}</span>
				)			
			})}
			</div>
			</section>
		)
	}
}

export default SkillList;

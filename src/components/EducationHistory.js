import React, {Component} from 'react';

class EducationHistory extends Component{
	render(){
		return (
			<section>
				<h4>Education</h4>
				{this.props.eduList.map(function(edu){
					return(
						<div class="degree-list">
  						<div class="degree">
      					<h5 class="degree__institute">{edu.institute}</h5>
			      		<p class="degree__field">{edu.fieldOfStudy}</p>
			      		<p class="degree__dates">{edu.dates}</p>
    					</div>
  					</div>
						)
				})}
  			
  		</section>
		)
	}
}

export default EducationHistory;

import React, {Component} from 'react';

class WorkHistory extends Component{
	render(){
		return (
			<section>
    		<h4>Work Experience</h4>
            {this.props.jobsList.map(function(job){
                return(
                    <div class="job-timeline">
                    <div class="job">
                    <div class="job__years">
                      <h6 class="job__end">{job.years.end}</h6>
                      <h6 class="job__start">{job.years.start}</h6>
                    </div>
                      <h5 class="job__title">{job.title}</h5>
                      <h5 class="job__company">{job.company}</h5>
                        <p class="job__description">{job.description}</p>
                    </div>
                    </div>
                     )
            })}
    		
  		</section>
		)
	}
}

export default WorkHistory;

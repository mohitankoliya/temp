import React, { Component } from 'react';


class Loader extends Component {


	render() {
		return (
			
					<div className="loader_box">
						<div className="loader_content">
							<div className="loader_circle"></div>
							<div className="loader_mask">
								<div className="loader_line"></div>
							</div>

						</div>
					</div> 
		);
	}
}


 export default Loader;


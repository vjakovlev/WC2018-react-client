import React, { Component } from 'react';

class CreateContinent extends Component{
	



	render() {
		return (
			<div className="container">
				<h1>Create Continent</h1>
				<div id="signup">
				    <form onSubmit={}>
				        <input  ref="Name" name="Name" type="text" id="txtContinetName" placeholder="Enter continent name" />
						<button type="Submit"> Create continent</button>
				    </form>
				</div>
			</div>
		);
	}
}


export default CreateContinent;
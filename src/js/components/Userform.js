import React, { Component } from "react";

export class Userform extends Component {
	constructor (props){
		super(props)
		this.state = {time: 0}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    	this.setState({time: event.target.value});
	}

	handleSubmit(event) {
    	event.preventDefault();
    	this.props.setTime(this.state.time);
    	return false;
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit} className='userform'>	
				Countdown: 
				<input 
					type="number" 
					onChange={this.handleChange} 
					min="0"
					placeholder="(Min)" 
					className='coolinput' />
				<input type="submit" value="Start" className='fatbutton' />
			</form>
		);
	}
}
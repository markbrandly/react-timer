import React, { Component } from "react";


export class Speedselect extends Component {
	constructor (props){
		super(props)
		this.state = {speed: 1}

		this.handleChange = this.handleChange.bind(this)
	}
	
	handleChange (event){
		this.setState({speed: event.target.value})
		this.props.setSpeed(event.target.value)
	}

	render(){
		const listItems = this.props.speeds.map((speed, i) => {
			return (
				<span key={"blah" + i}>
					<input key={"input" + i} type="radio" id={"id-" + i} onChange={this.handleChange} name="gender" value={speed} checked={this.state.speed == speed} />
					<label key={"label" + i} htmlFor={"id-" + i}>{speed}x</label>
				</span>
			)
		});

		return (
			<form className='speed-select'>
			Speed:
			{listItems}
			</form>
		);
	}
}
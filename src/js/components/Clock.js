import React, { Component } from "react";


export class Clock extends Component {
	constructor (props){
		super(props)
	}
	
	render(){
		var minutes = Math.floor(this.props.currentTime / 60)
		var seconds = Math.floor(this.props.currentTime % 60)

		var classes = []
		var text = ""
		var alertDiv = ""
		var classString = ""

		if(this.props.currentTime < 20 && this.props.time){
			classes.push("red")
		}
		if(this.props.currentTime <= 10 && this.props.time){
			classes.push("blinking")
		}

		if (this.props.currentTime == 0){
			text = "Time's up!";
		}
		else if(this.props.currentTime <= this.props.time / 2){
			text = "More than halfway there!";
		}
		

		classes.forEach(e => classString = classString + e + " ")

		if(this.props.time > 0 && text){
			alertDiv = <div className="alert-text">{text}</div>;
		}

		return (
			<div className="clock">
		          {alertDiv}
		          <div className="time">
				<span className={classString}>{('0' + minutes).slice(-2)}:{('0' + seconds).slice(-2)}</span>
				<button onClick={this.props.togglePause} className={'pause-button ' + (this.props.paused ? "pause" : "play")}><span></span></button>
				</div>
			</div>
		);
	}
}
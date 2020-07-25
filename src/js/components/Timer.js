import React, { Component } from "react";
import {Speedselect} from "./Speedselect";
import {Userform} from "./Userform";
import {Clock} from "./Clock";

const refreshRate = 6; //defines how many times the timer refreshes per second

export class Timer extends Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      currentTime: 0,
      speed: 1,
      lastUpdated: 0,
      paused: true
    };

    this.setTime = this.setTime.bind(this);
    this.togglePause = this.togglePause.bind(this)
    this.setSpeed = this.setSpeed.bind(this)
  }

  componentDidMount(){
    setInterval(function(){
      const currentTime = new Date().getTime();
      var timeDifference = (currentTime - this.state.lastUpdated)/1000
      this.setState({lastUpdated: currentTime})
      if(!this.state.paused){
        var updatedTime = this.state.currentTime - timeDifference * this.state.speed

        if(updatedTime > 0) {
          this.setState({currentTime: updatedTime})
        }
        else{
          this.setState({currentTime:0, paused: true})
        }
      }
    }.bind(this), 1000/refreshRate);
  }

  setTime(minutes){
    this.setState({
      time: minutes * 60, 
      currentTime: minutes * 60,
      paused: false,
      lastUpdated: new Date().getTime()
    })
  }

  setSpeed(speed){
    this.setState({
      speed: speed
    });
    console.log(speed)
  }

  togglePause(){
    this.setState({paused: !this.state.paused});
  }

  render() {
    return (
      <div>
        <Userform setTime={this.setTime} />
        <div className='clock-container'>

          <Clock currentTime = {this.state.currentTime} time={this.state.time} paused={this.state.paused} togglePause={this.togglePause} />
          <Speedselect setSpeed={this.setSpeed} speeds={[1,1.5,2]} />
        </div>
      </div>
    );
  }
}
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    break: 5,
    session: 25,
    time: 25,
    start: false,
    mode: "Session",
    audio: false,
  };

  incrementB = () => {
    if (this.state.break < 60) {
      this.setState((state) => ({
        break: state.break + 1,
      }));
    }
  };

  decrementB = () => {
    if (this.state.break > 1) {
      this.setState((state) => ({
        break: state.break - 1,
      }));
    }
  };

  incrementS = () => {
    if (this.state.session < 60) {
      this.setState((state) => ({
        session: state.session + 1,
        time: state.time + 1,
      }));
    }
  };

  decrementS = () => {
    if (this.state.session > 1) {
      this.setState((state) => ({
        session: state.session - 1,
        time: state.time - 1,
        minutes: state.time - 1,
        seconds: "00",
      }));
    }
  };

  reset = () => {
    this.setState({
      break: 5,
      session: 25,
      time: 25,
      start: false,
      mode: "Session",
    });
    this.stopCountdown();
    let audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  runTimer = () => {
    if (this.state.start) {
      this.stopCountdown();
    } else {
      this.startCountdown();
    }
  };

  countdown = () => {
    if (Math.floor(this.state.time * 60) > 0) {
      this.setState((state) => ({
        time: (state.time * 60 - 1) / 60,
      }));
    } else if (this.state.mode === "Session") {
      this.setState((state) => ({
        mode: "Break",
        time: state.break,
      }));
    } else {
      this.setState({
        mode: "Session",
        time: this.state.session,
      });
    }

    if (Math.floor(this.state.time * 60) === 0) {
      document.getElementById("beep").play();
    }
  };

  stopCountdown = () => {
    clearInterval(this.intervalID);
    this.setState({
      start: false,
    });
  };

  startCountdown = () => {
    this.intervalID = setInterval(this.countdown, 1000);
    this.setState({
      start: true,
    });
  };

  clock = () => {
    let minutes = Math.floor(this.state.time);
    let seconds = Math.round(
      (this.state.time - Math.floor(this.state.time)) * 60
    );
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  };

  render() {
    return (
      <div>
        <h1>Pomodoro Clock</h1>

        <div className="container">
          <div id="buttons-wrapper">
            <div id="session">
              <p id="session-label"> Session Length</p>
              <button id="session-increment" onClick={this.incrementS}>
                +
              </button>
              <p id="session-length">{this.state.session}</p>
              <button id="session-decrement" onClick={this.decrementS}>
                -
              </button>
            </div>

            <div id="break">
              <p id="break-label"> Break Length</p>
              <button id="break-increment" onClick={this.incrementB}>
                +
              </button>
              <p id="break-length">{this.state.break}</p>
              <button id="break-decrement" onClick={this.decrementB}>
                -
              </button>
            </div>
          </div>

          <div id="actual-timer">
            <h2 id="timer-label">{this.state.mode}</h2>
            <h3 id="time-left">{this.clock()}</h3>

            <div id="interaction">
              <button id="start_stop" onClick={this.runTimer}>
                {" "}
                Play/Pause{" "}
              </button>
              <button id="reset" onClick={this.reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

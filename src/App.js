import React, { Component } from 'react';
import DateDiv from "./components/date"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dateCheck: false,
      hrs: 0,
      min: 0,
      sec: 0,
      date: 0,
      month: 0,
      year: 0
    }
  }
  componentDidMount(){
    setInterval(this.getTime, 1000);
  }

  getTime=() =>{
    var d = new Date();
    this.setState({
      hrs: (d.getHours()),
      min: (d.getMinutes()),
      sec: (d.getSeconds()),
      date: (d.getDate()),
      month: (d.getMonth()),
      year: (d.getFullYear())
    })
  }

  handleOnChange() {
    var cond = this.state.dateCheck;
    this.setState({
      dateCheck: !cond
    })
    console.log(this.state.dateCheck)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="flatRoundedCheckbox" onChange={()=>this.handleOnChange()}>
            <input type="checkbox" id="flatOneRoundedCheckbox" name=""  />
            <label for="flatOneRoundedCheckbox"></label>
          <div></div>
        </div>
        <div><i className="fa fa-calendar icon-color" aria-hidden="true"></i></div>
        </div>
        <div className="container flex-center">
        {this.state.hrs} : {this.state.min} : {this.state.sec}
        {this.state.dateCheck && <DateDiv date={this.state.date} month={this.state.month} year={this.state.year}/>}
        </div>
      </div>
    );
  }
}

export default App;

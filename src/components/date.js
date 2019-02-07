import React, { Component } from "react";

class DateDiv extends Component {

    render() {
        return(
            <div className="date">
                {this.props.date} / {this.props.month} / {this.props.year}
            </div>
        )
    }
}

export default DateDiv;
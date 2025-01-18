import React, { Component } from "react";
import '../../index.css';

export default class Task extends Component {
  state = {
    done: false,
    editing: false
  }
  inputField = null;

  toggleDone = () => {
    this.setState((prevState) => ({done: !prevState.done}))
  }

  toggleCheckbox = (event) => {
    event.stopPropagation();
    this.toggleDone();
  }
  
  render() {
    let {description, createdAt, liClass} = this.props.info;
    const done = this.state.done;
    if (liClass === "editing") {
      this.inputField = (
        <input type="text" className="edit" value="Editing task" />
      )
    }
    // if (liClass === "completed") {this.toggleDone()}
    return (
      <li className={ liClass } onClick={this.toggleDone}>
        <div className="view">
          <input className="toggle" type="checkbox" 
           checked={liClass === 'completed' || done}
           onChange={this.toggleCheckbox}/>
          <label>
            <span className="description">{description}</span>
            <span className="created">{createdAt}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        { this.inputField }
      </li>
    )
  }

}
import React, { Component } from "react";
import '../../index.css';

export default class Task extends Component {
  state = {
    done: (this.props.info.liClass === "completed"),
    editing: (this.props.info.liClass === "editing")
  }
  inputField = null;

  toggleDone = (event) => {
    if (event.target.className === "toggle" ||
      this.state.editing) return;
    this.setState((prevState) => ({done: !prevState.done}));
  }

  toggleCheckbox = () => {
    this.setState((prevState) => ({ done: !prevState.done }));
  }
  
  render() {
    let {description, createdAt} = this.props.info;
    const onDelete = this.props.onDelete;
    const {done, editing} = this.state;
    if (editing) {
      this.inputField = (
        <input type="text" className="edit" value="Editing task" />
      )
    }
    const computedLiClass = done ? "completed" : (editing ? "editing" : "");

    return (
      <li className={ computedLiClass } onClick={this.toggleDone}>
        <div className="view">
          <input className="toggle" type="checkbox" 
           checked={done}
           onChange={this.toggleCheckbox}
           />
          <label>
            <span className="description">{description}</span>
            <span className="created">{createdAt}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button
           className="icon icon-destroy"
           onClick={() => onDelete()}></button>
        </div>
        { this.inputField }
      </li>
    )
  }

}
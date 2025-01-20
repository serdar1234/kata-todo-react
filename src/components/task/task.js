import React, { Component } from "react";
import '../../index.css';

export default class Task extends Component {
  info = this.props.info;
  state = {
    done: (this.info.liClass === "completed"),
    editing: (this.info.liClass === "editing")
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
    let {description, createdAt} = this.info;
    const {onDelete, onEdit} = this.props;
    const {done, editing} = this.state;
    if (editing) {
      this.inputField = (
        <input type="text" className="edit" 
        value={this.info.description} />
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
          <button 
            className="icon icon-edit"
            onClick={() => onEdit()}></button>
          <button
            className="icon icon-destroy"
            onClick={() => onDelete()}></button>
        </div>
        { this.inputField }
      </li>
    )
  }

}
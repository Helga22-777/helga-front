import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./list.css";

class List extends React.Component {
    render() {
        return (
            <ul>
              {this.props.list.map(item => {
                  const {id, value} = item;
                  return (
                      <li className={item.do ? "check" : "todo-item"} key={id} >
                          {value}
                          <button className="fa_check" onClick={() => this.props.onClick(id)} >
                          <FontAwesomeIcon icon={faCheck} color="red" />
                          </button>
                          <button className="fa_trash" onClick={() => this.props.onDelete(id)}>
                          <FontAwesomeIcon icon={faTrash} />
                          </button> 
                      </li>
                  )
              })}
            </ul>
        )
    }
}
export default List;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./list.css";

const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => (
        <li className={item.do ? "check" : "todo-item"} key={item.id}>
          {item.value}
          <button className="fa_check" onClick={() => props.onClick(item.id)}>
            <FontAwesomeIcon icon={faCheck} color="red" />
          </button>
          <button className="fa_trash" onClick={() => props.onDelete(item.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;

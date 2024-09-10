import React, { useState } from "react";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import "./../List/list.css";

const Form = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      props.handleAdd({
        id: v4(),
        value: value,
      });
      setValue("");
    }
  };
  const keyPressDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <form>
      <input
        className="form-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={"New todo..."}
      />
      <button
        className="form-btn"
        type="submit"
        onClick={handleSubmit}
        onKeyDown={keyPressDown}
      >
        <FontAwesomeIcon icon={faSquarePlus} />
      </button>
    </form>
  );
};
export default Form;

import React from "react";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./../List/list.css";

class Form extends React.Component {
    state = {
        value: '',
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.value) {
            this.props.handleAdd({
                id: v4(),
                value: this.state.value,
            })
            this.setState({
                value: '',
            })
        }
    }
    keyPressDown(e) {
      if(e.key === 'Enter') {
          this.handleSubmit();
      }
    }
    render() {
        return(
            <form>
                <input className="form-input" type="text" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder={'New todo...'} />
                <button className="form-btn" type="submit" onClick={this.handleSubmit.bind(this)} onKeyDown={this.keyPressDown.bind(this)}>
                    <FontAwesomeIcon icon={faSquarePlus} />
                    </button>
            </form>
        )
    }
}

export default Form;
import React from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";
import List from "./List/List";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            do: false,
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.completeTodo =this.completeTodo.bind(this);
    }
    handleAdd(todo) {
        this.setState({
            list: this.state.list.concat(todo),
        })
    }
    handleDelete(id) {
        this.setState({
            list: this.state.list.filter(item => item.id !== id),
        })
    }
    completeTodo(id) {
        this.setState({
            list: this.state.list.map(item => {
                if(item.id === id) {
                   item.do = !item.do;
                }
                return item
            }),
        });

    }
    render() {
        return (
            <div className="wrapper">
                <h1>Todo List</h1>
                <Header todosCount={this.state.list.length} />
                <Form handleAdd={this.handleAdd} />
                <List list={this.state.list} onDelete={this.handleDelete} onClick={this.completeTodo} />
            </div>
        )
    }
}
export default TodoList;

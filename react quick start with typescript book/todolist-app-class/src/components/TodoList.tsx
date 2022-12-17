import React, {Component, PureComponent, useState} from "react";
import { TodoListItemType } from "../AppContainer";
import TodoListItem from "./TodoListItem"

type TodoListProps = {
    todoList: Array<TodoListItemType>;
    toggleDone: Function;
    deleteTodo: Function;
};

export default class TodoList extends PureComponent<TodoListProps, {}> {

    /*
    shouldComponentUpdate(nextProps: TodoListProps, nextState: {}) {
        if (nextProps.todoList !== this.props.todoList) return true;
        return false;
    }
    */

    render() {
        console.log("## TodoList render");
        let items = this.props.todoList.map((item) => {
            return <TodoListItem key={item.no} todoItem={item}
            deleteTodo={this.props.deleteTodo} toggleDone={this.props.toggleDone} />
        });
        return (
        <div className="row">
            {" "}
            <div className="col">
                <ul className="list-group">{items}</ul>
            </div>
        </div>
        );
    }
}
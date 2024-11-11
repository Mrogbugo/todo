import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todolist extends Component {
    render() {
        return (
            <section>
                <h2>To do list</h2>
                <TodoItem />
            </section>
        );
    }
}

export default Todolist;
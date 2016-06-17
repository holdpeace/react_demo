import React from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'learning React.',
                    completed: false
                }, {
                    id: 2,
                    text: 'Watching Redux videos.',
                    completed: true
                }
            ],
            filter: 'SHOW_ALL'
        };
    }
    toggleTodo(todoId) {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === todoId) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    }

    addTodo(newTodoText) {
        let {todos} = this.state;
        todos.push({
            id: todos.length + 1,
            text: newTodoText,
            completed: false
        });
        this.setState({todos: todos});
      }

    filterChange(newFilter) {
        this.setState({filter: newFilter})
    }

    getVisibleTodos(todos, filter) {
        switch (filter) {
            case 'SHOW_ALL':
                return todos
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed)
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed)
        }
    }

    render() {
        return (
          <div>
            <AddTodo onAddTodo={this.addTodo.bind(this)} />
            <TodoList todos={this.getVisibleTodos(this.state.todos, this.state.filter)}
                    onTodoClick={this.toggleTodo.bind(this)} />
            <Footer currentFilter={this.state.filter} onFilterChange={this.filterChange.bind(this)} />
          </div>
        );
    }
}
export default TodoApp;

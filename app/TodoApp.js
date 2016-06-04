import React from 'react'
//import AddTodo from './AddTodo';
import TodoList from './TodoList';
//import Footer from './Footer';

class TodoApp extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
         {id: 1, text: 'learning React.', completed: false},
         {id: 2, text: 'Watching Redux videos.', completed: true}
       ],
       filter: 'SHOW_ALL'
     };

   }

   toggleTodo(todoId) {
     this.setState({
       todos: this.state.todos.map(
         (todo) => {
           if(todo.id === todoId) {
             todo.completed = !todo.completed;
           }
           return todo;
         }
       )
     });
   }

   render() {
     return (
       <div>

         <TodoList todos={this.state.todos} onTodoClick={this.toggleTodo.bind(this)}/>

       </div>
     );
   }
}
export default TodoApp;

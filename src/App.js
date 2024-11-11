import React from "react";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [

        {
          id: 1,
          title: "Wake up"
        },

        {
          id: 2,
          title: "Eat"
        },
        {
          id: 3,
          title: "Code"
        },
        {
          id: 4,
          title: "Sleep"
        },

      ],
      id: uuid(),
      item: '',
      editItem: false
    }
  };

  handleChange = e => {
    console.log("");

  }
  handleSubmit = e => {

  }
  clearList = () => {
    console.log('clear list');

  }

  handleDelete = (id) => {
    console.log(`handle edit ${id}`);

  }

  handleEdit = (id) => {
    console.log(`handle edit ${id}`);

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=".col-10.mx-auto.col-md-8.mt-5">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <Todoinput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.editItem} />
            <Todolist items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    )
  }
}
export default App;

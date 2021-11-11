import React, { useState } from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import ToDo from "../components/ToDo";

function Home({ todos, addToDo }) {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>Список задач</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={text} />
        <button>Добавить задачу</button>
      </form>
      <ul>{todos.map(item => <ToDo item={item} key={item.id} />)}</ul>
    </>
  );
}

function mapStateToProps(state) {
    console.log(state);
    return { todos: state }
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),
        deleteToDo: (text) => dispatch(actionCreators.deleteToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

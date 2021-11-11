import React, { useState } from "react";
import {connect} from "react-redux";
import ToDo from "../components/ToDo";
import {add} from "../store";

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
        addToDo: (text) => dispatch(add(text)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

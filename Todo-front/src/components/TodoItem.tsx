import React from "react";
import { useState } from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {

  const checkTodo: string = todo.status ? `line-through` : "";

  const [isBoolState, setIsBoolState] = useState<boolean>(false);

  const [NameInput, setNameInput] = useState<string>(todo.name);
  const [Description, setDescriptionInput] = useState<string>(todo.description);
  const handleDoubleClick = () => {
    setIsBoolState(true);
  };

  const handleFormIn = (e: React.FormEvent<HTMLInputElement>): void => {
    setNameInput(e.currentTarget.value);
  };
  const submitHandler = () => {
    todo.name = NameInput
    todo.description = Description
    console.log(todo);
    updateTodo(todo)
    setIsBoolState(false);
  }
  const handleFormDes = (e: React.FormEvent<HTMLInputElement>): void => {
    setDescriptionInput(e.currentTarget.value);
  };
  const changeState = () => {
    setIsBoolState(false)
  }
  return (
    <>
      {isBoolState ? (
        <form className="Form" onSubmit={() => submitHandler()}>
          <div className="Form-div">
            <div className="Form-item">
              <label htmlFor="name">Title</label>
              <input
                onChange={handleFormIn}
                type="text"
                id="name"
                value={NameInput}
              />
            </div>
            <div className="Form-item">
              <label htmlFor="description">Description</label>
              <input
                onChange={handleFormDes}
                type="text"
                id="description"
                value={Description}
              />
            </div>
          </div>
          <div className="Form-item">
            <button type="submit">Update</button >
          </div>
          <div className="Form-item">
            <button onClick={changeState}>Cancel</button >
          </div>
        </form>
      ) : (
        <div className="Card" onDoubleClick={handleDoubleClick}>
          <div className="Card--text">
            <h1 className={checkTodo}>{todo.name}</h1>
            <span className={checkTodo}>{todo.description}</span>
          </div>
          <div className="Card--button">
            <button
              onClick={() => deleteTodo(todo._id)}
              className="Card--button__delete"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );

};

export default Todo;

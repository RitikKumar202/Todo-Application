import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
      <div className="Form-div">
        <div className="Form-item">
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        <div className="Form-item">
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
        <div className="Form-item">
          <button disabled={formData === undefined ? true : false}>Add Todo</button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;

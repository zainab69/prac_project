import React, { useState } from "react";
import InputField from "../../Atoms/InputField/InputField";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../../../Actions/Actions";
import "./Todo.css";

const Todo = () => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const { register, getValues, reset, setValue } = useForm();
  const todos = useSelector((state) => state.products);
  console.log(todos, "---------");
  const dispatch = useDispatch();
  const handleChange = () => {
    const value = getValues("todo");

    dispatch(addTodo(value));
  };
  const handleupdate = (index) => {
    const value = getValues("todo");
    console.log(value);
    
    // if (editingIndex !== null) {
    //   console.log("zainab");
    //   dispatch(editTodo(todos[editingIndex].id, value));
    // } else {
    dispatch(editTodo(index,value));
    // }
    // reset({ todo: "" });
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };
  const handleEdit = (index) => {
    setIsUpdate(true);
    const currentValue = todos[index];
    setValue("todo", currentValue);
    dispatch(editTodo(index, currentValue));
    setEditingIndex(index);
  };
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="todo-input">
        <InputField name="todo" register={register} />

        {isUpdate ? (
          <button className="todo-add" onClick={handleupdate}>
            Update
          </button>
        ) : (
          <button className="todo-add" onClick={handleChange}>
            Add
          </button>
        )}
      </div>
      <ul>
        {todos.map((item, index) => (
          <li key={index} className="list-item">
            <p>{item}</p>
            <div className="update-button">
              <button className="todo-add" onClick={() => handleDelete(index)}>
                Delete
              </button>
              <button className="todo-add" onClick={() => handleEdit(index)}>
                EDIT
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;

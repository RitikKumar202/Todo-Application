import axios, { AxiosResponse } from "axios";

const baseUrl: string = "https://todo-app-bdcg.onrender.com";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (error) {
    if (error instanceof Error) {
      // If error is an instance of Error, extract the error message
      throw new Error(error.message);
    } else {
      // If error is not an instance of Error, convert it to a string
      throw new Error(String(error));
    }
  }
};

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    console.log(todo);
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    );
    return saveTodo;
  } catch (error) {
    if (error instanceof Error) {
      // If error is an instance of Error, extract the error message
      throw new Error(error.message);
    } else {
      // If error is not an instance of Error, convert it to a string
      throw new Error(String(error));
    }
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };
    console.log(todoUpdate);
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todo
    );
    return updatedTodo;
  } catch (error) {

    if (error instanceof Error) {
      // If error is an instance of Error, extract the error message
      throw new Error(error.message);
    } else {
      // If error is not an instance of Error, convert it to a string
      throw new Error(String(error));
    }

  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-todo/${_id}`
    );
    return deletedTodo;
  } catch (error) {
    if (error instanceof Error) {
      // If error is an instance of Error, extract the error message
      throw new Error(error.message);
    } else {
      // If error is not an instance of Error, convert it to a string
      throw new Error(String(error));
    }
  }
};

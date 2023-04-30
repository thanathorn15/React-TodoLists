import axios from "axios";

axios.defaults.baseURL = 'http:localhost:8080/todos';

 export const deleteTodoAPI = async(todoId) => await axios.delete(`/todos/${todoId}`);

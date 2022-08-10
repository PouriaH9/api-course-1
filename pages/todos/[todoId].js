import axios from "axios";
import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({ todo }) => {
  return (
    <div>
      <h1>Todo detail page</h1>
      <h2>title : {todo.title}</h2>
      <p>description : {todo.description}</p>
    </div>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getOneTodo(query);
  console.log(todo);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}

import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "../components/todos/todoList";
import TodoForm from "../components/todos/AddNewTodo";
import Todo from "../server/models/todo";
import Layout from "../containers/Layout";

export default function Home({ todos }) {
  const [data, setData] = useState(todos);

  const deleteTodo = (id) => {
    console.log({ id });
    axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => {
        setData(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodo = (e, formData) => {
    e.preventDefault();
    axios
      .post(`/api/todos/`, { formData })
      .then(({ data }) => {
        console.log(data);
        setData(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const completeHandler = (id) => {
    axios
      .put(`/api/todos/complete/${id}`)
      .then(({ data }) => {
        console.log(data);
        setData(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <section className="w-full h-full flex flex-row">
        {/* todoForm */}
        <div className="w-1/2">
          <TodoForm onAdd={addTodo} />
        </div>

        {/* TodoList */}
        <div className="w-1/2 ">
          <TodoList
            data={data}
            onDelete={deleteTodo}
            onComplete={completeHandler}
          />
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const todo = await Todo.find({});
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todo)),
    },
  };
}

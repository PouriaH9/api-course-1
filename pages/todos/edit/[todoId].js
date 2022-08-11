import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { getOneTodo } from "../../api/todos/[todoId]";

const TodoPage = ({ todo }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
  });
  const changeHandeler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/todos/${router.query.todoId}`, { todo: formData })
      .then((res) => {
        console.log(res.data);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-red-500">
      <h1>Todo detail page</h1>
      <form className="px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
        <div className="">
          <label
            className="justify-start text-xl text-white mb-1 block "
            htmlFor="todo-title"
          >
            Title
          </label>
          <input
            name="title"
            placeholder="write a todo..."
            id="todo-title"
            className=" w-max bg-stone-900 border rounded border-white p-3 focus:outline-none focus:border-indigo-500	text-white"
            type="text"
            value={formData.title}
            onChange={changeHandeler}
          />
        </div>
        <div className="">
          <label
            className="justify-start text-xl text-white mb-1 block mt-4"
            htmlFor="todo-description"
          >
            Description
          </label>
          <textarea
            value={formData.description}
            name="description"
            onChange={changeHandeler}
            id="todo-description"
            className="bg-stone-900 border rounded border-white p-3 focus:outline-none focus:border-indigo-500	text-white"
          ></textarea>
        </div>
        <div className="mt-2">
          <button
            onClick={() => router.push("/")}
            type="button"
            className="bg-transparent hover:bg-white text-white font-semibold hover:text-stone-900 py-2 px-4 border border-white hover:border-transparent rounded mr-3"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-transparent hover:bg-white text-white font-semibold hover:text-stone-900 py-2 px-4 border border-white hover:border-transparent rounded"
          >
            Update todo
          </button>
        </div>
      </form>
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

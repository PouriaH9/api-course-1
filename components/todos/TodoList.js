import { CheckIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import Link from "next/link";

const TodoList = ({ data, onDelete }) => {
  return (
    <div className="container p-2 xl:max-w-screen-xl mx-auto">
      <section className="flex items-center justify-center">
        <div className="w-full max-w-screen-md p-2 md:p-4 rounded-xl ">
          {data.map((todo) => {
            return (
              <div
                key={todo.id}
                className="transiotion-all duration-300 hover:border-indigo-500 hover:p-6 text-white text-xl flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl shadow "
              >
                <Link href={`/todos/${todo._id}`}>
                  <a>
                    <span>{todo.title}</span>
                  </a>
                </Link>
                <div className="flex p-1 ">
                  <button className="flex items-center justify-between mr-3">
                    <CheckIcon className="h-7 w-7 text-green-500" />
                  </button>
                  <button
                    onClick={() => onDelete(todo._id)}
                    className="flex items-center justify-between mr-3 "
                  >
                    <TrashIcon className="h-5 w-5 text-red-500" />
                  </button>
                  <Link href={`/todos/edit/${todo._id}`}>
                    <a className="block">
                      <button className="flex items-center justify-between mr-3">
                        <PencilAltIcon className="h-5 w-5 text-blue-500" />
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TodoList;

import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isShow, setIsShow] = useState(false);

  const changeHandeler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  if (!isShow) {
    return (
      <div className="text-center mt-10 ">
        <button
          onClick={() => setIsShow(true)}
          className="bg-transparent hover:bg-white text-white font-semibold hover:text-stone-900 py-2 px-4 border border-white hover:border-transparent rounded"
        >
          New todo !
        </button>
      </div>
    );
  }
  return (
    <div className="mr-auto ml-auto mt-10 w-1/2  flex justify-center border rounded">
      <form
        className="px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => onAdd(e, formData)}
      >
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
            onClick={() => setIsShow(false)}
            type="button"
            className="bg-transparent hover:bg-white text-white font-semibold hover:text-stone-900 py-2 px-4 border border-white hover:border-transparent rounded mr-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-transparent hover:bg-white text-white font-semibold hover:text-stone-900 py-2 px-4 border border-white hover:border-transparent rounded"
          >
            Add new todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;

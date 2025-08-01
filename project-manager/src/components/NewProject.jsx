import Button from "./Button";
import {useState, useRef} from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAddProject, onCancelAddProject}) {
  const [projectDate,setProjectDate] = useState({});

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const handleonCancelProjectAdd = () => {
    setProjectDate({});
    onCancelAddProject();
  }

  const handleOnChange = (e) => {
    const {name, value} = e.target; 
    setProjectDate((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleOnSubmit = (e) => {
  
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDueDate.trim()==='') {
      modal.current.open();
      return;
    }

     onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      tasks:[]
    })
    setProjectDate({});
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
    </Modal>
    <div className="w-[35rem] mt-16">   
      <ul className="flex items-center justify-end gap-4 my-4">
           <li>
          <button type="button" onClick={handleonCancelProjectAdd}  className="text-stone-800 hover:text-stone-950">Cancel</button>
          </li>
          <li>
          <button type="submit" onClick={handleOnSubmit}  className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
           </li>
      </ul>
    <div>
        <Input label="Title" ref={title} type="text"/>
        <Input label="Description" ref={description} textarea/>
        <Input label="Due Date" ref={dueDate} type="date"/>
    </div>
    </div>
    </>
  );
}
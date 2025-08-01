import Button from "./Button";
import {useState} from "react";

export default function NewProject({onAddProject, onCancelAddProject}) {
  const [projectDate,setProjectDate] = useState({
    title: "",
    description: "",
    date: "",
    task:[]
  });

  const handleonCancelProjectAdd = () => {
    setProjectDate({
      title: "",
      description: "",
      date: "",
      task:[]
    });
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
    e.preventDefault();
    if (!projectDate.title || !projectDate.description || !projectDate.date) {
      alert("Please fill all fields");
      return;
    }
    onAddProject(projectDate);
    setProjectDate({
      title: "",
      description: "",
      date: "",
      task:[]
    });
  }

  return (
    <div className="w-[35rem] mt-16">
    <form onSubmit={handleOnSubmit}>
      
      <ul className="flex items-center justify-end gap-4 my-4">
           <li>
          <button type="button" onClick={handleonCancelProjectAdd}  className="text-stone-800 hover:text-stone-950">Cancel</button>
          </li>
          <li>
          <button type="submit"  className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
           </li>
      </ul>
      <div>
        <div>Title</div>
        <div><input required name='title' type="text" value={projectDate.title}  onChange={handleOnChange}></input></div>
      </div>
       <div>
         <div>Description</div>
        <div><textarea required name='description' value={projectDate.description} onChange={handleOnChange}></textarea></div>
      </div>
       <div>
        <div>Date</div>
        <div> <input required name='date' type="Date" value={projectDate.date} onChange={handleOnChange} /></div>
      </div>
      </form>

    </div>
    
  );
}
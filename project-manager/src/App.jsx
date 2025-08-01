import ProjectSidebar from "./components/ProjectSidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails"; 
import { useState } from "react";


function App() {
  const [projectState, setProjectState] = useState({selectedProjectId : undefined, projects: []});

  //projects state is needed in both ProjectSidebar and ProjectDetails so it should be lifted up to a common parent component
  
const onStartAddProject = () => {
  console.log("Start Add Project clicked>>"+projectState.selectedProjectId);
  // This function will be used to handle the start of adding a new project
        setProjectState((prevProjects) => ({
          ...prevProjects,
          selectedProjectId:null
    }));
 
  };

 const onSelectProject = (id) => {
  console.log("Selected project ID:", id);
    setProjectState((prevProjects) => ({
      ...prevProjects,
      selectedProjectId: id
    }));
  }
 
const onCancelAddProject = () => {
  console.log("Cancel Add Project clicked");
  setProjectState((prevProjects) => ({
    ...prevProjects,
    selectedProjectId: undefined
  }));
 };


 const onAddProject = (newProjectData) => {
  console.log("Add Project clicked>>"+JSON.stringify(newProjectData));
  let newProjectObj = {
    
   ...newProjectData,
   id: Math.random()

  };
  setProjectState((prevProjectState) => ({
    ...prevProjectState,
    selectedProjectId: undefined,
    projects: [...prevProjectState.projects, newProjectObj],
    }));
 }

 const onDeleteProject = () => {
  console.log("Delete selected project");
  setProjectState(prev => ({
    ...prev,
    selectedProjectId: undefined,
    projects: prev.projects.filter(project => project.id !== prev.selectedProjectId)
  }));

}


 const onAddTask = (newTaskString) => {
  console.log("Add Task clicked");
  let newTaskObj = {
   
    text: newTaskString,
    projectId: projectState.selectedProjectId,
     id: Math.random()
  };
  setProjectState((prev) => ({
    ...prev,
    projects: prev.projects.map(project => project.id === prev.selectedProjectId ? {
      ...project, tasks:[...project.tasks,newTaskObj]
    } :project)
    
    })
  );
 }


 const onDeleteTask = (id) => {
  console.log("Delete Task Id:", id);
  setProjectState(prev => ({
    ...prev,
   projects : prev.projects.map(project => 
    project.id === prev.selectedProjectId ? {...project,tasks: project.tasks.filter(task => task.id !== id)} : project
   )
  })
);
}



 const projectSelected = projectState.projects.find(
  project => project.id === projectState.selectedProjectId
);

 let mainContent = (<ProjectDetails 
  project={projectSelected}
  onAddTask ={onAddTask}  
  onDeleteTask={onDeleteTask} 
  onDeleteProject={onDeleteProject}
  />) 
 

 if (projectState.selectedProjectId === undefined) {
  mainContent = <NoProject  onStartAddProject={onStartAddProject}/>;
 }
 else if (projectState.selectedProjectId === null) {
  mainContent = <NewProject onAddProject={onAddProject} onCancelAddProject={onCancelAddProject} />;
 }

  return (
    <>
     <main className="h-screen my-8 flex gap-8">
     <ProjectSidebar projectState={projectState} onStartAddProject={onStartAddProject}
    onSelectProject={onSelectProject}/>
     {mainContent}
    </main>
    </>
  );
}

export default App;

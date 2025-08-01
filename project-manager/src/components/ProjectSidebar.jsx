import Button from "./Button";


export default function ProjectSidebar({
    projectState,
    onStartAddProject,
    onSelectProject
    
}) {

    // 1. Add Project option
    // 2. Display List of Projects
    // 3. Select project to view details
    // projects state is needed in both ProjectSidebar and ProjectDetails so it should be lifted up to a common parent component
    // 4. Add Project button should trigger a function to add a new project

    return (
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
                <div>
                    <Button onClick={onStartAddProject} disabled={projectState.selectedProjectId === null}>+ Add Project</Button>
                </div>
                <ul className="mt-8">
                    {projectState.projects.map((project) => {
                      let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                      if(project.id === projectState.selectedProjectId){
                             cssClasses += ' bg-stone-800 text-stone-200'
                      } 
                      else {
                          cssClasses += ' text-stone-400'
                      }
                        return (
                        <li key={project.id}>
                            <button onClick={()=>onSelectProject(project.id)}
                             className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
                                {project.title}
                            </button>
                        </li>
                    )
                    })} </ul>
             </aside>

    

    )
}
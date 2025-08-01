export default function Button({children, ...props}) {
     return (
        <button {...props} 
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 disabled:bg-stone-500 disabled:text-stone-300
    disabled:cursor-not-allowed">  {children}
        </button>
    );    
}
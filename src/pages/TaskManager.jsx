
function TaskManager({isDarkTheme}) {
  return (
    <div className={`${isDarkTheme ? "text-slate-300" : "text-slate-900"} text-center text-4xl my-24`} >
      Task Manager
    </div>
  )
}

export default TaskManager;
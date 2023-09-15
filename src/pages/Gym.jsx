import { useReducer } from "react";

//Defining the different type of actions
const ACTIONS = {
  SET_TARGETMUSCLE: "setTargetMuscle",
  SET_EXERCICENAME: "setExerciceName",
  SET_NUMBEROFSETS: "setNumberOfSets",
  SET_NUMBEROFREPS: "setNumberOfReps",
  ADD_NEWWORKOUTSESSION: "addNewWorkoutSession",

}
 //The initial values of the input fields
const initialState = {
  targetMuscle: "",
  exerciceName: "",
  numberOfSets: "",
  numberOfReps: "",
}
 //Implementing the reducer function
function workoutReducer(state, action) {

  switch (action.type) {
    case ACTIONS.SETTARGETMUSCLE:
      return {
        ...state,
        targetMuscle: action.payload,
      }

      case ACTIONS.SETEXERCICENAME:
      return {
        ...state,
        exerciceName: action.payload,
      }

      case ACTIONS.SETNUMBEROFSETS:
      return {
        ...state,
        numberOfSets: action.payload,
      }

      case ACTIONS.SETNUMBEROFREPS:
      return {
        ...state,
        numberOfReps: action.payload,
      }
    case ACTIONS.ADD_NEWWORKOUTSESSION:
      return
  }
}


function Gym({ isDarkTheme }) {

  const [state, dispatch] = useReducer(workoutReducer, initialState)

  return (
    <div className={`${isDarkTheme ? "bg-slate-300 text-slate-900" : "bg-slate-800 text-slate-300"} rounded-md w-[40rem] mx-auto p-8 text-center text-4xl my-24`} >
      <h1>Enter your workout details</h1>
      <form className={`${isDarkTheme ? "bg-slate-200" : "bg-slate-900"} flex flex-col bg-slate-100 gap-8 text-slate-800 text-[1.3rem] rounded-md my-4 mx-auto py-6 shadow-lg`}>
        <select value={state.targetMuscle}
          className="w-[25rem] mx-auto bg-white rounded-sm shadow-md py-0.5  px-4 outline-none"
          onChange={(e) => dispatch({type:ACTIONS.SETTARGETMUSCLE, payload: e.target.value})}
        >
          <option value="" disabled selected>Target muscle</option>
          <option>Biceps</option>
          <option>Triceps</option>
          <option>Chest</option>
          <option>Abs</option>
          <option>Back</option>
          <option>Legs</option>
          <option>Shoulder</option>
        </select>

        <input
          className="w-[25rem] mx-auto focus-visible:border-2 focus-visible:border-r-indigo-700 placeholder:text-slate-600 py-0.5 px-4 outline-none rounded-md shadow-md bg-white"
          value={state.exerciceName}
          type="text"
          placeholder="Exercice name..."
          onChange={(e) => dispatch({type:ACTIONS.SET_EXERCICENAME, payload: e.target.value})}
        />
        <select
          className="w-[25rem] mx-auto py-0.5 px-4 bg-white rounded-md shadow-md outline-none"
          value={state.numberOfSets}
          onChange={(e) => dispatch({type:ACTIONS.SET_NUMBEROFSETS, payload: e.target.value})}
        >
          <option value="" disabled selected>
            Number of sets
          </option>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((set) =>
            <option value={set} key={set}>{set}</option>)}
        </select>

        <select
          className="w-[25rem] mx-auto rounded-md shadow-md py-0.5  px-4 bg-white outline-none"
          value={state.numberOfReps}
          onChange={(e) => dispatch({type:ACTIONS.SET_NUMBEROFREPS, payload: e.target.value})}
        >
          <option value="" disabled selected>Number of reps</option>
          {Array.from({ length: 20 }, (_, i) => i + 1).map(rep =>
            <option value={rep} key={rep}>{rep}</option>
          )}

        </select>
        <button
          className="bg-indigo-500 w-[25rem] text-slate-50 text-2xl rounded-md mx-auto px-4 py-1"
        >
          Set workout session
        </button>
      </form>
    </div>
  )
}

export default Gym;

//Workout Component goes here...
import { useReducer } from "react";
import ExerciceName from "../components/ExerciceName";
import Reps from "../components/Reps";
import Sets from "../components/Sets";
import TargetMuscle from "../components/TargetMuscle";
import Workout from "../components/Workout";
import WorkoutButton from "../components/WorkoutButton";

//Defining the different type of actions case
const ACTIONS = {
  SET_TARGETMUSCLE: "setTargetMuscle",
  SET_EXERCICENAME: "setExerciceName",
  SET_NUMBEROFSETS: "setNumberOfSets",
  SET_NUMBEROFREPS: "setNumberOfReps",
  ADD_NEWWORKOUTSESSION: "addNewWorkoutSession",
  REMOVE_WORKOUTSESSION: "removeWorkoutSesssion",

}
//The initial values of the input fields
const initialState = {
  isNewWorkout: false,
  targetMuscle: "",
  exerciceName: "",
  numberOfSets: "",
  numberOfReps: "",
  totalReps: 0,
  workoutSessions: [],
}
//Implementing the reducer function
function workoutReducer(state, action) {

  switch (action.type) {
    case ACTIONS.SET_TARGETMUSCLE:
      return {
        ...state,
        targetMuscle: action.payload,
      }

    case ACTIONS.SET_EXERCICENAME:
      return {
        ...state,
        exerciceName: action.payload,
      }

    case ACTIONS.SET_NUMBEROFSETS:
      return {
        ...state,
        numberOfSets: action.payload,
      }

    case ACTIONS.SET_NUMBEROFREPS:
      return {
        ...state,
        numberOfReps: action.payload,
      }
    case ACTIONS.ADD_NEWWORKOUTSESSION:
      return {
        ...state,
        workoutSessions: [...state.workoutSessions, action.payload],
        totalReps: state.numberOfSets * state.numberOfReps,
        targetMuscle: "",
        exerciceName: "",
        numberOfReps: "",
        numberOfSets: "",
        isNewWorkout: true,
      }
    case ACTIONS.REMOVE_WORKOUTSESSION:
      return {
        ...state,
        workoutSessions: state.workoutSessions.filter((session) =>
          session.id !== action.payload.id),
      }
  }
}

function Gym({ isDarkTheme }) {

  const [state, dispatch] = useReducer(workoutReducer, initialState);

  //Function to create a newWorkout session
  function handleAddNewWorkout(e) {
    e.preventDefault();

    //Input fields validation
    if (state.exerciceName.length === 0 ||
      state.targetMuscle === "" ||
      isNaN(parseInt(state.numberOfSets, 10)) ||
      isNaN(parseInt(state.numberOfReps, 10))) {
      alert("Enter a target Muscle, a number of Sets and Reps to complete");
      return;
    }

    const newWorkoutSession = {
      id: Date.now(),
      muscle: state.targetMuscle,
      name: state.exerciceName,
      sets: parseInt(state.numberOfSets, 10),
      reps: parseInt(state.numberOfReps, 10),
    };

    dispatch({ type: ACTIONS.ADD_NEWWORKOUTSESSION, payload: newWorkoutSession })
  }
  console.log(state.workoutSessions);

  return (
    <>
      <div className={`${isDarkTheme ? "bg-slate-300 text-slate-900" : "bg-slate-800 text-slate-300"} rounded-md sm1:w-[18.5rem] sm2:w-[21.7rem] sm3:w-[24rem] md2:w-[40rem] mx-auto sm1:p-2 sm3:p-4 md2:p-8 text-center text-4xl my-24`} >
        <h1 className="sm1:text-[1.5rem] sm2:text-[2rem] md2:text-4xl">Enter your workout details</h1>
        <form className={`sm1:w-[17rem] sm2:w-[20rem] sm3:w-[21.5rem] ${isDarkTheme ? "bg-slate-200" : "bg-slate-900"} flex flex-col text-lg bg-slate-100 gap-8 text-slate-800 rounded-md mx-auto my-4 py-6 shadow-lg`}>
          <TargetMuscle state={state} dispatch={dispatch} ACTIONS={ACTIONS} />

          <ExerciceName state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
          <Sets state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
          <Reps state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
          <WorkoutButton handleAddNewWorkout={handleAddNewWorkout} />
        </form>
      </div>

      {state.workoutSessions.length > 0 && //Conditionally rendering the Workout sessions
        <ul className={`${isDarkTheme ? "bg-slate-300" : "bg-slate-800"} grid sm1:grid-cols-1 md2:grid-cols-2 rounded-sm p-4 mx-auto sm1:w-[18.5rem] sm2:w-[21.7rem] sm3:w-[24rem] md2:w-[40rem]`}>
          {state.workoutSessions?.map((session, index) =>
            <Workout state={session} key={session.id} index={index} dispatch={dispatch} ACTIONS={ACTIONS} />)}

        </ul>
      }
    </>
  )
}
export default Gym;


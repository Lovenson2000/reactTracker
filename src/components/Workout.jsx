function Workout({ state, index, dispatch, ACTIONS }) {
    return (
        <li className="relative bg-white mx-auto p-2 my-4 shadow-md rounded-md sm1:w-[16rem] sm2:w-[19rem] sm3:w-[20.5rem] md1:w-[18rem]">
            <span className="text-green-400 font-bold text-[1.5rem]">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
            <p>You are targeting your <strong>{state.muscle}</strong> with <strong>{state.name} </strong>
                You have <strong>{state.sets} </strong>sets of <strong>{state.reps}</strong> reps Total reps = {state.sets * state.reps}</p>
            <span
                className="absolute right-3 cursor-pointer bottom-0 font-bold text-indigo-500"
                onClick={() => dispatch({ type: ACTIONS.REMOVE_WORKOUTSESSION, payload: state })}
            >
                X
            </span>
        </li>
    );
}
export default Workout;
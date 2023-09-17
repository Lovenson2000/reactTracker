
export default function ExerciceName({state, dispatch, ACTIONS}) {
    return (
        <input
            className="sm1:w-[15rem] sm2:w-[18rem] sm3:w-[19rem]  mx-auto focus-visible:border-2 focus-visible:border-r-indigo-700 placeholder:text-slate-600 h-10 px-4 outline-none rounded-md shadow-md bg-white"
            value={state.exerciceName}
            type="text"
            placeholder="Exercice name..."
            onChange={(e) => dispatch({ type: ACTIONS.SET_EXERCICENAME, payload: e.target.value })}
        />
    );
}

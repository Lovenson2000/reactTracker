
export default function Reps({state, dispatch, ACTIONS}) {
    return (
        <select
            className="sm1:w-[15rem] sm2:w-[18rem] sm3:w-[19rem]  mx-auto rounded-md shadow-md h-10 px-4 bg-white outline-none"
            value={state.numberOfReps}
            onChange={(e) => dispatch({ type: ACTIONS.SET_NUMBEROFREPS, payload: e.target.value })}
        >
            <option value="" disabled defaultValue>Number of reps</option>
            {Array.from({ length: 50 }, (_, i) => i + 1).map(rep =>
                <option value={rep} key={rep}>{rep}</option>
            )}

        </select>
    );
}

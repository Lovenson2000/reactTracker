

export default function Sets({state, dispatch, ACTIONS}) {
    return (
        <select
            className="sm1:w-[15rem] sm2:w-[18rem] sm3:w-[19rem] mx-auto h-10 px-4 bg-white rounded-md shadow-md outline-none"
            value={state.numberOfSets}
            onChange={(e) => dispatch({ type: ACTIONS.SET_NUMBEROFSETS, payload: e.target.value })}
        >
            <option value="" defaultValue="">
                Number of sets
            </option>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((set) =>
                <option value={set} key={set}>{set}</option>)}
        </select>
    );
}

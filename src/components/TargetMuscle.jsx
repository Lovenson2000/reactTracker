import React from 'react'

export default function TargetMuscle({ state, dispatch, ACTIONS }) {
    return (
        <select value={state.targetMuscle}
            className="sm1:w-[15rem] sm2:w-[18rem] sm3:w-[19rem] mx-auto bg-white rounded-sm shadow-md h-10 px-4 outline-none"
            onChange={(e) => dispatch({ type: ACTIONS.SET_TARGETMUSCLE, payload: e.target.value })}
        >
            <option value="" defaultValue>Target muscle</option>
            <option>Biceps</option>
            <option>Triceps</option>
            <option>Chest</option>
            <option>Abs</option>
            <option>Back</option>
            <option>Legs</option>
            <option>Shoulder</option>
        </select>


    );
}

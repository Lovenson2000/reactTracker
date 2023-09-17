
export default function WorkoutButton({handleAddNewWorkout}) {
    return (
        <button
            className="sm1:w-[15rem] sm2:w-[18rem] sm3:w-[19rem] bg-indigo-500 text-slate-50 text-[1.2rem] rounded-md mx-auto px-4 py-1"
            onClick={handleAddNewWorkout}
        >
            Set workout session
        </button>
    );
}

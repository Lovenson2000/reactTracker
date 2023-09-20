// History Component to display transactions
export function History({ transaction, dispatch, ACTIONS }) {

  return (
    <li className={`my-1 p-1 shadow-sm border-r-4 ${transaction.type === "income" ? "border-green-400" : "border-red-400"} relative`}>
      <div className="flex justify-between py-2 px-4">
        <span className="font-light sm3:text-xl">{transaction.name}</span>
        <span className="font-light sm3:text-xl">${transaction.amount}</span>
      </div>
      <span
        className="absolute cursor-pointer text-xl right-0.5 bottom-0"
        onClick={() => dispatch({ type: ACTIONS.REMOVE_TRANSACTION, payload: transaction })}
      >
        &times;
      </span>
    </li>
  );
}

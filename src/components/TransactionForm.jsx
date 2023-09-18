// eslint-disable-next-line react/prop-types
export default function TransactionForm({ isDarkTheme, state, dispatch, handleAddTransaction, ACTIONS }) {
    return (
      <>
        <form className={`text-slate-800 ${isDarkTheme ? " bg-slate-100 " : "bg-slate-900"} flex shadow-md flex-col p-2 rounded-md sm1:w-11/12 sm2:w-5/6 mx-auto`}>
          <input
            className="border m-4 outline-none rounded-md px-4 h-10 focus-visible:border-b-slate-900 placeholder:text-slate-900"
            type="text"
            // eslint-disable-next-line react/prop-types
            value={state.transName}
            placeholder="Transaction name..."
            onChange={(e) => dispatch({ type: ACTIONS.SET_TRANSNAME, payload: e.target.value })}
          />
  
          <input
            className="border m-4 outline-none rounded-md px-4 h-10 focus-visible:border-b-slate-900 placeholder:text-slate-900"
            type="number"
            // eslint-disable-next-line react/prop-types
            value={state.amount}
            onChange={(e) => dispatch({ type: ACTIONS.SET_AMOUNT, payload: e.target.value })}
          />
          <select
            className="border m-4 outline-none rounded-md px-4 py-2 h-10 bg-white text-slate-900"
            // eslint-disable-next-line react/prop-types
            value={state.transType}
            onChange={(e) => dispatch({ type: ACTIONS.SET_TRANSTYPE, payload: e.target.value })}>
            <option value="expense">expense</option>
            <option value="income">income</option>
          </select>
          <button
            className={`rounded-md px-1 py-2 mt-4 mb-3 w-11/12 mx-auto ${isDarkTheme ? "bg-slate-800 text-slate-100 " : "text-slate-800 bg-slate-100 "}`}
            onClick={handleAddTransaction}
          >
            Confirm Transaction
          </button>
        </form>
      </>
    );
  }
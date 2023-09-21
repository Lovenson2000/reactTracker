
import { useState, useReducer } from "react";
import { History } from "../components/History";
import TransactionForm from "../components/TransactionForm";


const ACTIONS = {
  TOGGLE_ADDTRANSACTION: "toggleAddTransaction",
  SET_TRANSNAME: "setTransName",
  SET_TRANSTYPE: "setTransType",
  SET_AMOUNT: "setAmount",
  ADD_NEWTRANSACTION: "addNewTransaction",
  REMOVE_TRANSACTION: "removeTransaction",
}

//The initial values for the variables

const savedState = JSON.parse(localStorage.getItem('expenseTrackerState'));

const initialState = savedState || {
  addTransaction: false,
  showTransaction: true,
  transName: "",
  transType: "expense",
  amount: 0,
  balance: 0,
  income: 0,
  expense: 0,
  transactions: [],
};
if (savedState && savedState.transactions && savedState.transactions.length > 0) {
  initialState.transactions = savedState.transactions;
}


//Implementing the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_ADDTRANSACTION:
      return {
        ...state,
        addTransaction: !state.addTransaction
      };

    case ACTIONS.SET_TRANSNAME:
      return {
        ...state,
        transName: action.payload
      };

    case ACTIONS.SET_TRANSTYPE:
      return {
        ...state,
        transType: action.payload
      };

    case ACTIONS.SET_AMOUNT:
      return {
        ...state,
        amount: action.payload
      };

    case ACTIONS.ADD_NEWTRANSACTION: //case for adding transaction

      localStorage.setItem('expenseTrackerState', JSON.stringify({
        ...state,
        transactions: [...state.transactions, action.payload],
      }));

      if (action.payload.type === "income") {
        return {
          ...state,
          income: state.income + action.payload.amount,
          balance: state.balance + action.payload.amount,
          transactions: [...state.transactions, action.payload],
          transType: "expense",
          amount: 0,
          transName: "",
        }
      }
      else if (action.payload.type === "expense") {
        return {
          ...state,
          expense: state.expense + action.payload.amount,
          balance: state.balance - action.payload.amount,
          transactions: [...state.transactions, action.payload],
          transType: "expense",
          amount: 0,
          transName: "",
        }
      }
      break;

      case ACTIONS.REMOVE_TRANSACTION: 
      
        localStorage.setItem('expenseTrackerState', JSON.stringify({
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload.id),
        }));
      
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload.id),
          income: state.income - (action.payload.type === 'income' ? action.payload.amount : 0),
          expense: state.expense - (action.payload.type === 'expense' ? action.payload.amount : 0),
          balance: state.balance + (action.payload.type === 'income' ? -action.payload.amount : action.payload.amount),
        };

    default:
      localStorage.setItem('expenseTrackerState', JSON.stringify(state));
      return state;
  }
}
// eslint-disable-next-line react/prop-types
function Expense({ isDarkTheme }) {
  const [isNewTransaction, setisNewTransaction] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAddTransaction(e) {
    e.preventDefault();

    //Handling form validation  
    if (state.transName.length === 0 || !(state.amount > 0)) {
      alert("Enter a transaction & amount greater than 0!")
      return;

    }

    // Creating new transaction object
    const newTransaction = {
      id: Date.now(),
      type: state.transType,
      name: state.transName,
      amount: parseFloat(state.amount),
    };

    setisNewTransaction(true);
    dispatch({ type: ACTIONS.ADD_NEWTRANSACTION, payload: newTransaction });

  }

  return (
    <div className={`${isDarkTheme ? " bg-slate-300 " : "text-slate-100 bg-slate-800"} text-center sm1:w-[17.5rem] sm2:w-[21.3rem] sm3:w-[23.5rem] md1:w-[27rem] md2:w-[35rem] md1:p-4 sm1:my-16 sm1:p-2 p-4 rounded-md mx-auto my-24`}>
      <h1 className=" sm1:text-2xl sm3:text-4xl">Expense Tracker</h1>
      <h2 className="sm1:text-xl font-light sm3:text-2xl py-2">Your Balance</h2>
      <h3 className="sm1:text-md sm3:text-lg">{state.balance < 0 ? `-$${Math.abs(state.balance)}.00` : `$${state.balance}.00`}</h3>

      <div className={`flex my-4 py-2 ${isDarkTheme ? "bg-slate-200" : "bg-slate-900"} shadow-md mx-auto rounded-md sm1:w-11/12 sm2:w-5/6 justify-center sm1:gap-8 sm2:gap-16`}>
        <div>
          <h3 className="sm1:text-[1.2rem] sm3:text-2xl m-1 font-light border-b-2 border-green-500">Income</h3>
          <span className="font-extralight">${state.income}.00</span>
        </div>

        <div>
          <h3 className="sm1:text-[1.2rem] sm3:text-2xl m-1 font-light border-b-2 border-red-500">Expense</h3>
          <span className="font-extralight">${state.expense}.00</span>
        </div>
      </div>
      {
        state.transactions.length > 0 &&
        <div className={`${isDarkTheme ? "bg-slate-100" : "bg-slate-900"} shadow-md mx-auto rounded-md sm1:w-11/12 sm2:w-5/6`}>
          <h2 className="text-xl pt-2">Transaction History</h2>
          <ul>
            {state.transactions.map((transaction) =>
              state.showTransaction &&
              <History
                transaction={transaction}
                key={transaction.id}
                dispatch={dispatch}
                ACTIONS={ACTIONS}
              />
            )}
          </ul>
        </div>
      }

      <button className="bg-indigo-600 my-5 py-1.5 px-5 text-lg text-slate-200 rounded-md"
        onClick={() => dispatch({ type: ACTIONS.TOGGLE_ADDTRANSACTION })}
      >
        {state.addTransaction ? "Close Transaction" : "Add Transaction"}
      </button>

      {state.addTransaction && <TransactionForm state={state} isDarkTheme={isDarkTheme} dispatch={dispatch} handleAddTransaction={handleAddTransaction} ACTIONS={ACTIONS} />}

    </div>
  )
}
export default Expense;



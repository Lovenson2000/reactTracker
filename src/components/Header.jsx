import { NavLink } from 'react-router-dom';
import moon from "./moon.png";

// eslint-disable-next-line react/prop-types
function Header({changeTheme}) {
  return (
    <div className='mx-auto rounded-md shadow py-8 h-[4rem] bg-indigo-700 w-[50rem] flex items-center justify-around'>
      <ul className="flex text-slate-50 text-2xl">
        <NavLink className="px-8" to="/expense">Expense</NavLink>
        <NavLink className="pr-8" to="/dailyquote">DailyQuote</NavLink>
        <NavLink className="pr-8" to="/gym">Gym</NavLink>
        <NavLink className="pr-8" to="/taskmanager">Task manager</NavLink>
      </ul>
      <img className='rotate-180 w-[2.3rem] cursor-pointer'
      src={moon}
      alt="theme"
      onClick={changeTheme}
      />
    </div>
  );
}

export default Header;

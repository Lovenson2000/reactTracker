import { NavLink } from 'react-router-dom';
import moon from "./moon.png";

// eslint-disable-next-line react/prop-types
function Header({changeTheme}) {
  return (
    <div className='mx-auto rounded-md shadow py-8 h-[4rem] bg-indigo-700 sm1:w-[19rem] sm1:text-[.9rem] sm2:w-[22rem] sm2:text-[1rem]  sm3:w-[23rem] md1:w-[30rem] md1:text-[] md2:w-[40rem]  flex items-center justify-around'>
      <ul className="flex text-slate-50 sm3:text-[1rem] md2:text-2xl md2:gap-6">
        <NavLink className="px-4 sm1:px-2 sm3:pr-4" to="/expense">Expense</NavLink>
        <NavLink className="pr-8 sm1:px-2 sm3:pr-4" to="/dailyquote">DailyQuote</NavLink>
        <NavLink className="pr-8 sm1:px-2 sm3:pr-4" to="/gym">Gym</NavLink>
      </ul>
      <img className='rotate-180 w-[2.3rem] sm1:w-[1.5rem] sm2:w-[1.8rem] sm3:w-[2rem] cursor-pointer'
      src={moon}
      alt="theme"
      onClick={changeTheme}
      />
    </div>
  );
}

export default Header;

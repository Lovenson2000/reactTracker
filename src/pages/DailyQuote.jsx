
import { useState } from 'react';

export default function DailyQuote({isDarkTheme}) {
  
  let customQuote = "A man should not have more than one priority not have more than one priority at once.";
  let customAuthor = "Blatter";

  const [quote, setQuote] = useState(customQuote);
  const [author, setAuthor] = useState(customAuthor);

  const API_URL = "https://type.fit/api/quotes"; 

      const handleNextQuote = async () => {
      const response = await fetch(API_URL); //Fetching the API
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
  
      setQuote(data[randomIndex].text); //Updating quote

      if(data[randomIndex].author.includes(", type.fit")) {
        let index = data[randomIndex].author.indexOf(", type");
        setAuthor(data[randomIndex].author.slice(0, index)); //Updating the author
      }
    }

  return (
    <div className={`flex flex-col justify-center items-center ${isDarkTheme ? "bg-slate-300" : "bg-slate-800 text-slate-100"} rounded-md p-8 sm1:p-2 mx-auto sm1:w-11/12 sm2:w-11/12 md1:w-[34rem] sm1:min-h-[20rem] text-4xl my-24`}>
      <p className='text-2xl sm1:text-center sm1:p-2 pt-4 text-justify font-normal'>
       
        " {quote} "
      </p>
      <h2 className='text-2xl mt-3 font-light'>
        -{author}
      </h2>
      <button
        className={` font-medium ${isDarkTheme ? "bg-slate-900" : "bg-gradient-to-tr from-indigo-600 to to-blue-600"} text-white mt-8 text-lg py-1.5 px-8 outline-none rounded-sm`}
        onClick={handleNextQuote}
        >
          Next Quote
        </button> 
    </div>
  )
}


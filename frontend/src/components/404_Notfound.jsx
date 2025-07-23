import React from 'react'

 const NotFound = () => {
  return (
     <div className="flex max-w-7xl mt-[19vh] align-middle mx-auto px-4 pb-[100px] justify-center justify-items-center flex-col">
 
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-1 font-semibold text-[hx(#424242)]">
         404_Not Found -    
        </h1>
        <p className="text-lg my-5 blunt ">
          Not a Valid Rout
        </p>
        <button className="w-52 font-semibold text-white text-xl bg-[rgb(56,126,209)] py-2 my-7 rounded-sm hover:bg-black">
        Home
        </button>
      </div>
    </div>
  )
}
export default NotFound
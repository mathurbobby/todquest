import React from 'react'

const SignIn = () => {

  return (
    <>
        <div className="w-[55%] bg-white rounded shadow-2xl">
              <div className="flex items-center justify-between border-b-[1px] shadow-lg rounded-tl rounded-tr py-5 px-3">
                <h1 className="text-xs font-bold cursor-pointer tracking-wider text-[#FFBA33] ">
                  ALREADY MEMBERS
                </h1>
                <p className="text-xs font-bold cursor-pointer text-gray-300">
                  Need help?
                </p>
              </div>
              <form className="py-5 px-3" >
                <input
                  className="text-sm text-[#1A535C] font-semibold placeholder:font-normal capitalize focus:bg-white focus:outline-none focus:border-[1px] bg-gray-100 w-[100%] py-2 px-3 rounded"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="text-sm text-[#1A535C] focus:bg-white focus:outline-none focus:border-[1px] w-[100%] py-2 px-3 rounded mt-2 bg-gray-100"
                  type="password"
                  placeholder="Enter your password"
                   
                />
                <button
                  className="text-white text-xs font-medium bg-[#1A535C] text-center w-[100%] p-3 rounded mt-7"
                  type="submit"
                >
                  SIGN IN
                </button>
              </form>
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
              <div className="text-white text-base cursor-pointer font-semibold">
                Don't have an account yet?
              </div>
              <div className="text-[#1A535C] cursor-pointer text-base font-semibold">
                Create an account
              </div>
            </div>
    </>
  )
}

export default SignIn
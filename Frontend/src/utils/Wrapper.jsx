import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className="bg-white w-full rounded-2xl pt-12 shadow-lg  dark:bg-background-dark dark:shadow-[0_2px_10px_rgba(0,0,0,0.6)] px-8 pb-10 ">
      {children}
    </div>
  )
}

export default Wrapper

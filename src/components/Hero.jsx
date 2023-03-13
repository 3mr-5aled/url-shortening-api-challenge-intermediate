import React from "react"

export default () => {
  return (
    <section className="flex flex-row flex-wrap h-screen p-5 max-sm:flex-col-reverse max-sm:gap-10 max-sm:justify-center max-sm:h-fit max-sm:mb-24">
      <div className="text-start leading-tight w-1/2 p-5 max-sm:w-full max-sm:text-center max-sm:p-0 max-sm:py-5">
        <h2 className="font-bold text-[4.7rem] m-5 opacity-80 max-sm:text-[2.5rem] max-sm:m-0">
          More than just shorter links
        </h2>
        <p className="m-5 text-black text-opacity-60">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-Cyan hover:bg-cyan-300 text-white font-bold text-xl rounded-full py-5 px-10 m-5">
          Get Started
        </button>
      </div>
      <div className="w-1/2 max-sm:w-full">
        <img src="/images/illustration-working.svg" alt="" />
      </div>
    </section>
  )
}

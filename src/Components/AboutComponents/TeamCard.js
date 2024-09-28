import React from 'react'

function TeamCard({Team__thumb,Team__position,Team__title}) {
  return (
    <div className="relative w-full mx-auto rounded-md overflow-hidden ">
      <img
        src={Team__thumb}
        alt="AirMax Pro"
        className="z-0 rounded-md object-contain w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
      <div className="absolute bottom-10 left-6 text-left">
        <p className="mt-2 text-lg text-gray-300">
          {Team__position}
        </p>
        <h1 className="text-2xl font-semibold text-white">{Team__title}</h1>
      </div>
    </div>
  )
}

export default TeamCard

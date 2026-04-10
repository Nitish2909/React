import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="h-full overflow-hidden relative w-60 rounded-4xl shrink-0">
        <img
          className="h-full w-full object-cover object-fit"
          src={props.img}
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
          <h2 className="bg-white text-3xl font-semibold h-12 w-12 rounded-full flex items-center justify-center">
            {props.id}
          </h2>
          <div className="">
            <p className="text-medium font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              laborum rem ex, nisi quos eos!
            </p>
            <button className="bg-blue-500 mt-4 px-10 font-semibold text-white py-2 rounded-full">{props.tag}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card

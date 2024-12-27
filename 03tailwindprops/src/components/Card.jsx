import React from 'react'

function Card(props) {
    console.log(props.course);
    
    
  return (
    <>
    <div class="cards">
    <div className="bg-red-500 text-white p-4 rounded-2xl" >
        <p class="tip">Hover Me</p>
        <p class="second-text">{props.course}</p>
    </div>
    <div className="bg-blue-400 text-black p-4 rounded-2xl">
        <p class="tip">Hover Me</p>
        <p class="second-text">{props.username}</p>
    </div>
    <div className="bg-yellow-300 text-black p-4 rounded-2xl">
        <p class="tip">Hover Me</p>
        <p class="second-text">Lorem Ipsum</p>
    </div>
</div>
    </>
  )
}

export default Card

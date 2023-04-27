import React from 'react'

function Custombutton(props) {
  return (
    <div>
      
      <button className={props.className} onClick={props.onClick}>{props.icon}&nbsp; &nbsp;{props.text}</button>
    </div>
  )
}

export default Custombutton

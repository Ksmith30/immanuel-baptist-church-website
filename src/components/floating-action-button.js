import React from "react"
import "./floating-action-button.css"

function FloatingActionButton(props) {
  let className = ""
  if (props.isClicked) {
    className = "active"
  }

  return (
    <button id="floating-action-button" className={className} onClick={props.onClick}>
      <div className="topBar" />
      <div className="middleBar" />
      <div className="bottomBar" />
    </button>
  )
}

export default FloatingActionButton

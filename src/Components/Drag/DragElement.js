import React, { useState } from 'react'

let zIndexValue=1;

export default function DragElement(props) {

  const [diffX, SetDiffX] = useState(0);
  const [diffY, SetDiffY] = useState(0);
  const [dragging, SetDragging] = useState(false);
  const [styles, SetStyles] = useState({});
  const [zindex, SetZindex] = useState(0);

  const dragStart = (e)=>{
    SetDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    SetDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    SetDragging(true);
    SetZindex(zIndexValue);

    zIndexValue++;
  }

  const draggingd = (e) =>{
    if(dragging){
      var left = e.screenX - diffX;
      var top = e.screenY - diffY;

      SetStyles({
        left: left,
        top: top,
        zIndex: zindex
      })
    }
  }

  const dragEnd =()=>{
    SetDragging(false)
  }

  return (
    <div
      className={"DragItem"}
      onMouseDown={dragStart}
      onMouseMove={draggingd}
      onMouseUp={dragEnd}
      onPointerLeave={dragEnd}
      style={styles}
      id={props.id}
      >
        {props.children}
    </div>
  )
}

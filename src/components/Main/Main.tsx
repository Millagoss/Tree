import { useState } from "react";

import {
  AngleUp,
  AngleDown,
  AngleLeft,
  AngleRight,
} from "../../utils/icons/Icon";

import "./main.css";

const Main = () => {
  const [position, setPosition] = useState({ x: 700, y: 150 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: any) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: any) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <main>
      <div className="container" id="main">
        <div
          className="box"
          style={{
            left: position.x,
            top: position.y,
            cursor: dragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          Drag me!
        </div>
      </div>
      <div className="up-arrow arrow">
        <AngleUp />
      </div>
      <div className="right-arrow arrow">
        <AngleRight />
      </div>
      <div className="down-arrow arrow">
        <AngleDown />
      </div>
      <div className="left-arrow arrow">
        <AngleLeft />
      </div>
    </main>
  );
};

export default Main;

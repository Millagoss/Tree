import { useState } from "react";

import {
  AngleUp,
  AngleDown,
  AngleLeft,
  AngleRight,
} from "../../utils/icons/Icon";

import "./main.css";
import Category from "../Category/Category";

const Main = () => {
  const [position, setPosition] = useState({ x: 700, y: 150 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: any) => {
    const box = document.getElementById("box");
    if (box) {
      box.style.transition = `none`;
    }
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

  const centerScreen = () => {
    const mainSection = document.getElementById("main");
    const box = document.getElementById("box");
    if (mainSection) {
      const width = mainSection.offsetWidth / 2;
      const height = mainSection.offsetHeight;

      if (box) {
        box.style.transition = `0.3s linear all`;
        box.style.top = `${height}px`;
        box.style.left = `${width}px`;
        setOffset({ x: 0, y: 0 });
        setPosition({ x: width, y: height });
        setDragging(false);
      }
    }
  };

  return (
    <main>
      <button onClick={centerScreen}>center</button>
      <div className="container" id="main">
        <div
          id="box"
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
          <Category />
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

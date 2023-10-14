import { useState, useContext } from "react";

import {
  AngleUp,
  AngleDown,
  AngleLeft,
  AngleRight,
} from "../../utils/icons/Icon";

import "./main.css";
import CategoryComponent from "../Category/Category";
import { MyContext } from "../..";

const Main = () => {
  const { position, setPosition, dragging, setDragging, offset, setOffset } =
    useContext(MyContext);

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
      const width = mainSection.offsetWidth / 2 - 100;
      const height = mainSection.offsetHeight;

      if (box) {
        box.style.transition = `0.2s linear all`;
        setOffset({ x: 0, y: 0 });
        setPosition({ x: width, y: height });
        setDragging(false);
      }
    }
  };

  return (
    <main>
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
          <CategoryComponent />
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

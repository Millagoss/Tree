import { useContext } from "react";

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
      <div
        className="up-arrow arrow"
        onClick={() =>
          setPosition((prev: any) => ({ x: prev.x, y: prev.y - 20 }))
        }
      >
        <AngleUp />
      </div>
      <div
        className="right-arrow arrow"
        onClick={() =>
          setPosition((prev: any) => ({ x: prev.x + 20, y: prev.y }))
        }
      >
        <AngleRight />
      </div>
      <div
        className="down-arrow arrow"
        onClick={() =>
          setPosition((prev: any) => ({ x: prev.x, y: prev.y + 20 }))
        }
      >
        <AngleDown />
      </div>
      <div
        className="left-arrow arrow"
        onClick={() =>
          setPosition((prev: any) => ({ x: prev.x - 20, y: prev.y }))
        }
      >
        <AngleLeft />
      </div>
    </main>
  );
};

export default Main;

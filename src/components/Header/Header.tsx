import React, { useState } from "react";
import { MinusIcon, PlusIcon, CursorIcon } from "../../utils/icons/Icon";

import "./header.css";

const Header: React.FC = () => {
  const [zoom, setZoom] = useState<number>(100);

  const increaseZoom = () => {
    setZoom((prevZoom: number) => prevZoom + 25);
    const mainSection: any = document.getElementById("main");
    if (mainSection) {
      mainSection.style.transform = `scale(${(zoom + 25) / 100})`;
      mainSection.style.transformOrigin = "center";
    }
  };

  const decreaseZoom = () => {
    if (zoom > 25) {
      setZoom((prevZoom: number) => prevZoom - 25);
      const mainSection: any = document.getElementById("main");
      if (mainSection) {
        mainSection.style.transform = `scale(${(zoom - 25) / 100})`;
        mainSection.style.transformOrigin = "center";
      }
    }
  };

  return (
    <header>
      <div className="services">
        <h2>Services</h2>
        <p>0</p>
      </div>
      <div>
        <button>List View</button>
        <div className="icon-container">
          <CursorIcon className="icon" onClick={() => {}} />
        </div>
        <div className="zoom">
          <div className="icon-container" onClick={decreaseZoom}>
            <MinusIcon className="icon" />
          </div>
          <span className="zoom-value">{zoom}%</span>
          <div className="icon-container" onClick={increaseZoom}>
            <PlusIcon className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

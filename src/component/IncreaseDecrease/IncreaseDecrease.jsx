import React from "react";
import "../IncreaseDecrease/IncreaseDecrease.scss";
// react icons
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { RiStarFill } from "react-icons/ri";

const IncreaseDecrease = ({ item }) => {
  let elements = item.slice(20, 25);
  return (
    <div className="increase-decrease ml-10 mt-9">
      <div className="container w-96">
        <div className="top flex items-center justify-between ">
          <div className="name flex w-32">
            <span className="text text-xs">Name</span>
            <span className="icons">
              <MdOutlineArrowDropUp className="icon-up" />
              <MdOutlineArrowDropDown className="icon-down" />
            </span>
          </div>
          <div className="price flex">
            <span className="text text-xs">Price</span>
            <span className="icons">
              <MdOutlineArrowDropUp className="icon-up" />
              <MdOutlineArrowDropDown className="icon-down" />
            </span>
          </div>
          <div className="change flex">
            <span className="text text-xs">Change 24h</span>
            <span className="icons">
              <MdOutlineArrowDropUp className="icon-up" />
              <MdOutlineArrowDropDown className="icon-down" />
            </span>
          </div>
        </div>
        <div className="bottom">
          {elements.map((item, index) => (
            <div key={index} className="item flex mb-6">
              <div className="left flex">
                <RiStarFill className="icon-star" />
                <img src="src/assets/img/sol.svg" alt="sol" />
                <div className="text">
                  <h3>{item.name}</h3>
                  <span>{item?.changePercent24Hr.slice(0, 3)}</span>
                </div>
              </div>
              <div className="right flex">
                <span className="percent">-{item.vwap24Hr.slice(0, 2)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncreaseDecrease;

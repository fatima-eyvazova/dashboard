import React from "react";
import "../Leaderboard/Leaderboard.scss";
const Leaderboard = ({ item }) => {
  let elements = item.slice(0, 15);
  return (
    <div className="widget">
      <div className="container">
        <div className="heading flex gap-2">
          <img src="src/assets/img/cup.svg" alt="cup" />
          <h2 className="title font-serif font-semibold text-x">Leaderboard</h2>
        </div>
        <div className="elements">
          {elements.map((item, index) => (
            <div
              key={index}
              className="info w-96 flex justify-center items-center"
            >
              <div className="container flex w-80 justify-between items-center">
                <div className="number flex  justify-center items-center">
                  <span className="num text-black w-5  h-5 rounded-full">
                    <span className="flex items-center justify-center">
                      {item.rank}
                    </span>
                  </span>
                  <h4 className="text">{item.name}</h4>
                </div>
                <div className="wallet flex items-center g-10">
                  <span className="incrase">Wallet increase:</span>
                  <span className="interest">
                    {item?.vwap24Hr?.slice(0, 3)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

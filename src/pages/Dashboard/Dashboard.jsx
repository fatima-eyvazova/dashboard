import React, { useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import CryptoWallet from "../../component/CryptoWallet/CryptoWallet";
import Leaderboard from "../../component/Leaderboard/Leaderboard";
import Notification from "../../component/Notification/Notification";
import IncreaseDecrease from "../../component/IncreaseDecrease/IncreaseDecrease";
const Dashboard = () => {
  const [records, setRecords] = useState([]);

  const url = "https://api.coincap.io/v2/assets";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setRecords(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-between w-11/12">
        <CryptoWallet item={records} />
        <Leaderboard item={records} />
        <Notification />
      </div>
      <IncreaseDecrease item={records} />
    </div>
  );
};

export default Dashboard;

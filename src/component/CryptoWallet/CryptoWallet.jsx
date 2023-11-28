import React from "react";
// react icons
import { CiWallet } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";
import { LuBitcoin } from "react-icons/lu";

import "../CryptoWallet/CryptoWallet.scss";
const CryptoWallet = ({ item }) => {
  let products = item.slice(0, 17);
  return (
    <>
      <div className="crypto-wallet">
        <div className="container flex 	justify-center	flex-col">
          <div className="header flex items-center widget_header pb-0 ml-8">
            <CiWallet className="symbol" />
            <h2 className="text">Wallet Cryptocurrency</h2>
          </div>
          <div className="info">
            <div className="background-image flex flex-row h-28 items-center w-96 left-11	h-32">
              <img
                className="cover w-96"
                src="/src/assets/img/mountains.480723aab737044962d47a4b8ea75afb.svg"
                alt="wallet"
              />
              <div className="info flex absolute left-11 w-72 justify-between">
                <div className="total">
                  <span className="assets text-xs">Total Assets</span>
                  <div className="money flex gap-2">
                    <span className="number text-xl text-white">4960.01</span>
                    <div>
                      <select id="currency" name="currency">
                        <option value="USD">USD</option>
                        <option value="EURO">EURO</option>
                        <option value="GBP">GBP</option>
                        <option value="AUD">AUD</option>
                      </select>
                      <RiArrowDropDownFill className="icon" />
                    </div>
                  </div>
                  <div className="currency">
                    <span className="number text-lg text-white">0.234156</span>
                    <span className="text text-gray text-xs"> BTC</span>
                  </div>
                </div>
                <img
                  className="img w-28	 h-28"
                  src="/src/assets/img/img-wallt.webp"
                  alt="wallet"
                />
              </div>
            </div>
            <div className="track-card w-96 ml-10 mt-9">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="crypto-item flex items-center justify-center p-2.5"
                >
                  <div className="icon pr-2.5">
                    <LuBitcoin className="crypto-icon" />
                  </div>
                  <div className="crypto-info">
                    <div className="bitcoin flex items-center justify-between">
                      <h3 className="text">{item?.name}</h3>
                      <span className="number">
                        {item?.marketCapUsd.slice(0, 3)}
                      </span>
                    </div>
                    <div className="btc-num flex items-center justify-between text-light w-80">
                      <span className="btc">{item?.symbol}</span>
                      <span className="money">
                        {item.priceUsd.slice(0, 5)} USD
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoWallet;

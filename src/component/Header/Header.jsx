import React, { useState } from "react";
import "../Header/Header.scss";
// reaci icons
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch, CiWallet, CiCircleInfo } from "react-icons/ci";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import { AiFillInteraction } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { BsCollection } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";

// mui
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className="header w-full flex items-center justify-center">
      <div className="container flex items-center justify-between py-5 w-11/12">
        <h1 className="heading text-2xl">Dashboard</h1>
        <div className="slider-search flex gap-10">
          <div className="slider flex items-center justify-center">
            <span className="font mr-3 text-xs">Font Scale</span>
            <Box sx={{ width: 80 }}>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                sx={{
                  color: (theme) => theme.palette.grey[500],
                  "& .MuiSlider-thumb": {
                    backgroundColor: (theme) => theme.palette.grey[500],
                  },
                }}
              />
            </Box>
          </div>
          <div className="search flex">
            <CiSearch className="icon-search" />
            <form className="items-center flex g-3 h-8">
              <input type="text" placeholder="Search" />
            </form>
          </div>
          <div className="relative z-50">
            <div
              className="fixed top-0 right-0 p-4 cursor-pointer pt-6 pr-8"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu className="text-2xl" />
            </div>
            {isOpen && (
              <aside className="fixed top-0 left-0 h-full w-64 bg-white text-black shadow-2xl	 p-4">
                <div>
                  <div className="flex items-center">
                    <img src="src/assets/img/logo.svg" alt="logo" />
                    <span className="text-2xl pl-7">InCrypto</span>
                  </div>
                  <div className="pt-10">
                    <div className="flex items-center gap-8 p-2">
                      <MdDashboard />
                      <span>Dashboard</span>
                    </div>
                    <div className="flex items-center gap-8 p-2">
                      <LuArrowDownUp />
                      <span>Trade</span>
                    </div>
                    <div className="flex items-center gap-8 p-2">
                      <AiFillInteraction />
                      <span>Actions</span>
                    </div>
                    <div className="flex items-center gap-8 p-2">
                      <CiWallet />
                      <span>Wallet</span>
                    </div>
                    <div className="flex items-center gap-8 p-2">
                      <GrGallery />
                      <span>NFT</span>
                    </div>
                    <div className="flex items-center gap-8 p-2">
                      <BsCollection />
                      <span>Collections</span>
                    </div>
                    <div className="flex items-center gap-8 p-2">
                      <MdOutlineSupportAgent />
                      <span>Support</span>
                    </div>
                    <div className="flex items-center gap-8 p-2">
                      <IoNotificationsOutline />

                      <span>Notifications</span>
                    </div>
                    <div className="flex items-center gap-8 p-2">
                      <CiCircleInfo />
                      <span>InCrypto Info</span>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

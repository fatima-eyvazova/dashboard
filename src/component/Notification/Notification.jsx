import React from "react";
import "./Notification.scss";
const Notification = () => {
  let item = [1, 2, 3, 4, 5];
  let text =
    "You have successful deposit 243.44870000 WLKN from your account. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Justo donec enim diam vulputate ut pharetra. Ut placerat orci nulla pellentesque dignissim";
  return (
    <div className="notifications">
      <div className="container">
        <h2 className="heading text-base">Notifications</h2>
        <div className="info">
          <div className="item">
            {item.map((item, index) => (
              <div key={index}>
                <span className="day text-xs">Today</span>
                <div className="message w-96">
                  <h4 className="withdraw flex items-center g-8 text-xs">
                    Withdraw Successful
                  </h4>
                  <p className="text-xs">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

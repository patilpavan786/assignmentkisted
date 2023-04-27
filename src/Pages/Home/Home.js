import React from "react";
import style from "./Home.module.css";
import Custominput from "../../Atom/Custominput/Custominput";
import {
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineLike,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { TbCalendarTime } from "react-icons/tb";
import { FiPieChart, FiUsers } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { data, options } from "../../Atom/Chart/Chart1";
import { data2 } from "../../Atom/Chart/Chart2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

function Home() {

  let arr = [
    { icon: <FiPieChart />, title: "Dashboard" },
    { icon: <BsTags />, title: "Transactions" },
    { icon: <TbCalendarTime />, title: "Schedules" },
    { icon: <HiUserCircle />, title: "Users" },
    { icon: <AiOutlineSetting />, title: "Settings" },
  ];

  let arr2 = [
    {
      icon: (
        <svg
          width="25"
          height="22"
          viewBox="0 0 27 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2 12C12.488 12 11.792 12.2111 11.1999 12.6067C10.6079 13.0023 10.1465 13.5645 9.87403 14.2223C9.60156 14.8802 9.53026 15.604 9.66917 16.3023C9.80808 17.0007 10.1509 17.6421 10.6544 18.1456C11.1579 18.6491 11.7993 18.9919 12.4977 19.1308C13.196 19.2697 13.9198 19.1984 14.5777 18.926C15.2355 18.6535 15.7977 18.1921 16.1933 17.6001C16.5889 17.008 16.8 16.312 16.8 15.6C16.8 14.6452 16.4207 13.7295 15.7456 13.0544C15.0705 12.3793 14.1548 12 13.2 12ZM13.2 16.8C12.9627 16.8 12.7307 16.7296 12.5333 16.5978C12.336 16.4659 12.1822 16.2785 12.0913 16.0592C12.0005 15.8399 11.9768 15.5987 12.0231 15.3659C12.0694 15.1331 12.1836 14.9193 12.3515 14.7515C12.5193 14.5836 12.7331 14.4694 12.9659 14.4231C13.1987 14.3768 13.4399 14.4005 13.6592 14.4913C13.8785 14.5822 14.0659 14.736 14.1978 14.9333C14.3296 15.1307 14.4 15.3627 14.4 15.6C14.4 15.9183 14.2736 16.2235 14.0485 16.4485C13.8235 16.6736 13.5183 16.8 13.2 16.8ZM12.348 9.252C12.4621 9.36125 12.5967 9.44689 12.744 9.504C12.8876 9.56749 13.043 9.60028 13.2 9.60028C13.357 9.60028 13.5124 9.56749 13.656 9.504C13.8033 9.44689 13.9379 9.36125 14.052 9.252L16.8 6.552C17.0323 6.31967 17.1628 6.00456 17.1628 5.676C17.1628 5.34744 17.0323 5.03233 16.8 4.8C16.5677 4.56767 16.2526 4.43715 15.924 4.43715C15.5954 4.43715 15.2803 4.56767 15.048 4.8L14.4 5.508V1.2C14.4 0.88174 14.2736 0.576515 14.0485 0.351472C13.8235 0.126428 13.5183 0 13.2 0C12.8817 0 12.5765 0.126428 12.3515 0.351472C12.1264 0.576515 12 0.88174 12 1.2V5.508L11.352 4.8C11.1197 4.56767 10.8046 4.43715 10.476 4.43715C10.1474 4.43715 9.83233 4.56767 9.6 4.8C9.36767 5.03233 9.23715 5.34744 9.23715 5.676C9.23715 6.00456 9.36767 6.31967 9.6 6.552L12.348 9.252ZM21.6 15.6C21.6 15.3627 21.5296 15.1307 21.3978 14.9333C21.2659 14.736 21.0785 14.5822 20.8592 14.4913C20.6399 14.4005 20.3987 14.3768 20.1659 14.4231C19.9331 14.4694 19.7193 14.5836 19.5515 14.7515C19.3836 14.9193 19.2694 15.1331 19.2231 15.3659C19.1768 15.5987 19.2005 15.8399 19.2913 16.0592C19.3822 16.2785 19.536 16.4659 19.7333 16.5978C19.9307 16.7296 20.1627 16.8 20.4 16.8C20.7183 16.8 21.0235 16.6736 21.2485 16.4485C21.4736 16.2235 21.6 15.9183 21.6 15.6ZM22.8 7.2H19.2C18.8817 7.2 18.5765 7.32643 18.3515 7.55147C18.1264 7.77652 18 8.08174 18 8.4C18 8.71826 18.1264 9.02348 18.3515 9.24853C18.5765 9.47357 18.8817 9.6 19.2 9.6H22.8C23.1183 9.6 23.4235 9.72643 23.6485 9.95147C23.8736 10.1765 24 10.4817 24 10.8V20.4C24 20.7183 23.8736 21.0235 23.6485 21.2485C23.4235 21.4736 23.1183 21.6 22.8 21.6H3.6C3.28174 21.6 2.97652 21.4736 2.75147 21.2485C2.52643 21.0235 2.4 20.7183 2.4 20.4V10.8C2.4 10.4817 2.52643 10.1765 2.75147 9.95147C2.97652 9.72643 3.28174 9.6 3.6 9.6H7.2C7.51826 9.6 7.82348 9.47357 8.04853 9.24853C8.27357 9.02348 8.4 8.71826 8.4 8.4C8.4 8.08174 8.27357 7.77652 8.04853 7.55147C7.82348 7.32643 7.51826 7.2 7.2 7.2H3.6C2.64522 7.2 1.72955 7.57928 1.05442 8.25442C0.379285 8.92955 0 9.84522 0 10.8V20.4C0 21.3548 0.379285 22.2705 1.05442 22.9456C1.72955 23.6207 2.64522 24 3.6 24H22.8C23.7548 24 24.6705 23.6207 25.3456 22.9456C26.0207 22.2705 26.4 21.3548 26.4 20.4V10.8C26.4 9.84522 26.0207 8.92955 25.3456 8.25442C24.6705 7.57928 23.7548 7.2 22.8 7.2ZM4.8 15.6C4.8 15.8373 4.87038 16.0693 5.00224 16.2667C5.13409 16.464 5.32151 16.6178 5.54078 16.7087C5.76005 16.7995 6.00133 16.8232 6.23411 16.7769C6.46689 16.7306 6.6807 16.6164 6.84853 16.4485C7.01635 16.2807 7.13064 16.0669 7.17694 15.8341C7.22324 15.6013 7.19948 15.3601 7.10865 15.1408C7.01783 14.9215 6.86402 14.7341 6.66668 14.6022C6.46934 14.4704 6.23734 14.4 6 14.4C5.68174 14.4 5.37652 14.5264 5.15147 14.7515C4.92643 14.9765 4.8 15.2817 4.8 15.6Z"
            fill="black"
          />
        </svg>
      ),
      title: "Total Revenues",
      cost: "$2,129,430",
      bg: "#DDEFE0",
    },
    {
      icon: <BsTags />,
      title: "Total Transactions",
      cost: "1,520",
      bg: "#F4ECDD",
    },
    {
      icon: <AiOutlineLike />,
      title: "Total Likes",
      cost: "9,721",
      bg: "#EFDADA",
    },
    { icon: <FiUsers />, title: "Total Users", cost: "892", bg: "#DEE0EF" },
  ];

  let arr3 = [
    {
      txt: "at Sunset Road, Kuta, Bali ",
      title: "Meeting with suppliers from Kuta Bali",
      cost: "14.00-15.00",
      border: "LightGreen",
    },
    {
      txt: "at Central Jakarta  ",
      title: "Check operation at Giga Factory 1",
      cost: "18.00-20.00",
      border: "#6972C3",
    },
  ];

  let arr4 = [
    { txt: "Basic Tees", percent: "55%", color: "red" },
    { txt: "Custom Short Pants", percent: "31%", color: "green" },
    { txt: "Super Hoodies", percent: "14%", color: "yellow" },
  ];



  return (
    <div className={style.main}>
      <div className={style.left}>
        <div className={style.head}>
          <h1>Board.</h1>
          <div className={style.iconmain}>
            {arr.map((x) => {
              return (
                <span className={style.icon}>
                  <h3 style={{ fontSize: "18px" }}>{x.icon}</h3>
                  <h3 style={{ fontSize: "18px", fontWeight: "400" }}>
                    {x.title}
                  </h3>
                </span>
              );
            })}
          </div>
        </div>
        <div className={style.tail}>
          <p>Help</p>
          <p>Contact us</p>
        </div>
      </div>
      {/* .............................................. */}

      <div className={style.right}>
        <div className={style.inner1}>
          <h1>Dashboard</h1>
          <span className={style.lefttop}>
            <span className={style.search}>
              <Custominput placeholder="search" className={style.searchinput} />
              <AiOutlineSearch className={style.searchicon} />
            </span>

            <FaRegBell />
            <img
              alt="avator"
              src="https://c4.wallpaperflare.com/wallpaper/677/813/80/sachin-tendulkar-wallpaper-preview.jpg"
              className={style.img}
            />
          </span>
        </div>
        <div className={style.inner2}>
          {arr2.map((x) => {
            return (
              <div className={style.card} style={{ backgroundColor: x.bg }}>
                <span
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {x.icon}
                </span>
                <p className={style.txt}>{x.title}</p>
                <h1 className={style.cost}>{x.cost}</h1>
              </div>
            );
          })}
        </div>
        <div className={style.inner3}>
          <div className={style.inner3box1title}>
            <span>
              <h2>Activities</h2>
              <p>
                May - June 2021 <AiOutlineDown />
              </p>
            </span>
            <span className={style.li1}>
              <li style={{ color: "black" }}>Guest</li>
              <li style={{ color: "black" }}>User</li>
            </span>
          </div>
          <div
            className={style.inner3box1}
            style={{ width: "63rem", height: "15rem" }}
          >
            <Line data={data} options={options} />
          </div>
        </div>

        <div className={style.inner4}>
          <div className={style.inner4box1}>
            <div className={style.inner4box1title}>
              <h2>Top products</h2>
              <p>
                May - June 2021 <AiOutlineDown />
              </p>
            </div>
            <div className={style.piechart}>
              <span style={{ width: "9.5rem", height: "9.5rem" }}>
                <Pie data={data2} />;
              </span>

              <div>
                <span>
                  {arr4.map((x) => {
                    return (
                      <div className={style.box1main}>
                        <li
                          className={style.li2}
                          style={{ color: x.color }}
                        ></li>
                        <span className={style.box1}>
                          <h3>{x.txt}</h3>
                          <p>{x.percent}</p>
                        </span>
                      </div>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className={style.inner4box2}>
            <div className={style.inner4box2title}>
              <h2>Today’s schedule</h2>
              <p>
                See All
                <AiOutlineRight />
              </p>
            </div>
            <div className={style.inner4box2content}>
              {arr3.map((x) => {
                return (
                  <div
                    style={{
                      borderLeft: `5px solid ${x.border}`,
                      paddingLeft: "1rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        marginBottom: "5px",
                      }}
                    >
                      {x.title}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        marginBottom: "5px",
                      }}
                    >
                      {x.cost}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        marginBottom: "5px",
                      }}
                    >
                      {x.txt}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

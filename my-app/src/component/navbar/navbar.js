import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";

const Navbar = () => {
  const [mobilMenu, setMobilMenu] = useState(false);

  const mobilButtonHandlerOpen = () => {
    setMobilMenu(true);
  };
  const mobilButtonHandlerClose = () => {
    setMobilMenu(false);
  };

  return (
    <React.Fragment>
      {mobilMenu && (
        <div className={style.mobilNavOpen}>
          <div className={style.mobilNavOpenClose}>
            <button
              onClick={mobilButtonHandlerClose}
              className={style.mobilMenuButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </button>
          </div>
          <div className={style.mobilNavOpenMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                d="M388 288a76 76 0 1076 76 76.24 76.24 0 00-76-76zM124 288a76 76 0 1076 76 76.24 76.24 0 00-76-76z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M256 360v-86l-64-42 80-88 40 72h56"
              />
              <path d="M320 136a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 72a32 32 0 10-.2 64z" />
            </svg>
            <p>BaneMX</p>
            <a href="">How we work</a>
            <a href="">Previous Merches</a>
            <a href="">Testimonials</a>
            <a href="">Contact Us</a>
          </div>
        </div>
      )}

      <nav className={style.navbar}>
        <div className={style.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M388 288a76 76 0 1076 76 76.24 76.24 0 00-76-76zM124 288a76 76 0 1076 76 76.24 76.24 0 00-76-76z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M256 360v-86l-64-42 80-88 40 72h56"
            />
            <path d="M320 136a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 72a32 32 0 10-.2 64z" />
          </svg>
          <p>BaneMX</p>
        </div>
        <div className={style.responsiveMenuItems}>
          <div className={style.menu}>
            <a href="">How we work</a>
            <a href="">Previous Merches</a>
            <a href="">Testimonials</a>
            <a href="">Contact Us</a>
          </div>
          <div className={style.mobilMenu}>
            <button
              onClick={mobilButtonHandlerOpen}
              className={style.mobilMenuButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fff"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M80 160h352M80 256h352M80 352h352"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef, useContext } from "react";
import style from "./navbar.module.css";
import logins from "./logins.module.css";
import classes from "./LoginForm.module.scss";
import { insertUser, logIn } from "./user";
let isInitial = true;

const Navbar = () => {
  insertUser();
  const [mobilMenu, setMobilMenu] = useState(false);

  //mobilnav
  const mobilButtonHandlerOpen = () => {
    setMobilMenu(true);
  };
  const mobilButtonHandlerClose = () => {
    setMobilMenu(false);
  };

  //Login
  const [loginPage, setLoginPage] = useState(false);
  const [buttonClickedCheck, setButtonClickedCheck] = useState("0");
  const openLoginPage = () => {
    setLoginPage(true);
  };
  const closeLoginPage = () => {
    setLoginPage(false);
  };

  const [isUserLoggedin, setIsUserLoggedin] = useState([false, ""]);

  const logoutHandler = () => {
    setLoginPage(false);
    setIsUserLoggedin([false, ""]);
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("mail", "");
    setButtonClickedCheck("0");
  };
  useEffect(() => {
    const isLoggedInn = JSON.parse(localStorage.getItem("isLoggedIn"));
    setIsUserLoggedin([isLoggedInn, localStorage.getItem("mail")]);
  }, [logoutHandler]);
  //Login
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const isLoggedIn = logIn(enteredEmail, enteredPassword);
    setIsUserLoggedin([isLoggedIn, enteredEmail]);
    setButtonClickedCheck("1");
  };

  return (
    <React.Fragment>
      {/* Login */}
      {!isUserLoggedin[0] && loginPage && (
        <div className={logins.mobilNavOpen}>
          <div className={logins.mobilNavOpenClose}>
            <div className={logins.back}>
              <button
                onClick={closeLoginPage}
                className={style.mobilMenuButton}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <line
                    x1="216"
                    y1="128"
                    x2="40"
                    y2="128"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <polyline
                    points="112 56 40 128 112 200"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
              </button>
            </div>
            <div className={logins.bodyContainer}>
              <div className={logins.titleContainer}>
                <h1>Login</h1>
                <p>Please enter your Email and Password</p>
              </div>
              <div className={logins.formContainer}>
                <form onSubmit={submitHandler} className={classes.form}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      fill="#000000"
                      viewBox="0 0 256 256"
                      className={classes.icon}
                    >
                      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                    </svg>
                    <input
                      className={classes.input}
                      type="email"
                      id="user-name"
                      name="user-name"
                      autoComplete="on"
                      placeholder="Username or E-mail"
                      ref={emailInputRef}
                    ></input>
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      fill="#000000"
                      viewBox="0 0 256 256"
                      className={classes.icon}
                    >
                      <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                    <input
                      className={classes.input}
                      type="password"
                      id="user-password"
                      name="user-password"
                      autoComplete="off"
                      placeholder="Password"
                      ref={passwordInputRef}
                    ></input>
                  </div>
                  <button className={classes.loginBtn}>LogIn</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      {mobilMenu && (
        <div className={style.mobilNavOpen}>
          <div className={style.redd}>a</div>
          <div className={style.bluee}>a</div>
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

            <a href="">Previous Merches</a>
            <a href="">Testimonials</a>
            <a href="">Contact Us</a>
          </div>
        </div>
      )}

      <nav className={style.navbar}>
        <a href="">
          <div className={style.logo}>
            <div className={style.red}>a</div>
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
            <div className={style.blue}>a</div>
          </div>
        </a>
        <div className={style.responsiveMenuItems}>
          <div className={style.menu}>
            <a href="">Previous Merches</a>
            <a href="">Testimonials</a>
            <a href="">Contact Us</a>
          </div>
          <div>
            {!isUserLoggedin[0] && (
              <div className={style.loginContainer}>
                <button onClick={openLoginPage}>Login</button>
              </div>
            )}
          </div>
          <div className={style.login}>
            {isUserLoggedin[0] && (
              <div className={style.loginContainer}>
                <button onClick={logoutHandler}>Logout</button>
              </div>
            )}
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
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

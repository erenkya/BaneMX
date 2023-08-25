const insertUser = () => {
  localStorage.setItem(
    "userList",
    JSON.stringify([
      {
        mail: "yunusemre@mrusta.com.tr",
        password: "123456",
      },
      {
        mail: "business.ekaya@gmail.com",
        password: "123456",
      },
    ])
  );
};

const logIn = (enteredEmail, enteredPassword) => {
  const userList = JSON.parse(localStorage.getItem("userList")) || [];
  const user = userList.find(
    (user) => user.mail === enteredEmail && user.password === enteredPassword
  );
  if (user) {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("mail", user.mail);
    return true;
  } else {
    alert("Email or password is wrong!");
    return false;
  }
};

export { insertUser, logIn };

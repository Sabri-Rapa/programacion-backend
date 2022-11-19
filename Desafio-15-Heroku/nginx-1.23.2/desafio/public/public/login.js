const socket = io();

const buttonLogin = document.getElementById("login-btn");
buttonLogin.addEventListener("click", (e) => {
  const user = {
    username: document.getElementById("username").value,
  };
  socket.emit("login", JSON.stringify(user));
});


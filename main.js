const usernameData = [
  {
    key: "1",
    value: "Shivang",
  },
  {
    key: "2",
    value: "Shivansh",
  },
  {
    key: "3",
    value: "Priyangshu",
  },
  {
    key: "4",
    value: "Varun",
  },
];

const passwordData = [
  {
    key: "1p",
    value: "Shivang@123",
  },
  {
    key: "2p",
    value: "Shivansh@123",
  },
  {
    key: "3p",
    value: "Priyangshu@123",
  },
  {
    key: "4p",
    value: "Varun@123",
  },
];

usernameData.forEach((element) => {
  localStorage.setItem(element.key, element.value);
});

passwordData.forEach((element) => {
  localStorage.setItem(element.key, element.value);
});

const button1 = () => {
  const uservalue = document.getElementById("Username").value;
  const passvalue = document.getElementById("Password").value;
  if (
    uservalue === localStorage.getItem("1") &&
    passvalue === localStorage.getItem("1p")
  ) {
    const page1 = document.getElementById("loading");
    page1.style.display = "block";

    const page0 = document.getElementById("Login_page");
    page0.style.display = "none";

    const loading = document.getElementById("progress");
    loading.style.animationName = "Loading";
    loading.style.animationDuration = "4s";
    loading.style.animationIterationCount = "infinite";

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/Shivang.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
  } else if (
    uservalue === localStorage.getItem("2") &&
    passvalue === localStorage.getItem("2p")
  ) {
    const page1 = document.getElementById("loading");
    page1.style.display = "block";

    const page0 = document.getElementById("Login_page");
    page0.style.display = "none";

    const loading = document.getElementById("progress");
    loading.style.animationName = "Loading";
    loading.style.animationDuration = "4s";
    loading.style.animationIterationCount = "infinite";

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/Shivansh.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
  } else if (
    uservalue === localStorage.getItem("3") &&
    passvalue === localStorage.getItem("3p")
  ) {
    const page1 = document.getElementById("loading");
    page1.style.display = "block";

    const page0 = document.getElementById("Login_page");
    page0.style.display = "none";

    const loading = document.getElementById("progress");
    loading.style.animationName = "Loading";
    loading.style.animationDuration = "4s";
    loading.style.animationIterationCount = "infinite";

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/Priyangshu.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
  } else if (
    uservalue === localStorage.getItem("4") &&
    passvalue === localStorage.getItem("4p")
  ) {
    const page1 = document.getElementById("loading");
    page1.style.display = "block";

    const page0 = document.getElementById("Login_page");
    page0.style.display = "none";

    const loading = document.getElementById("progress");
    loading.style.animationName = "Loading";
    loading.style.animationDuration = "4s";
    loading.style.animationIterationCount = "infinite";

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-info");
    button.style.fontSize = "20px";
    button.style.marginLeft = "130px";
    button.style.marginTop = "100px";
    const a = document.createElement("a");
    a.href = "http://127.0.0.1:5500/todo_list_app/Users/Varun.html";
    a.append("Click Here");

    button.append(a);
    page1.append(button);
  } else {
    alert("Please Provide the Valid Credentials");
  }
};

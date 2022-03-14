
let token = localStorage.getItem("token");
token = localStorage.getItem("token");
if (token === null) localStorage.setItem("token", "/");

if (token.split("/").length > 4) {
  window.open("/", "_self");
  localStorage.setItem("token", "/");
}

async function fetchData(id) {
  var token = localStorage.getItem("token");
  if (token === null) token = "";
  let data = await $.get(
    `https://recipe-web-55ac1-default-rtdb.firebaseio.com/Homepage/${token}.json`
  );
  const keys = Object.keys(data);
  return keys;
}

async function loadSection() {
  const keys = await fetchData();
  console.log(keys);
  const final = keys.map((key) => {
    return `<button class="btn btn-lg btn-primary m-2" onclick="addSection('${key}')">${key}</button>`;
  });
  $("#container").append(final);
}

function addSection(key) {
  let token = localStorage.getItem("token");

  console.log(token.split("/").length);
  if (token.split("/").length === 4) {
    window.open("/Recipe-Hub/blogPage", "_self");
    localStorage.setItem("token", token + key + "/");
  } else {
    localStorage.setItem("token", token + key + "/");
    console.log(key);
    location.reload();
  }
}

function deleteSection() {
  let token = localStorage.getItem("token");
  token = token.split("/");
  token.pop();
  token.pop();
  token = token.join("/");
  localStorage.setItem("token", token + "/");
  console.log(token);
  location.reload();
}

loadSection();

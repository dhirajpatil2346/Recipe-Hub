async function loadData() {
  var token = localStorage.getItem("token");
  token[0] = "";
  let data = await $.get(
    `https://recipe-web-55ac1-default-rtdb.firebaseio.com/Homepage/${token}.json`
  );
  console.log(data);
  return data;
}

loadData();

async function setData() {
  let data = await loadData();
  let keys = Object.keys(data);
  let values = Object.values(data);
  const final = keys.map((key) => {
    return `<h1 id="${key}">${key}</h1>`;
  });
  $(".container").append(final);
  let i = 0;
  const finalPara = values.map((value) => {
    if (typeof value === "object") {
      let objValue = Object.values(value);
      objValue.sort();
      const final = keys.map((key) => {
        return `<h1 id="${key}">${key}</h1>`;
      });
      for (let index in value) {
        $("h1").eq(i).after(`<p id="${index}">${value[index]}</p>`);
      }
      console.log(value);
    }
    $("h1").eq(i).after(`<p id="${value}">${value}</p>`);
    i++;
  });
}

setData();

function deleteSection() {
  let token = localStorage.getItem("token");
  token = token.split("/");
  token.pop();
  token.pop();
  token = token.join("/");
  localStorage.setItem("token", token + "/");
  console.log(token);
  window.open("/", "_self");
}

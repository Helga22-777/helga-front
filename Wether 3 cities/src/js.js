let url1 =
  "http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&lang=ua";
let url2 =
  "http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&lang=ua";
let url3 =
  "http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&lang=ua";

const arrUrl = [url1, url2, url3];

let container = document.querySelector(".container");

async function getWeather(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw Error(response.status);
  }
  return await response.json();
}
for (let i = 0; i < arrUrl.length; i++) {
  getWeather(arrUrl[i]).then((data) => {
    document.body.append(newBox(data));
  });
}

function newBox(data) {
  let wrap = document.createElement("div");
  wrap.classList.add("wrap");
  container.append(wrap);

  let city = document.createElement("h3");
  city.innerHTML = data.name;
  wrap.append(city);

  let conditions = document.createElement("div");
  conditions.classList.add("conditions");
  wrap.append(conditions);

  let p = document.createElement("p");
  p.classList.add("temp");
  p.innerHTML = getCels();
  conditions.append(p);

  let p2 = document.createElement("p");
  p2.classList.add("sky");
  p2.innerHTML = data.weather[0]["description"];
  conditions.append(p2);

  let p3 = document.createElement("p");
  p3.classList.add("wind");
  p3.innerHTML = `вітер ${data.wind["speed"]}м/с`;
  conditions.append(p3);

  let ico = document.createElement("div");
  ico.classList.add("ico-weather");
  ico.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png" />`;
  wrap.append(ico);

  p.addEventListener("click", onClickTemp);

  function onClickTemp() {
    if (p.title === "Показать по Фаренгейту") {
      p.innerHTML = getFareng();
    } else {
      p.innerHTML = getCels();
    }
  }

  function getFareng() {
    p.setAttribute("title", "Показать по Цельсию");
    return Math.floor(((data.main.temp - 273.15) * 9) / 5 + 32) + "&deg" + "F";
  }

  function getCels() {
    p.setAttribute("title", "Показать по Фаренгейту");
    return Math.floor(data.main.temp - 273.15) + "&deg" + "C";
  }
}

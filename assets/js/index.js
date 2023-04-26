let leaf = document.querySelector("#menu");
let modal = document.querySelector("#index");
let body = document.querySelector("body");
let indexics = document.querySelector("#indexics");

leaf.onclick = (event) => {
  body.classList.toggle("hide");
  modal.classList.toggle("open");
};
indexics.onclick = (event) => {
	body.classList.remove("hide");
	modal.classList.remove("open");
};

let ppbutton = document.querySelector("#ppbutton");
let pprules = document.querySelector("#pprules");
let ppsection = document.querySelector(".ping-pong");
let ics = document.querySelector("#ics");

ppbutton.onclick = (event) => {
  body.classList.toggle("hide");
  ppsection.classList.toggle("hide");
  pprules.classList.toggle("open");
};
ics.onclick = (event) => {
  body.classList.remove("hide");
  ppsection.classList.remove("hide");
  pprules.classList.remove("open");
};

let cbbutton = document.querySelector("#cbbutton");
let cbrules = document.querySelector("#cbrules");
let cbssection = document.querySelector(".calciobalilla");
let cbics = document.querySelector("#cbics");
cbbutton.onclick = (event) => {
  body.classList.toggle("hide");
  cbssection.classList.toggle("hide");
  cbrules.classList.toggle("open");
};
cbics.onclick = (event) => {
  body.classList.remove("hide");
  cbssection.classList.remove("hide");
  cbrules.classList.remove("open");
};

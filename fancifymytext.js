const alertFunction = () => {
  document.getElementById("textarea").style.fontSize = "24px";
};

const fancyRadio = () => {
  alert("Radio button was clicked");
  document.getElementById("textarea").style.fontWeight = "bold";
  document.getElementById("textarea").style.color = "blue";
  document.getElementById("textarea").style.textDecoration = "underline";
};

const boringRadio = () => {
  document.getElementById("textarea").style.fontWeight = "normal";
};

const mooButton = () => {
  document.getElementById("textarea").style.textTransform = "uppercase";
  let text = document.getElementById("textarea").value;
  console.log(text);
  let newText = text.split(".");
  let newString = newText.join("-Moo.");
  document.getElementById("textarea").value = newString;
};

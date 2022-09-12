let time = new Date().getHours();

let cssStyle = {
  textAlign: "center"
};

function Color() {
  if (time >= 1 && time < 12) {
    cssStyle.color = "green";
  } else if (time >= 12 && time < 19) {
    cssStyle.color = "yellow";
  } else {
    cssStyle.color = "black";
  }
}

Color();

export default cssStyle;

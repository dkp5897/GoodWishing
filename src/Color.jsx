import React from "react";

const fullName = "Deepak Kumar";
const image1 =
  "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg";
const image2 = "https://picsum.photos/300/300";
const image3 = "https://picsum.photos/200/300";

const Css = {
  color: "red",
  fontSize: "40px"
};

function Color() {
  return (
    <>
      <h1 style={Css}>My name is {fullName}</h1>
      <img src={image1} alt="image-1" />
      <img src={image2} alt="image-2" />
    </>
  );
}

export default Color;

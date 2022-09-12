import color from "./MassageColor";

let Name = "Deepak";
let massage = "";

let time = new Date().getHours();

if (time >= 1 && time < 12) {
  massage = "Good Mornig!";
} else if (time >= 12 && time < 19) {
  massage = "Good Afternoon!";
} else {
  massage = "Good Night!";
}

function Massage() {
  return (
    <>
      <h1>
        {" "}
        Hello {Name}{" "}
        <span className="massage" style={color}>
          {massage}
        </span>{" "}
      </h1>
    </>
  );
}

export default Massage;

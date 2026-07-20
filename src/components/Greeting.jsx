import "../App.css";

function Greeting({ message }) {
  return (
    <>
      <div className="card">
        <h1>Hello React !</h1>
        {""}
        <p>{message}</p>
      </div>
    </>
  );
}

export default Greeting;

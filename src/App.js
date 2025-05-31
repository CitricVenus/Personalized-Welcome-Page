import "./App.css";
import Welcome from "./components/Welcome";
import TimeGreeting from "./components/TimeGreeting";
import Preferences from "./components/Preferences";
import ButtonComponent from "./components/ButtonComponent";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  const handleClick2 = () => {
    alert("I'm the same buton component with other values! :)");
  };

  return (
    <div>
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light  ">
          <div className="container-fluid justify-content-between">
            <Welcome name={"Erick"} location={"Mexico"}></Welcome>
            <TimeGreeting></TimeGreeting>
            <ButtonComponent
              text="Click Me Again"
              onClick={handleClick2}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            ></ButtonComponent>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Preferences>
          <ButtonComponent
            text="Click Me"
            onClick={handleClick}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          ></ButtonComponent>
        </Preferences>
      </div>
    </div>
  );
}

export default App;

import { Button } from "bootstrap";
import "./ButtonComponent.css";

function ButtonComponent({ text, onClick, style }) {
  return (
    <button
      className="btn  btn-primary btn-box-shadown"
      onClick={onClick}
      style={style}
    >
      {" "}
      {text}
    </button>
  );
}
export default ButtonComponent;

import { BasicButtonProps } from "../../types";
import "./button.scss";

const BasicButton: React.FC<BasicButtonProps> = ({ clickFunction, label, sub_className }) => {
  return (
    <button
      onClick={(e) => clickFunction(label)}
      className={`button_style ` + sub_className}
      value={label}>
      {label}
    </button>
  );
};

export default BasicButton;
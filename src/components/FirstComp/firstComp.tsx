import { useFirstComp } from "./firstComp.hook";
import "./style.scss";

export const FirstComp: React.FC = () => {
  const { name } = useFirstComp();
  return (
    <div className="FirstComp">
      <h1>{name}</h1>
    </div>
  );
};

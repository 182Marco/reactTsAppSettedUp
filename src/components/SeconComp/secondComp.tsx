import { useSecondComp } from "./secondComp.hook";

export const SecondComp: React.FC = () => {
  const { name } = useSecondComp();
  return (
    <div className="SecondComp">
      <h1>{name}</h1>
    </div>
  );
};

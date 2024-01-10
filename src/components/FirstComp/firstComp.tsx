import { useFirstComp } from "./firstComp.hook";

export const FirstComp: React.FC = () => {
  const { name } = useFirstComp();
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

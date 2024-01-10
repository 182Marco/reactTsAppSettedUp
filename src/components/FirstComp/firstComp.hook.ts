import { useState } from "react";

export const useFirstComp = () => {
  const [name] = useState("bil");

  return { name };
};

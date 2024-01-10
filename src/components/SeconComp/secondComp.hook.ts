import { useState } from "react";

export const useSecondComp = () => {
  const [name] = useState("Al");

  return { name };
};

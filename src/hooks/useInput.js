import { useState } from "react";

export const useInput = (props) => {
  const [value, setValue] = useState(props);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};
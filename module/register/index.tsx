import React from "react";
import {FormRegisterGlobal} from "@app/components/FormRegisterGlobal";

export function Register(): JSX.Element {
  return (
    <div
      style={{
        padding: "0 20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormRegisterGlobal />
    </div>
  );
}

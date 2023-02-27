import React from "react";
import {FormLoginGlobal} from "@app/components/FormLoginGlobal";

export function Login(): JSX.Element {
  return (
    <div style={{padding: "0 20px", display: "flex", alignItems: "center"}}>
      <FormLoginGlobal />
    </div>
  );
}

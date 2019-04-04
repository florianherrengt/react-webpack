import * as React from "react";
import { Test } from "types";

export interface HelloProps {
  compiler: string;
  framework: string;
  test?: Test;
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

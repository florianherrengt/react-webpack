import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Hello } from "./Hello";

storiesOf("Components/Header", module).add("test", () => (
  <Hello compiler="t" framework="react" />
));

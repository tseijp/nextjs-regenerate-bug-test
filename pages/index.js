import * as React from "react";
import { ReactNode } from "react";
import { AlwaysGenerated } from "../components";

const useForceUpdate = () => {
  const [, set] = React.useState(-1);
  return React.useRef(() => set(Math.random)).current;
};

const Container = (props) => {
  const forceUpdate = useForceUpdate();
  return (
    <div
      {...props}
      onClick={forceUpdate}
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        position: "absolute",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        background: "#3A3A3A",
      }}
    />
  );
};

export const App = () => {
  return (
    <Container>
      <AlwaysGenerated />
    </Container>
  );
};

export default App;

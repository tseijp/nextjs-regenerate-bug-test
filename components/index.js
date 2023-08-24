import * as React from "react";

export const AlwaysGenerated = AlwaysGenerated_;

export function AlwaysGenerated_() {
  const id = React.useId();

  React.useEffect(() => {
    console.log("EFFECT", id);
  }, [id]);

  return <div style={{ fontSize: "5rem" }}>{"🤯"}</div>;
}

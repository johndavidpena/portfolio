import React from "react";

import Play from "./Play";
import Pause from "./Pause";
import Stop from "./Stop";
import Forward30 from "./Forward30";
import Back from "./Back";

const Icon = props => {
  switch (props.name) {
    case "play":
      return <Play {...props} />;
    case "pause":
      return <Pause {...props} />;
    case "stop":
      return <Stop {...props} />;
    case "forward30":
      return <Forward30 {...props} />;
    case "back":
      return <Back {...props} />;
    default:
      return;
  }
};

export default Icon;
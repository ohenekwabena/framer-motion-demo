import React from "react";
import range from "lodash.range";

import WidgetProcessor from "./WidgetProcessor";

function App() {
  const [widgets, setWidgets] = React.useState(() => {
    return range(8).map(() => {
      return {
        id: crypto.randomUUID(),
        status: "unprocessed",
      };
    });
  });

  function processWidget(id, status) {
    const nextWidgets = widgets.filter((widget) => {
      return widget.id !== id;
    });

    setWidgets([...nextWidgets, { id, status: status }]);
  }

  return (
    <>
      <WidgetProcessor widgets={widgets} processWidget={processWidget} />
    </>
  );
}

export default App;

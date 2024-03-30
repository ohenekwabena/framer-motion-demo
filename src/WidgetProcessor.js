import React from "react";
import { LayoutGroup, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "react-feather";
import range from "lodash.range";

import VisuallyHidden from "./VisuallyHidden";

// Clicking the "Down" button should mark a single widget as processed. It should select the final unprocessed widget in the inbox.
// Clicking the "Up" button should mark the very first processed widget as unprocessed.

function WidgetProcessor({ widgets, processWidget }) {
  const unprocessedWidgets = widgets.filter((widget) => widget.status === "unprocessed");
  const processedWidgets = widgets.filter((widget) => widget.status === "processed");

  return (
    <LayoutGroup>
      <div className="wrapper">
        <div className="inbox">
          {unprocessedWidgets.map((widget) => {
            return (
              <motion.button
                layoutId={widget.id}
                key={widget.id}
                className="widget"
                onClick={() => processWidget(widget.id, "processed")}
              />
            );
          })}
        </div>

        <div className="actions">
          <button
            onClick={() => {
              if (unprocessedWidgets.length < 1) return;
              processWidget(unprocessedWidgets[unprocessedWidgets.length - 1].id, "processed");
            }}
          >
            <VisuallyHidden>Process widget</VisuallyHidden>
            <ChevronDown />
          </button>
          <button
            onClick={() => {
              if (processedWidgets.length < 1) return;
              processWidget(processedWidgets[0].id, "unprocessed");
            }}
          >
            <ChevronUp />
            <VisuallyHidden>Revert widget</VisuallyHidden>
          </button>
        </div>

        <div className="outbox">
          {processedWidgets.map((widget) => {
            return (
              <motion.button
                layoutId={widget.id}
                key={widget.id}
                className="widget"
                onClick={() => processWidget(widget.id, "unprocessed")}
              />
            );
          })}
        </div>
      </div>
    </LayoutGroup>
  );
}

export default WidgetProcessor;

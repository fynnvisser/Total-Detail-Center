import React from "react";

/**
 * Subtle huge italic word rendered behind a section heading.
 * Used to add visual rhythm + "speed" feeling to every section.
 *
 * theme: "light" | "dark" | "red"
 * position: "center" | "top" | "left"
 */
export default function SectionBackdrop({ word, theme = "light", position = "center" }) {
  const colorClass =
    theme === "dark" ? "ghost-dark" : theme === "red" ? "ghost-red" : "ghost-light";

  const posStyle =
    position === "top"
      ? { alignItems: "flex-start", paddingTop: "2vw" }
      : position === "left"
      ? { justifyContent: "flex-start", paddingLeft: "-4vw" }
      : undefined;

  return (
    <div
      className="section-backdrop"
      style={posStyle}
      aria-hidden="true"
      data-testid="section-backdrop"
    >
      <span className={`ghost-word animate-ghost-drift ${colorClass}`}>{word}</span>
    </div>
  );
}

import React from "react";
import "./grid-layout.scss";

type GridLayoutProps = {
  columns?: string;
  gap?: string;
  children?: React.ReactNode;
};

const GridLayout = (props: GridLayoutProps) => {
  const { children } = props;
  const compClass = "cfm-grid-layout";
  return (
    <div
      className={compClass}
      style={{
        gridTemplateColumns: props.columns || "1fr",
        gap: props.gap || "1rem"
      }}
    >
      {children}
    </div>
  );
};

export default GridLayout;

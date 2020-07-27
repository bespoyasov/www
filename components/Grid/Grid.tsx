import React from "react";
import { classes as is } from "@shared/classes";
import styles from "./Grid.module.css";

type ColumnsCount = number;
type ClassNameModifier = string;

function of(columns: ColumnsCount): ClassNameModifier {
  return styles[`of-${columns}`];
}

type GridProps = {
  element?: keyof JSX.IntrinsicElements;
  columns?: ColumnsCount;
};

export const Grid: React.FC<GridProps> = ({
  children,
  columns: columnsCount = 4,
  element: Element = "div",
}) => {
  const { grid } = styles;
  return <Element className={is(grid, of(columnsCount))}>{children}</Element>;
};

import React from "react";
import { classes as is } from "@shared/classes";
import styles from "./Grid.module.css";

type ColumnsCount = number;
type ClassNameModifier = string;

function of(columns: ColumnsCount): ClassNameModifier {
  return styles[`of-${columns}`];
}

type GridProps = {
  as?: keyof JSX.IntrinsicElements;
  of?: ColumnsCount;
};

export const Grid: React.FC<GridProps> = ({
  children,
  of: columnsCount = 4,
  as: Element = "div",
}) => {
  const { grid } = styles;
  return <Element className={is(grid, of(columnsCount))}>{children}</Element>;
};

import React from "react";
import { classes } from "@shared/classes";
import styles from "./Grid.module.css";

type ColumnsCount = number;
type ClassNameModifier = string;

function of(columns: ColumnsCount): ClassNameModifier {
  return styles[`of-${columns}`];
}

export const Grid: React.FC = ({ children }) => {
  const { grid } = styles;
  const columnsCount = React.Children.count(children);
  return <div className={classes(grid, of(columnsCount))}>{children}</div>;
};

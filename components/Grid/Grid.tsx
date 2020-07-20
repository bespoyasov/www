import React from "react";
import { classes } from "@shared/classes";
import styles from "./Grid.module.css";

type ColumnsCount = number;
type ClassModifier = string;

function of(columns: ColumnsCount): ClassModifier {
  return styles[`of-${columns}`];
}

export const Grid: React.FC = ({ children }) => {
  const { grid } = styles;
  const columns = React.Children.count(children);
  return <div className={classes(grid, of(columns))}>{children}</div>;
};

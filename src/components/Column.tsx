import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./Column.module.css";

export type ColumnType = {
  className?: string;
  identificationID?: string;
  toRequestAnIDCardFromBete?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const Column: FunctionComponent<ColumnType> = ({
  className = "",
  identificationID,
  toRequestAnIDCardFromBete,
  propHeight,
}) => {
  const identificationIDStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={[styles.column, className].join(" ")}>
      <div className={styles.content}>
        <h1 className={styles.identificationId} style={identificationIDStyle}>
          {identificationID}
        </h1>
        <p className={styles.toRequestAn}>{toRequestAnIDCardFromBete}</p>
      </div>
      <div className={styles.actions}>
        <Button
          className={styles.button}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "12",
            background: "#4555ff",
            borderRadius: "10px",
            "&:hover": { background: "#4555ff" },
            height: 41,
          }}
        >
          Send Request
        </Button>
      </div>
    </div>
  );
};

export default Column;

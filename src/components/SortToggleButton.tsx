import React from "react";
import styles from "./SortToggleButton.module.css";
import {SortToggleProps} from "../types.ts";

const SortToggleButton: React.FC<SortToggleProps> = ({ isAscending, onToggle }) => {
    return (
        <div className={styles.sortToggleContainer}>
            <span className={styles.sortLabel}>Sort Descending</span>
            <div
                className={`${styles.customToggle} ${isAscending ? styles.active : ""}`}
                onClick={onToggle}
            >
                <div className={styles.toggleThumb}></div>
            </div>
            <span className={styles.sortLabel}>Sort Ascending</span>
        </div>
    );
};

export default SortToggleButton;
import React from 'react';
import styles from './Sorting.module.css';
import SortToggleButton from './SortToggleButton';
import {SortingProps} from "../types.ts";

const Sorting: React.FC<SortingProps> = ({ sortMode, isAscending, onSortModeChange, onToggleAscending }) => {
    return (
        <div className={styles.sorting}>
            <button
                onClick={() => onSortModeChange('alphabetic')}
                style={{ fontWeight: sortMode === 'alphabetic' ? 'bold' : 'normal' }}
                className={styles.sortingAlphabet}
            >
                Sort by Alphabet
            </button>
            <button
                onClick={() => onSortModeChange('time')}
                style={{ fontWeight: sortMode === 'time' ? 'bold' : 'normal' }}
                className={styles.sortingTime}
            >
                Sort by Time
            </button>
            <SortToggleButton isAscending={isAscending} onToggle={onToggleAscending} />
        </div>
    );
};

export default Sorting;

import React, { useRef } from "react";
import styles from "./BalloonContainer.module.css";

const createBalloons = (container: HTMLDivElement | null) => {
    if (!container) return;

    const balloons = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
    }));

    return balloons;
};

const BalloonContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const balloonContainerRef = useRef<HTMLDivElement>(null);
    const balloons = createBalloons(balloonContainerRef.current);

    return (
        <div ref={balloonContainerRef} >
            {balloons?.map((balloon) => (
                <div
                    key={balloon.id}
                    className={styles.balloon}
                    style={{
                        left: balloon.left,
                        animationDelay: balloon.animationDelay,
                        backgroundColor: balloon.backgroundColor,
                    }}
                />
            ))}
            {children}
        </div>
    );
};

export default BalloonContainer;

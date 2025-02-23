import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import BalloonContainer from "./BalloonContainer.tsx";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <BalloonContainer>
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Welcome to Your To-Do App</h1>
                <p>Stay productive, stay organized!</p>
            </header>
            <button className={styles.ctaButton} onClick={() => navigate("/todo")}>
                Get Started
            </button>
        </div>
        </BalloonContainer>
    );
};

export default HomePage;
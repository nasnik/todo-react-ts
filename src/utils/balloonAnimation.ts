import styles from '../App.module.css';
export const createBalloons = (container: HTMLDivElement | null) => {
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");
        balloon.className = styles.balloon;
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        container.appendChild(balloon);
    }

    return () => {
        container.innerHTML = "";
    };
};
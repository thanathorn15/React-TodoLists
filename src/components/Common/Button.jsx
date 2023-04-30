import styles from './Button.module.scss';

export function Button({ text, active = true,onClickFN }) {
    let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
    return <button className={`${styles.btn} ${btnStyles}`} onClick={onClickFN}>{text}</button>;
}
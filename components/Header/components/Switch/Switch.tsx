import styles from './Switch.module.sass';

export const Switch = () => {
  return (
    <label className={styles.switch}>
      <input type='checkbox' />
        <span className={styles.slider} />
    </label>
  );
};

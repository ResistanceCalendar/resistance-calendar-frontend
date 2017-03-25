import React from 'react';

import styles from './Loading.sass';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.rect1} />
        <div className={styles.rect2} />
        <div className={styles.rect3} />
        <div className={styles.rect4} />
        <div className={styles.rect5} />
      </div>
    </div>
  );
};

export default Loading;

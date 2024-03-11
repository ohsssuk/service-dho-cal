import { ReactNode } from 'react';

import styles from './components.module.css';

export default function CommonSection({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className={`${styles.content_header}`}>
      <div className={`${styles.inner}`}>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

'use client';

import { ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import styles from './components.module.css';

export default function CommonSection({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className={`${styles.common_component} mx-auto`}>
      {title && (
        <div className={`${styles.head}`}>
          <h3 className={`${styles.title}`}>{title ?? ''}</h3>
          <button onClick={toggleCollapse}>
            <FontAwesomeIcon icon={isCollapsed ? faAngleDown : faAngleUp} />
          </button>
        </div>
      )}
      {!isCollapsed && children}
    </section>
  );
}

'use client';

import Link from 'next/link';
import styles from './Navigation.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { useDevice } from '@/hooks/useDevice';

// 메뉴 구조 정의
const menuItems = [
  {
    id: 'info',
    label: '정보',
    children: [
      { id: 'smuggling', label: '밀수단', href: '/smuggling' },
      { id: 'cooking', label: '생산: 조리', href: '#', inDevelopment: true },
      { id: 'brewing', label: '생산: 주조', href: '#', inDevelopment: true },
    ],
  },
  {
    id: 'tools',
    label: '편의기능',
    children: [{ id: 'fleet', label: '함대 관리', href: '/' }],
  },
];

const MenuItem = ({
  item,
  onClick,
  isMobile,
  isOpen,
  onToggle,
}: {
  item: (typeof menuItems)[0];
  onClick?: () => void;
  isMobile: boolean;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) => {
  const toggleSubmenu = () => {
    onToggle(item.id);
  };

  const handleMenuClick = (child: any) => {
    if (child.inDevelopment) {
      alert('현재 개발 중인 기능입니다. 빠른 시일 내에 업데이트하겠습니다.');
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <li className={styles.menuItemWrapper}>
      <div
        className={`${styles.menuCategory} ${isOpen ? styles.open : ''}`}
        onClick={toggleSubmenu}
      >
        {item.label}
        <FontAwesomeIcon icon={faChevronDown} className={styles.chevron} />
      </div>
      <ul className={`${styles.submenu} ${isOpen ? styles.open : ''}`}>
        {item.children.map((child) => (
          <li key={child.id} className={styles.submenuItem}>
            {child.inDevelopment ? (
              <span
                className={styles.menuItem}
                onClick={() => handleMenuClick(child)}
              >
                {child.label}
              </span>
            ) : (
              <Link
                href={child.href}
                className={styles.menuItem}
                onClick={onClick}
              >
                {child.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const { deviceType, isLoading } = useDevice();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // 모바일 메뉴를 닫을 때 열린 서브메뉴도 모두 닫기
    if (isMenuOpen) {
      setOpenMenuId(null);
    }
  };

  const handleToggleSubmenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  if (isLoading) {
    return (
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            대항오 나침반
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          대항오 나침반
        </Link>

        {deviceType === 'mobile' && (
          <>
            <button className={styles.menuButton} onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>

            <div
              className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}
            >
              <button className={styles.closeButton} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <ul className={styles.menuList}>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    onClick={toggleMenu}
                    isMobile={true}
                    isOpen={openMenuId === item.id}
                    onToggle={handleToggleSubmenu}
                  />
                ))}
              </ul>
            </div>
          </>
        )}

        {deviceType === 'pc' && (
          <ul className={styles.pcMenu}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isMobile={false}
                isOpen={openMenuId === item.id}
                onToggle={handleToggleSubmenu}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

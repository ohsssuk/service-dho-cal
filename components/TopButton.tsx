'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            color: '#374151',
            border: '1px solid var(--gray300)',
            bottom: '20px',
            right: '20px',
          }}
          className="w-8 h-8 fixed z-50 bg-white rounded-md border"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-sm" />
        </button>
      )}
    </>
  );
}

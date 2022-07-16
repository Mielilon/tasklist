import { useState, useEffect, useRef } from 'react';

const useOutsideClick = () => {
  const [flag, setFlag] = useState(false);

  const popupRef = useRef<HTMLLIElement>(null);

  const changeFlag = (e: Event) => {
    if (!popupRef.current?.contains(e.target as HTMLElement)) {
      setFlag(false);
    }
  };

  useEffect(() => {
    if (flag) {
      document.addEventListener('click', changeFlag);
    }
    return () => document.removeEventListener('click', changeFlag);
  }, [flag]);

  const changeVisibility = () => setFlag((prev) => !prev);
  const isVisible = flag;
  return [popupRef, changeVisibility, isVisible];
};

export default useOutsideClick;

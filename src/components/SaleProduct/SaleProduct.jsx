import Button from '@components/Button/Button';
import css from './Styles.module.scss';
import { useEffect, useRef, useState } from 'react';
function SaleProduct() {
  const { container, w35, w30, img, title, containerContent, description } =
    css;
  const [scrollDirection, setScrollDirection] = useState(null);
  const CurrentPosition = useRef(0);
  const [translateXPosition, setTranslateXPosition] = useState(80);
  const [postionNow, setPositionNow] = useState(0);

  const ScrollHandle = () => {
    const CurrentScrollPosition = window.pageYOffset;
    if (CurrentScrollPosition > CurrentPosition.current) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }
    CurrentPosition.current =
      CurrentScrollPosition <= 0 ? 0 : CurrentScrollPosition;
    setPositionNow(CurrentScrollPosition);
  };

  const handleTranlateX = () => {
    if (scrollDirection === 'down' && postionNow >= 1490) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 3
      );
    } else if (scrollDirection === 'up') {
      setTranslateXPosition(
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      );
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', ScrollHandle);
    return () => window.removeEventListener('scroll', ScrollHandle);
  }, []);

  useEffect(() => {
    handleTranlateX();
  }, [postionNow]);

  return (
    <div className={`${container} flex justify-center items-center`}>
      <div
        className={w35}
        style={{
          transform: ` translateX(${translateXPosition}px)`,
          transition: 'transform 100ms',
        }}
      >
        <img className={img} src="src/assets/images/Image_1.webp" alt="" />
      </div>
      <div className={`${w30} flex items-center justify-center`}>
        <div className={containerContent}>
          <h2 className={`${title} text-center`}>Sale of the year</h2>
          <div className={`${description} text-center`}>
            Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
          </div>
          <Button content={'Read more'} status={false} />
        </div>
      </div>
      <div
        className={w35}
        style={{
          transform: ` translateX(-${translateXPosition}px)`,
          transition: 'transform 100ms',
        }}
      >
        <img className={img} src="src/assets/images/Image_2.webp" alt="" />
      </div>
    </div>
  );
}

export default SaleProduct;

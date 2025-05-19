import Countdown from '@components/Countdown/Countdown';
import css from './HeadingListProduct.module.scss';
import HeadingProductRight from '@components/HeadingProductRight/HeadingProductRight';

function HeadingListProduct() {
  const { container, container_item } = css;
  return (
    <div className="flex justify-center">
      <div className={`flex ${container}`}>
        <div className={`${container_item} flex justify-center`}>
          <HeadingProductRight />
        </div>
        <div className={container_item}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
}

export default HeadingListProduct;

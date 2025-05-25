import Countdown from '@components/Countdown/Countdown';
import css from './HeadingListProduct.module.scss';
import HeadingProductRight from '@components/HeadingProductRight/HeadingProductRight';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct({ data }) {
  const { container, container_item } = css;
  return (
    <div className="flex justify-center">
      <div className={`flex ${container}`}>
        <div className={`${container_item} flex justify-center`}>
          <HeadingProductRight />
        </div>
        <div className={`${container_item} flex gap-x-5`}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <ProductItem
                  src={item.img.value[0].img}
                  imgHover={item.img.value[1].img}
                  decription={item.decription}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeadingListProduct;

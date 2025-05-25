import ProductItem from '@components/ProductItem/ProductItem';
import css from './Styles.module.scss';
function ProductListShow({ dataShow }) {
  const { container, space } = css;
  return (
    <div className={`${space} flex justify-center`}>
      <div className={`${container} grid grid-cols-4 gap-y-8`}>
        {dataShow.map((item, index) => {
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
  );
}

export default ProductListShow;

import css from './Styles.module.scss';
import reloadIcon from '@icons/svgs/reload.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';

function ProductItem({ src, imgHover, decription, price }) {
  const {
    productPrice,
    productDecrip,
    container,
    itemImg,
    imgShowWhenHover,
    listIcon,
    itemImgSize,
    boxImg,
  } = css;
  return (
    <div className={container}>
      <div className={itemImg}>
        <img src={src} alt="img" />
        <img className={imgShowWhenHover} src={imgHover} alt="img" />
        <div className={listIcon}>
          <div className={`${boxImg} flex justify-center items-center`}>
            <img className={` ${itemImgSize}`} src={cartIcon} alt="" />
          </div>
          <div className={`${boxImg} flex justify-center items-center`}>
            <img className={` ${itemImgSize}`} src={heartIcon} alt="" />
          </div>
          <div className={`${boxImg} flex justify-center items-center`}>
            <img className={` ${itemImgSize}`} src={reloadIcon} alt="" />
          </div>
          <div className={`${boxImg} flex justify-center items-center`}>
            <img className={` ${itemImgSize}`} src={reloadIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={productDecrip}>{decription}</div>
      <div className={productPrice}>${price}</div>
    </div>
  );
}

export default ProductItem;

import logo from '@icons/images/marseille-logo-transparent.webp';
import logoPayment from '@assets/images/iconPayment.webp';
import css from './Styles.module.scss';
import data from './constants';
function Footer() {
  const { container, text_size, cursor } = css;
  return (
    <div className={`${container} flex flex-col items-center gap-y-9`}>
      <div>
        <img src={logo} alt="" width="160px" height="56px" />
      </div>
      <div className={`${text_size} flex gap-x-15`}>
        {data.map((item, index) => {
          return (
            <div className={cursor} key={index}>
              {item.content}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <div>Guaranteed safe ckeckout</div>
        <img src={logoPayment} alt="" />
      </div>
      <div>
        Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce
        themes.
      </div>
    </div>
  );
}

export default Footer;

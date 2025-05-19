import Box_icon from './Box_icon/Box_icon';
import data from './constants';
import css from './Header.module.scss';
import Menu from './Menu/Menu';
import logo from '@icons/images/logo-retina.webp';
import reloadIcon from '@icons/svgs/reload.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';
function Header() {
  return (
    <div className={`flex justify-center ${css.adsolude_hd}`}>
      <div
        className={`${css.grid_header} ${css.nav_height} items-center grid grid-cols-12`}
      >
        <div className="col-span-4 flex items-center">
          <div className={`${css.nav_width30} flex gap-x-2`}>
            {data.dataBoxItem.map((item, index) => {
              return (
                <div key={index}>
                  <Box_icon type={item.type} href={item.href} />
                </div>
              );
            })}
          </div>
          <div className={`${css.nav_width70} flex gap-x-5`}>
            {data.dataNaviItiem.slice(0, 3).map((item2, index) => {
              return (
                <div key={index}>
                  <Menu content={item2.content} href={item2.href} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-4 flex justify-center">
          <img src={logo} alt={logo} width="153px" height="53px" />
        </div>
        <div className="col-span-4 flex items-center">
          <div className={`${css.nav_width70} flex gap-x-5`}>
            {data.dataNaviItiem
              .slice(3, data.dataNaviItiem.lenght)
              .map((item2, index) => {
                return (
                  <div key={index}>
                    <Menu content={item2.content} href={item2.href} />
                  </div>
                );
              })}
          </div>
          <div className={`${css.nav_width30} flex justify-end gap-x-5`}>
            <img width="26px" height="26px" src={reloadIcon} alt={reloadIcon} />
            <img width="26px" height="26px" src={heartIcon} alt={heartIcon} />
            <img width="26px" height="26px" src={cartIcon} alt={cartIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

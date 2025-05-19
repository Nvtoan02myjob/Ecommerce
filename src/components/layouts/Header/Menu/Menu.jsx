import css from '../Header.module.scss';
import classNames from 'classnames';

function Menu({ content, href }) {
  return (
    <div
      className={classNames(css.menu_bellow, css.nav_font_size, css.nav_text)}
    >
      {content}
    </div>
  );
}

export default Menu;

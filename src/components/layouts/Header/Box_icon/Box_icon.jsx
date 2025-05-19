import css from '../Header.module.scss';
import fbIcon from '@icons/svgs/fb.svg';
import igIcon from '@icons/svgs/ig.svg';
import thrIcon from '@icons/svgs/th.svg';
function Box_icon({ type, href }) {
  const setIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ig':
        return igIcon;
      case 'thr':
        return thrIcon;
    }
  };
  return (
    <div className={css.boxIcon}>
      <img src={setIcon(type)} alt={type} />
    </div>
  );
}

export default Box_icon;

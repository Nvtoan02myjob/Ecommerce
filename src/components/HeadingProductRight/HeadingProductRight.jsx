import Countdown from '@components/Countdown/Countdown';
import css from './Styles.module.scss';
import classNames from 'classnames';
import Button from '@components/Button/Button';
function HeadingProductRight() {
  const { img_prd_r, title } = css;
  return (
    <div className={img_prd_r}>
      <Countdown />
      <h2 className={`${title} flex justify-center`}>
        The classics make a comeback
      </h2>
      <Button content={'Buy now'}  status={true}/>
    </div>
  );
}

export default HeadingProductRight;

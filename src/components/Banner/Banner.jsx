import Button from '@components/Button/Button';
import css from './Banner.module.scss';
function Banner() {
  const {
    banner,
    container,
    nav_margin_reset,
    banner_title,
    banner_text,
    banner_btn,
  } = css;
  return (
    <div className={`${banner} flex justify-center items-center`}>
      <div className="flex flex-col justify-content gap-y-6">
        <h1
          className={`${nav_margin_reset} ${banner_title} flex justify-center items-center`}
        >
          XStore Marseille04 Demo
        </h1>
        <div className={`${banner_text}`}>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <Button content={'Go to shop'}  status={true}/>
      </div>
    </div>
  );
}

export default Banner;

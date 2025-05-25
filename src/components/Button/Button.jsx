import css from './Button.module.scss';
function Button({ content, status }) {
  const { btn, btnBgWhite } = css;
  const select = status ?  btn : btnBgWhite;
  return (
    <div className="flex justify-center">
      <button className={select}>{content}</button>
    </div>
  );
}

export default Button;

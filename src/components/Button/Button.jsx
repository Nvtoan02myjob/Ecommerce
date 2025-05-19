import css from './Button.module.scss';
function Button({ content }) {
  const { btn } = css;
  return (
    <div className="flex justify-center">
      <button className={btn}>{content}</button>
    </div>
  );
}

export default Button;

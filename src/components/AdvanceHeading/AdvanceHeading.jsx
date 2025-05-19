import css from './AdvanceHeading.module.scss';
function AdvanceHeading() {
  const {
    container,
    heading_line,
    content_line,
    content_line_title,
    content_line_title2,
  } = css;
  return (
    <div className={`${container} flex items-center`}>
      <div className={`${heading_line} grow`}></div>
      <div
        className={`${content_line} flex flex-col justify-end items-center gap-y-4`}
      >
        <div className={`${content_line_title}`}>don't miss super offers</div>
        <h2 className={`${content_line_title2}`}>Our best products</h2>
      </div>
      <div className={`${heading_line} grow`}></div>
    </div>
  );
}

export default AdvanceHeading;

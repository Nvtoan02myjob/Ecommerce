import css from '../Info.module.scss';
import truckIcon from '@icons/svgs/truck.svg';
function InfoItem({ title, info, src }) {
  const { box_item_infor, infoWidth2, infoWidth8 } = css;
  return (
    <div className={`${box_item_infor} flex items-center`}>
      <div className={infoWidth2}>
        <img src={src} alt="ảnh" width="40px" height="40" />
      </div>
      <div className={`${infoWidth8} flex flex-col gap-y-4`}>
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default InfoItem;

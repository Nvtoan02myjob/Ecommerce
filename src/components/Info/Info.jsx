import InfoItem from '@components/Info/InfoItem/InfoItem';
import css from './Info.module.scss';
import data from './constants.js';

function Info() {
  const { container_info } = css;
  return (
    <div className="flex justify-center">
      <div className={`grid grid-cols-4 gap-x-3 ${container_info}`}>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <InfoItem title={item.title} info={item.info} src={item.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Info;

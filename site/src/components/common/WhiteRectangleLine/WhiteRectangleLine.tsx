import WhiteRectangle from 'components/WhiteRectangle';
import React from 'react';

import s from './WhiteRectangleLine.module.scss';

type Props = {
  data: number[];
  marginTop: number;
};

const WhiteRectangleLine = ({ data, marginTop }: Props) => {
  return (
    <div
      style={{ marginTop }}
      className={s.root}
    >
      {data.map((item, index) => (
        <div
          style={{ marginTop: item }}
          key={index}
          className={s.rectangle}
        >
          <WhiteRectangle />
        </div>
      ))}
    </div>
  );
};

export default WhiteRectangleLine;

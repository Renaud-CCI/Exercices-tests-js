import React, { useState } from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Link = (props) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    // console.log('onMouseEnter');
    setStatus(STATUS.HOVERED);
  }

  const onMouseLeave = () => {
    // console.log('onMouseLeave');
    setStatus(STATUS.NORMAL);
  }

  return (
    <a
      className={status}
      href={props.page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </a>
  );
}

export default Link;
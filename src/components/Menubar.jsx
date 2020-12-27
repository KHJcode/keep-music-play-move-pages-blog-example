import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/index';

const Menubar = () => {

  const { isPlay, setIsPlay } = useContext(Context);

  const onClickPlayMusicButton = useCallback(() => {
    setIsPlay(!isPlay);
  }, [isPlay, setIsPlay]);

  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/author'>Author</Link>
        </li>
        <button onClick={onClickPlayMusicButton}>{isPlay ? '⏹' : '▶'}</button>
      </ul>
    </div>
  );
};

export default Menubar;

import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import Info from '../Info/Info';
import './HomeTop.css';

const HomeTop = () => {
  const [isInfoShowing, setInfoShowing] = useState(false);

  const infoAnimation = useSpring({
    transform: isInfoShowing ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
    display: isInfoShowing ? `block` : 'none',
  });

  return (
    <section className="Home__top">
      <div className="Home__container">
        <h2 className="Home__title">john<span aria-hidden="true" className="Home__title-period">.</span></h2>
        <h1 className="Home__desc">Hi, my name is John and I make websites.<br />As <span className="Home__who-mimas">Mimas the moon</span>, I write songs.<br />I lovingly operate <span className="Home__mimas">mimasmusic</span>.
          </h1>

        <Info style={infoAnimation} />

        <div className="Home__instructions">
          <p className="Home__see">
            <button
              onClick={() => setInfoShowing(!isInfoShowing)}
            >Read more</button> or check out some of my work below <span className="Home__see-down">&#8623;</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeTop;

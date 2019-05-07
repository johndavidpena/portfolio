import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './HomeTop.css';

const HomeTop = (props) => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const [toggleState, setToggleState] = useState('hide');

  function toggle() {
    setToggleState(toggleState === 'hide' ? 'show' : 'hide');
  }

  if (toggleState === 'show') {
    return (
      <section className="Home__top">
        <div className="Home__container">
          <h2 className="Home__title">john<span aria-hidden="true" className="Home__title-period">.</span></h2>
          <h1 className="Home__desc">Hi, my name is John Pena and I make websites.<br />As <span className="Home__who-mimas">Mimas the moon</span>, I write songs.<br />I lovingly operate <a className="Home__link" href="www.mimasmusic.com" className="Home__link" target="_blank">mimasmusic</a>.
          </h1>

          {/* TODO: Can use react-spring to make this animation opening and closing? */}
          <animated.div className="Home__read" style={fade}>
            <p className="Home__info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam et facilis ex quos! In qui quidem dolores provident illum doloremque, facere quibusdam, ullam nam voluptatum repellendus maiores eum, assumenda sint?</p>
            <p className="Home__info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam et facilis ex quos! In qui quidem dolores provident illum doloremque, facere quibusdam, ullam nam voluptatum repellendus maiores eum, assumenda sint?</p>
          </animated.div>

          <div className="Home__instructions">
            <p className="Home__see">
              <button onClick={toggle}>Read more</button> or check out some of my work below <span className="Home__see-down">&#8623;</span>
            </p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="Home__top">
        <div className="Home__container">
          <h2 className="Home__title">john<span aria-hidden="true" className="Home__title-period">.</span></h2>
          <h1 className="Home__desc">Hi, my name is John Pena and I make websites.<br />As <span className="Home__who-mimas">Mimas the moon</span>, I write songs.<br />I lovingly operate <a className="Home__link" href="www.mimasmusic.com" className="Home__link" target="_blank">mimasmusic</a>.
          </h1>

          <div className="Home__instructions">
            <p className="Home__see">
              <button onClick={toggle}>Read more</button> or check out some of my work below <span className="Home__see-down">&#8623;</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeTop;

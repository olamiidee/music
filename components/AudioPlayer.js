import React from "react";
import styles from "..styles/AudioPlayer.module.css";

const AudioPlayer = () => {
  return (
    <div className={styles.audioPlayer}>
      <audio src=""></audio>
      <button>back 10</button>
      <button>play / pause</button>
      <button>forward 30</button>

      {/* Current time */}
      <div>0:00</div>

      {/* Progress bar */}
      <div>
        <input type="range" />
      </div>

      {/* duration */}
      <div>2:49</div>
    </div>
  );
};

export { AudioPlayer };

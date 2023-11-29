import React from "react";
import PropTypes from "prop-types";
import playerStyles from "../styles/YoutubeEmbed.module.css";

const YoutubeEmbed = ({ embedInfo }) => (
  <div className={playerStyles.video_responsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedInfo?.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={embedInfo?.title}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;

import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size, color }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="w-full h-full rounded-full opacity-20 blur-3xl animate-blob"
        style={{ backgroundColor: color || "#a855f7" }}
      ></div>
    </div>
  );
};

// Prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
};

// Default props
BlurBlob.defaultProps = {
  position: { top: "50%", left: "50%" },
  size: { width: "150px", height: "150px" },
  color: "#a855f7",
};

export default BlurBlob;

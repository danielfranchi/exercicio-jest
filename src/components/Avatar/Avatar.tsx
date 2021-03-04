import React from "react";
import Foto from "../../image/img.jpg";

const Avatar = () => {
  return (
    <div>
      <img src={Foto} alt="img" className="img" />
    </div>
  );
};

export default Avatar;

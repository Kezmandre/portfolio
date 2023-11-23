import React from "react";

const Footer = () => {
  const date = new Date()
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      Copyright © {date.getFullYear()} Kazeem Quadri.All Rights reserved.
    </div>
  );
};

export default Footer;

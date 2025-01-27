"use client"
import { useEffect } from "react";

const FooterIcon = ({ Icons }) => {
    useEffect(() => {
        import("ionicons");
      }, []);

  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#C0D8FE] mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default FooterIcon;

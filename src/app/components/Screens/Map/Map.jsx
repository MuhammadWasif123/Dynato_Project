import React from "react";

const Map = () => {
  return (
    <>
      {/* <address>Bokaro ivfihiebvuervbu hfeyfdbuergyoebdhbg</address> */}
      <div className="h-[60vh] relative pb-[15px] top-[17px]">  
        <iframe className=" h-[95%] w-[100%] absolute left-[0px] top-[0px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.71958788364!2d67.04478863203937!3d24.891844611036277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48e7847e1e7d9b7f%3A0x62af224aec6056a6!2sDynato%20Technical%20Services!5e0!3m2!1sen!2s!4v1718980452356!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;

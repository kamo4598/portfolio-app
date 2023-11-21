import React from "react";
import { SocialIconGroupLight } from "./social-icons";

const Contact = () => {
  return (
    <div className="lg:bg-[url('/partyPopper.png')] md:bg-[rgba(24,0,127,1)] bg-no-repeat bg-right-bottom w-full py-10 px-4 md:px-0 text-center md:mt-10">
      <h4 className="text-white text-2xl md:text-3xl font-extrabold font-display mb-8">
        Interested in collaborating?
      </h4>
      <p className="text-white text-md md:w-1/2 lg:w-1/4 m-auto mb-10">
        If you have an application you are interested in developing, a feature
        that you need building, or a project that needs coding, I'd love to help
        you with it.
      </p>
      <div className="lg:w-1/4 md:w-full mt-10 mx-auto pb-8 border-b border-borderLight">
        <p
          className={`text-primaryLight text-m mr-3 transition duration-500 ease-out hover:ease-in hover:underline hover:text-base mb-4`}
        >
          <a
            href="mailto:hassankamran98@gmail.com"
            className="text-primaryLight"
          >
            hassankamran98@gmail.com
          </a>
        </p>
        <div className="mt-3 flex justify-center">
          <SocialIconGroupLight />
        </div>
      </div>
      <p className="text-primaryLight text-xs mt-6">© 2023 Hassan</p>
    </div>
  );
};

export default Contact;

import React from "react";
//Help component that renders a help page with FAQs//
export default function Help() {
  return (
    <div className="flex items-center justify-center w-full text-white bg-[url(/forestboy.png)] bg-contain h-screen relative z-10">
      <div className="bg-black w-full opacity-80 h-screen absolute top-0 z-20"></div>
      <div className="relative z-50">
        <h1 className="text-4xl  mx-6">Help & Support</h1>
        <p className="mx-6">
          You made it to our help page! Here, you would definitely find answers
          to frequently asked questions and also strategies to help navigate our
          website.
        </p>
        <br />
        <p className="text-3xl mx-6">FAQs</p>
        <ul className="mx-6">
          <li>Are the ratings Accurate?</li>
          <li>How do I become a contributor?</li>
          <li>How do I advertise on this website?</li>
        </ul>
      </div>
    </div>
  );
}

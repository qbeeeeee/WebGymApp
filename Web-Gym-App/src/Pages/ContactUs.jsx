import React from "react";

const ContactUs = () => {
  const handleSubmit = () => {};

  return (
    <div className="min-h-screen gap-60 flex items-center justify-center bg-neutral-900 text-white">
      <div className="text-red-500 text-md font-bold absolute left-[6%] top-[15%] flex gap-2">
        HOME / <div className="text-white">Contact Us</div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-lg text-red-500 font-semibold tracking-tighter">
          GET IN TOUCH
        </div>
        <div className="text-3xl mt-1 font-semibold tracking-tighter">
          CONTACT US
        </div>
        <div className="mt-1 max-w-[400px]">
          Send us an inquiry, or drop by our fitness center in person to have a
          look around
        </div>
        <div className="mt-10 font-semibold tracking-tighter text-lg">
          ADDRESS
        </div>
        <div className="mt-1">Kountouriwtou 924, Katerini, 60100</div>
        <div className="mt-10 font-semibold tracking-tighter text-lg">
          PHONE
        </div>
        <div className="mt-1">6983425</div>
        <div className="mt-10 font-semibold tracking-tighter text-lg">
          EMAIL
        </div>
        <div className="mt-1">contact@gmail.com</div>
      </div>
      <div className="border-r-1 border border-neutral-500 h-[500px]"></div>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-800 h-auto ml-4 min-w-[500px] flex flex-col gap-5 items-center justify-center p-5 rounded-sm"
      >
        <div className="w-[80%]">
          <div>Your name</div>
          <input
            type="text"
            className="w-full bg-neutral-700 mt-2 px-3 py-2 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            placeholder="name"
            id="name"
          />
        </div>
        <div className="w-[80%]">
          <div>Your email</div>
          <input
            type="email"
            className="w-full bg-neutral-700 mt-2 px-3 py-2 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            placeholder="email@gmail.com"
            id="email"
          />
        </div>
        <div className="w-[80%]">
          <div>Subject</div>
          <input
            type="text"
            className="w-full bg-neutral-700 mt-2 px-3 py-2 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            placeholder="subject"
            id="subject"
          />
        </div>
        <div className="w-[80%]">
          <div>Your message</div>
          <textarea
            className="w-full bg-neutral-700 mt-2 px-3 py-2 text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 resize-y"
            placeholder="Write your message here..."
            rows="4"
            id="message"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="flex justify-center items-center bg-red-500
            w-32 h-10 font-bold text-lg shadow-lg cursor-pointer hover:bg-red-600 rounded-md"
            style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;

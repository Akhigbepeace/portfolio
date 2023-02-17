import React, { SyntheticEvent } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_xcdh06h",
        "template_f176uib",
        "#form-current",
        "bWC6DL0JnRjxpLUNf"
      );
      alert(`${result.text}: Form Submitted Successfully`);
    } catch (err: any) {
      console.log(err.text);
    }

    (e.target as HTMLFormElement).reset();
  };

  return (
    <div
      id="contact"
      className="w-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        id="form-current"
        className="flex pt-[90px] flex-col max-w-[600px] w-full"
        onSubmit={sendEmail}
      >
        <div className="pb-8 flex flex-col items-center justify-center ">
          <p className="text-4xl capitalize font-bold inline border-b-4 border-pink-600 text-gray-300">
            How to reach me
          </p>

          <p className="text-gray-300 py-4 text-center ">
            <span className="block">
              Submit the form below or shoot me an email
            </span>
            <span>akhigbepeace2005@gmail.com</span>
          </p>
        </div>

        <input
          required
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />

        <input
          required
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />

        <textarea
          required
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={10}
          placeholder="Message"
        />

        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

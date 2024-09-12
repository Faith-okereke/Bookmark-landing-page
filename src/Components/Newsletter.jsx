import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const validateEmail = () => {
    const emaiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emaiRegex.test(email) && email !== "";
    return isValid;
  };
  const subscribeNews = (e) => {
    e.preventDefault();
    const isValid = validateEmail();
    if (!isValid) {
      setError(true);
      return false;
    } else {
      window.location.reload();
      setError(false)
      console.log(email);
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(false)
  };
  return (
    <div className="bg-softBlue grid place-items-center text-white py-12 text-center px-6 md:px-0">
      <div className="flex flex-col items-center gap-4">
        <h3 className="uppercase text-xs tracking-wider">
          35,000+ already joined
        </h3>
        <h1 className="text-2xl font-bold w-[70%]">
          Stay up-to-date with what we’re doing
        </h1>
        <form
          onSubmit={subscribeNews}
          className="flex md:flex-row flex-col w-full md:w-auto items-start justify-start  gap-2 align-top"
        >
          <div className="flex flex-col justify-start items-start w-full md:w-auto">
            <input
              className={`bg-white p-2 placeholder:text-sm md:w-[250px] w-full text-black ${
                error ? `error rounded-t-lg` : `rounded-lg`
              }`}
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
            />
            {error && (
              <div className="text-white bg-softRed w-full italic font-bold text-xs text-justify pl-2 py-2 rounded-b-lg">
                Whoops make sure it's an email!
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-softRed px-5 py-2 border-2 border-transparent rounded-md text-white text-sm hover:bg-white hover:text-softRed hover:border-softRed w-full md:w-auto"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}

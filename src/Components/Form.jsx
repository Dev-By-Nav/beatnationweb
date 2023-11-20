import React from 'react';
import logo from '../assets/logo2.png'
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm('mleyzewl');
  if (state.succeeded) {
    return (
      <div className='w-full'>
        <img src={logo} alt='' className='h-72 w-auto mx-auto flex items-center justify-center' />
        <p className='text-xl font-medium font-quicksand flex justify-center text-center my-24 text-bn-gold'>
          Thanks for Contacting.<br /> We will get back to you as soon.
        </p>
</div>

    );
  }

  return (
    <div className='my-16'>
      <h1 className=" text-center flex text-2xl font-semibold items-center justify-center font-montserrat mx-4 text-bn-gold">Get In Touch For Bookings/ Enquiries</h1>
      <h2 className=" text-center flex text-lg font-base items-center justify-center mb-8 mt-1 font-raleway mx-4 text-bn-gold">Send us a message to book or for more info.</h2>
      <div className="flex justify-center mx-4">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl font-montserrat">
          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label htmlFor="name" className="block mb-2 text-bn-gold">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-2 border border-bn-gold bg-bn-navy rounded text-bn-gold "
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="email" className="block mb-2 text-bn-gold">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-2 border border-bn-gold bg-bn-navy rounded text-bn-gold"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500"
              />
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label htmlFor="phone" className="block mb-2 text-bn-gold">
                Contact Number
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                className="w-full p-2 border border-bn-gold bg-bn-navy rounded text-bn-gold"
                required
              />
              <ValidationError
                prefix="Contact Number"
                field="phone"
                errors={state.errors}
                className="text-red-500"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="datetime" className="block mb-2 text-bn-gold">
                Date & Time
              </label>
              <input
                id="datetime"
                type="text"
                name="datetime"
                className="w-full p-2 border border-bn-gold bg-bn-navy rounded text-bn-gold"
                required
              />
              <ValidationError
                prefix="Date & Time"
                field="datetime"
                errors={state.errors}
                className="text-red-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="eventType" className="block mb-2 text-bn-gold">
              Event Type
            </label>
            <input
              id="eventType"
              type="text"
              name="eventType"
              className="w-full p-2 border border-bn-gold bg-bn-navy rounded text-bn-gold"
              required
            />
            <ValidationError
              prefix="Event Type"
              field="eventType"
              errors={state.errors}
              className="text-red-500"
            />
          </div>

          {/* Text box for extra information */}
          <div className="mb-4">
            <label htmlFor="extraTextBox" className="block mb-2 text-bn-gold">
              Extra Information
            </label>
            <textarea
              id="extraTextBox"
              name="extraTextBox"
              className="w-full p-2 border border-bn-gold bg-bn-navy rounded text-bn-gold"
              rows="2"
               // Add the 'required' attribute if needed
            />
            <ValidationError
              prefix="Extra Information"
              field="extraTextBox"
              errors={state.errors}
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="hover:scale-105 bg-bn-gold text-bn-navy font-semibold font-montserrat py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;

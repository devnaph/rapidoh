import { useState } from "react";

const Form = () => {

  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Selected Service:", selectedService);
  };

  return (
    <form className="flex flex-col gap-4 ">
      
      <input type="text" className="input" placeholder="Full name" required />
      <input type="text" className="input" placeholder="Email address" required />
      <input type="text" className="input" placeholder="Phone number" required />
      {/*<select
        id="service"
        value={selectedService}
        onChange={handleServiceChange}
        className="mt-1 block w-full py-2 px-3 border  input rounded-lg shadow-sm focus:outline-none focus:ring-accent-100 focus:border-accent-100 sm:text-sm"
        required
      >
        <option value="">-- Select a Service --</option>
        <option value="hair-styling">Hair Styling</option>
        <option value="haircuts">Haircuts</option>
        <option value="makeup">Makeup</option>
        <option value="nail-service">Nail Service</option>
        <option value="massage-therapy">Massage Therapy</option>
      </select> */}
       
      {/* 
      <input
        type="datetime-local"
        className="input mt-1 block w-full py-2 px-3 border input bg-white rounded-md shadow-sm  sm:text-sm"
        required
      />
      */}
      
      
      
      <textarea
        type="text"
        className="textarea mb-2 p-2 border hover:border-[#F19687] border-[#F19687] rounded-md resize-vertical min-h-[100px]"
        placeholder="Your message"
      />
      <button type="submit" className="btn self-start">
        Send message
      </button>
    </form>
  );
}

export default Form

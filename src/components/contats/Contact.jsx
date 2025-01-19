import React, { useState } from 'react';
import Img from "../../images/contactImage.jpg";
import Email from "../../images/email.png";  // Email image
import Location from "../../images/your-location.png";  // Location image
import Phone from "../../images/phone.png";  // Phone image
import axios from "axios";
import confetti from "canvas-confetti"
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const Navigate = useNavigate();
  const [isLoding , setLoding] = useState(false);
  const [Submit , setSubmit] = useState(false);
  const [Data , setData] = useState({
    firstName: "",
   lastName : "",
   email : "",
   comments : ""
  })
 
  const HandleChange = (event)=>{
    setData({...Data, [event.target.name]:event.target.value});
  }
  const handleSubmit =  async (e)=>{

    e.preventDefault();
    if(!Data.firstName || !Data.lastName || !Data.email || !Data.comments){
      alert("Please fill all the fields");
      return;
    }
    setLoding(true);

    try{
      const response =  await axios.post("https://api.sheetbest.com/sheets/722f98d3-5269-42d5-bef5-6561ea87c122",{
        "firstName": Data.firstName,
        "lastName": Data.lastName,
        "email": Data.email,
        "comments": Data.comments
      })
      console.log("the new message " , response.data);
      if(response.data){
        setSubmit(true);
        confetti({
          particleCount: 150,
          spread: 60,
        })
        setLoding(false);
        setData({
          firstName: "",
          lastName: "",
          email: "",
          comments: "",
        });
        setTimeout(()=>{
          Navigate("/")
        },2000)
      }

    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 mt-16">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
      <p className="text-lg text-gray-600 mt-4">
        We'd love to hear from you! Whether it's for inquiries, feedback, or to make a reservation, feel free to reach out.
      </p>
    </div>
  
    {/* Contact Form and Image */}
    <div className="flex flex-col bg-white w-full max-w-[1000px] px-8 md:flex-row items-center justify-center gap-8 rounded-xl">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-6 rounded-lg flex flex-col justify-between h-auto md:h-[450px]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="space-y-6 px-2 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="first-name"
                className="text-sm font-semibold text-gray-700"
              >
                First Name
              </label>
              <input
                id="first-name"
                name="firstName"
                value={Data.firstName}
                onChange={HandleChange}
                type="text"
                className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb8500]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="last-name"
                className="text-sm font-semibold text-gray-700"
              >
                Last Name
              </label>
              <input
                id="last-name"
                name="lastName"
                value={Data.lastName}
                onChange={HandleChange}
                type="text"
                className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb8500]"
              />
            </div>
          </div>
  
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={Data.email}
              name="email"
              onChange={HandleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb8500]"
            />
          </div>
  
          <div className="flex flex-col">
            <label
              htmlFor="comments"
              className="text-sm font-semibold text-gray-700"
            >
              Comments / Questions
            </label>
            <textarea
              id="comments"
              name="comments"
              value={Data.comments}
              onChange={HandleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb8500]"
              rows="4"
            ></textarea>
          </div>
  
          <button
            type="submit"
            disabled={isLoding}
            className="w-full py-3 bg-[#ffb703] text-white font-semibold rounded-lg hover:bg-[#fb8500] transition duration-300"
          >
            {isLoding ? (
              <div className="flex items-center justify-center gap-2">
                <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.4s]"></div>
              </div>
            ) : Submit ? (
              "Success"
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
  
      {/* Restaurant Image */}
      <div className="w-full md:w-1/2 h-[300px] sm:h-[400px]">
        <img
          src={Img}
          alt="Restaurant"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>
  
    {/* Contact Information Section */}
    <div className="w-full max-w-4xl mt-12 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
      <p className="text-lg text-gray-600 mb-8">
        Our restaurant is open daily from 10 AM to 10 PM. Whether you're planning
        a visit or just want to drop us a message, here's how you can reach us:
      </p>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Email Section */}
        <div className="flex flex-col items-center p-6 bg-indigo-100 rounded-lg shadow-md hover:bg-indigo-200 transition duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Email</h3>
          <div className="flex items-center space-x-4 mb-4">
            <img src={Email} alt="Email" className="w-8 h-8 text-indigo-600" />
            <span className="text-lg text-gray-700">info@saladuxe.com</span>
          </div>
          <button className="py-2 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300">
            Send Message
          </button>
        </div>
  
        {/* Phone Section */}
        <div className="flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-md hover:bg-green-200 transition duration-300">
          <h3 className="text-xl font-semibold text-green-600 mb-4">Phone</h3>
          <div className="flex items-center space-x-4 mb-4">
            <img src={Phone} alt="Phone" className="w-8 h-8 text-green-600" />
            <span className="text-lg text-gray-700">(123) 456-7890</span>
          </div>
          <button className="py-2 px-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
            Call Us
          </button>
        </div>
  
        {/* Location Section */}
        <div className="flex flex-col items-center p-6 bg-yellow-100 rounded-lg shadow-md hover:bg-yellow-200 transition duration-300">
          <h3 className="text-xl font-semibold text-yellow-600 mb-4">
            Location
          </h3>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={Location}
              alt="Location"
              className="w-8 h-8 text-yellow-600"
            />
            <span className="text-lg text-gray-700">123 Green St, Salad Town</span>
          </div>
          <button className="py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Contact;

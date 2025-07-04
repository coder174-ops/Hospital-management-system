import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { doctors } from "../assets/assets";

const MyAppointment = () => {
  const {doctors} = useContext(AppContext);

  return (
    <div>
      <p className="pb-3 mt-12 text-lg font-medium text-zinc-700 border-b">
        My appointments
      </p>
      <div>
        {doctors.slice(0,2).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
          >
            <div>
              <img
                className="w-32 bg-indigo-50"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 text-base font-semibold">
                {item.name}
              </p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="">{item.address.line1}</p>
              <p className="">{item.address.line2}</p>
              <p className=" mt-1">
                <span className="text-sm text-zinc-500 font-medium">
                  Date & Time:
                </span>{" "}
      
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end text-sm text-center">
    
                  <button
                    onClick={() => setPayment(item._id)}
                    className="text-stone-500 text-sm text-center sm:min-w-48 py-2 border rounded hover:bg-[#5f6FFF] hover:text-white transition-all duration-300"
                  >
                    Pay Online
                  </button>
                
              {!item.cancelled && item.payment && !item.isCompleted && (
                <button className="sm:min-w-48 py-2 border rounded text-[#696969]  bg-[#EAEFFF]">
                  Paid
                </button>
              )}

              {item.isCompleted && (
                <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500">
                  Completed
                </button>
              )}

              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="text-stone-500 text-sm text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  Cancel appointment
                </button>
              )}
              {item.cancelled && !item.isCompleted && (
                <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">
                  Appointment cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;


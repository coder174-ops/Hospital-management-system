import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="p-4 sm:px-6">
      <p className="text-lg font-semibold text-zinc-700 mb-4">
        All Appointments
      </p>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        {/* Table header */}
        <div className="grid grid-cols-7 sm:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] text-xs sm:text-sm font-medium text-zinc-600 border-b bg-zinc-50">
          <p className="p-3 text-center">#</p>
          <p className="p-3 text-center">Patient</p>
          <p className="p-3 text-center">Payment</p>
          <p className="p-3 text-center">Age</p>
          {/* <p className="p-3 text-center">Date & Time</p> */}
          <p className="p-3 text-center">Fees</p>
          <p className="p-3 text-center">Action</p>
        </div>

        {/* Appointments */}
        {appointments.length > 0 ? (
          appointments.reverse().map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-7 sm:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] items-center text-xs sm:text-sm text-zinc-700 border-b hover:bg-indigo-50 transition"
            >
              <p className="p-3 text-center">{index + 1}</p>

              <div className="flex items-center gap-2 p-3 justify-center min-w-[140px]">
                <img
                  src={item.userData.image}
                  alt={item.userData.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="truncate max-w-[80px] text-center">
                  {item.userData.name}
                </p>
              </div>

              <div className="p-3 flex justify-center">
                <p
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    item.payment
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.payment ? "Online" : "Cash"}
                </p>
              </div>

              <p className="p-3 text-center">
                {calculateAge(item.userData.dob)}
              </p>
              {/* 
              <p className="p-3 text-center">
                {item.docData ? `${slotDateFormat(item.slots_booked)} ${item.slotTime || ""}` : "-"}
              </p> */}

              <p className="p-3 text-center">
                {currency}
                {item.amount}
              </p>
              {item.cancelled ? (
                <p className="text-red-500 text-xs font-medium">Cancelled</p>
              ) : item.isCompleted ? (
                <p className="text-green-500 text-xs font-medium">Completed</p>
              ) : (
                <div className="flex justify-center gap-2 p-3">
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    src={assets.cancel_icon}
                    alt="Cancel"
                    className="w-5 h-5 cursor-pointer"
                  />

                  <img
                    onClick={() => completeAppointment(item._id)}
                    src={assets.tick_icon}
                    alt="Confirm"
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-zinc-500">
            No appointments found.
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointments;

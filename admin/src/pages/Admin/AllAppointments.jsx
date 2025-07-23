import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments,cancelAppointment } = useContext(AdminContext);
  const {calculateAge, slotDateFormat,currency} = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments </p>
      <div className="bg-white border text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
      <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 border-b bg-gray-50">
  <p className="text-sm  font-semibold text-gray-800">#</p>
  <p className="text-sm  font-semibold text-gray-800">Doctor</p>
  <p className="text-sm font-semibold text-gray-800">Age</p>
  <p className="text-sm font-semibold text-gray-800">Date & Time</p>
  <p className="text-sm font-semibold text-gray-800">Patient</p>
  <p className="text-sm font-semibold text-gray-800">Fees</p>
  <p className="text-sm font-semibold text-gray-800">Actions</p>
</div>

{appointments.map((item, index) => (
  <div
    key={index}
    className="grid grid-cols-1 sm:grid-cols-[0.3fr_2.5fr_1fr_2.5fr_2.5fr_1fr_1fr] items-center gap-3 sm:gap-5 px-4 sm:px-6 py-3 border-b hover:bg-indigo-50 transition text-sm"
  >
    {/* Index */}
    <p className="font-medium text-zinc-700">{index + 1}</p>

    {/* Patient Profile */}
    <div className="flex items-center gap-3">
      <img
        src={item.userData?.image || "https://via.placeholder.com/40x40?text=No+Image"}
        alt={item.userData?.name || "User"}
        className="w-10 h-10 rounded-full object-cover border"
      />
      <p className="text-zinc-700">{item.userData?.name || "N/A"}</p>
    </div>

    {/* Age */}
    <p className="text-zinc-600">{calculateAge(item.userData?.dob) || "N/A"}</p>

    {/* Date & Time */}
    <p className="text-zinc-600">
      {slotDateFormat(item.slotDate)} | {item.slotTime}
    </p>

    {/* Doctor Profile */}
    <div className="flex items-center gap-3">
      <img
        src={item.docData?.image || "https://via.placeholder.com/40x40?text=No+Image"}
        alt={item.docData?.name || "Doctor"}
        className="w-10 h-10 rounded-full object-cover border"
      />
      <p className="text-zinc-700">{item.docData?.name || "N/A"}</p>
    </div>

    {/* Amount */}
    <p className="text-zinc-700 font-medium">{currency}{item.amount || "0"}</p>

    {/* Cancel Button */}
    {
      item.cancelled
      ?<p className="text-red-400 text-xs font-medium">Cancelled</p>
      :<img onClick={()=>cancelAppointment(item._id)} src={assets.cancel_icon} alt="" />
    }
     
  </div>
))}


      </div>
    </div>
  );
};

export default AllAppointments;

import React from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { useContext } from "react";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const { dToken, dashData, setDashData, getDashData, completeAppointment, cancelAppointment } =
    useContext(DoctorContext);

  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={assets.earning_icon}
              alt="doctor"
              className="w-14 h-14 mr-4"
            />
            <div>
              <p className="text-2xl font-semibold">
                {currency} {dashData.earnings}
              </p>
              <p className="text-gray-500">Earnings</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={assets.appointment_icon}
              alt="appointment"
              className="w-14 h-14 mr-4"
            />
            <div>
              <p className="text-2xl font-semibold">{dashData.appointments}</p>
              <p className="text-gray-500">Appointments</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={assets.patients_icon}
              alt="patient"
              className="w-14 h-14 mr-4"
            />
            <div>
              <p className="text-2xl font-semibold">{dashData.patients}</p>
              <p className="text-gray-500">Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold">Latest Bookings</p>
          </div>
          <div className="pt-4 border border-t-0">
            {dashData.latestAppointments.map((item, index) => (
              <div
                className="flex items-center gap-4 px-6 py-3 border-gray-100"
                key={index}
              >
                <img
                  className="rounded-full w-10"
                  src={item.userData.image}
                  alt=""
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 font-medium">
                    {item.userData.name}
                  </p>
                  <p className="text-gray-500">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>

                {item.cancelled ? (
                  <p className="text-red-500 text-xs font-medium">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-500 text-xs font-medium">
                    Completed
                  </p>
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
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;

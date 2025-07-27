import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { dToken, backendUrl, getProfileData,setProfileData, profileData } = useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {

      const  updateData={
        address: profileData.address,
        fees: profileData.fees, 
        available: profileData.available,
      }

      const { data } = await axios.post(backendUrl + "/api/doctor/update-profile", updateData,{headers:{dToken}})

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      }else{
        toast.error(data.message);
      }
      
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md mt-6">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Profile image */}
          <div className="flex-shrink-0">
            <img
              src={profileData.image}
              alt="Doctor"
              className="bg-[#5f6FFF] w-40 h-40 rounded-full object-cover border border-gray-300"
            />
          </div>

          {/* Profile info */}
          <div className="flex-1 space-y-4">
            {/* Name and Speciality */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {profileData.name}
              </h2>
              <p className="text-gray-600 text-sm">
                {profileData.degree} - {profileData.speciality}
              </p>
              <span className="inline-block mt-1 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                {profileData.experience}
              </span>
            </div>

            {/* About Section */}
            <div>
              <p className="font-semibold text-gray-700">About:</p>
              <p className="text-gray-600 text-sm">{profileData.about}</p>
            </div>

            {/* Fees */}
            <div className="text-sm text-gray-700">
              <p>
                <span className="font-semibold">Appointment Fee:</span>{" "}
                {currency}{" "}
                {isEdit ? (
                  <input
                    type="number"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        fees: e.target.value,
                      }))
                    }
                    value={profileData.fees}
                  />
                ) : (
                  profileData.fees
                )}
              </p>
            </div>

            {/* Address */}
            <div className="text-sm text-gray-700">
              <p className="font-semibold">Address:</p>
              <p>
                {isEdit ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                    value={profileData.address?.line1}
                  />
                ) : (
                  profileData.address?.line1
                )}
                <br />
                {isEdit ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                    value={profileData.address?.line2}
                  />
                ) : (
                  profileData.address?.line2
                )}
              </p>
            </div>

            {/* Availability Toggle */}
            <div className="flex items-center gap-2">
              <input
                onChange={() =>
                  isEdit &&
                  setProfileData(prev => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
                checked={profileData.available}
                type="checkbox"
                id="available"
                className="w-4 h-4"
              />
              <label htmlFor="available" className="text-sm text-gray-700">
                Available
              </label>
            </div>

            {/* Edit Button */}

            {isEdit ? (
              <button
                onClick={updateProfile}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;

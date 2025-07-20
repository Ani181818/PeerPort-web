import { useState } from "react";
import FeedCard from "./FeedCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Editprofile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          about,
          photoURL,
        },
        { withCredentials: true }
      );
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      dispatch(addUser(res.data));
    } catch (error) {
      setError(error.response?.data);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-gradient-to-br from-slate-900 to-slate-800 text-white w-96 shadow-2xl border border-slate-700">
            <div className="card-body">
              <h2 className="card-title justify-center text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Update Profile
              </h2>
              <div className=" text-white py-4">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-blue-300 font-semibold">
                    First Name
                  </legend>
                  <input
                    type="text"
                    className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Type here"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-blue-300 font-semibold">
                    Last Name
                  </legend>
                  <input
                    type="text"
                    className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Type here"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-blue-300 font-semibold">
                    Age
                  </legend>
                  <input
                    type="text"
                    className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Type here"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-blue-300 font-semibold">
                    Gender
                  </legend>
                  <input
                    type="text"
                    className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Type here"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-blue-300 font-semibold">
                    Photo
                  </legend>
                  <input
                    type="text"
                    className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Type here"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-blue-300 font-semibold">
                    About
                  </legend>
                  <input
                    type="text"
                    className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Type here"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </fieldset>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="card-actions justify-center">
                <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none text-white font-semibold px-8 py-2 shadow-lg transform hover:scale-105 transition-all duration-200" onClick={saveProfile}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <FeedCard
          user={{ firstName, lastName, age, gender, about, photoURL }}
        />
      </div>

      {/* ✅ Toast Message */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-md shadow-md transition-all duration-300">
          Profile Updated Successfully!
        </div>
      )}
    </>
  );
};

export default Editprofile;

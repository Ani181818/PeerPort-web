import { useState } from "react";
import FeedCard from "./feedCard";
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
          <div className="card bg-black text-neutral-content w-96">
            <div className="card-body">
              <h2 className="card-title justify-center">Update Profile</h2>
              <div className=" text-white py-4">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white  font bold">
                    FirstName
                  </legend>
                  <input
                    type="text"
                    className="input w-full "
                    placeholder="Type here"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white  font bold">
                    Last Name
                  </legend>
                  <input
                    type="text"
                    className="input w-full "
                    placeholder="Type here"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white  font bold">
                    Age
                  </legend>
                  <input
                    type="text"
                    className="input w-full "
                    placeholder="Type here"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white  font bold">
                    Gender
                  </legend>
                  <input
                    type="text"
                    className="input w-full "
                    placeholder="Type here"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white  font bold">
                    Photo
                  </legend>
                  <input
                    type="text"
                    className="input w-full "
                    placeholder="Type here"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white  font bold">
                    About
                  </legend>
                  <input
                    type="text"
                    className="input w-full "
                    placeholder="Type here"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </fieldset>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={saveProfile}>
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

      { showToast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Profile Updated Successfully!</span>
        </div>
      </div>}
    </>
  );
};

export default Editprofile;

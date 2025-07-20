import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeFeedData } from "../utils/feedSlice";
import { useDispatch } from "react-redux";

const FeedCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleSendRequests = async (status, userId) => {
    await axios.post(
      BASE_URL + "/request/send/" + status + "/" + userId,
      {},
      { withCredentials: true }
    );

      dispatch(removeFeedData(userId))
  };

  const { _id, firstName, lastName, age, gender, about, skills, photoURL } =
    user;
  return (
    <>
      <div className="card bg-gradient-to-br from-slate-800 to-slate-900 w-96 shadow-2xl border border-slate-700 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
        <figure>
          <img src={photoURL} alt="user" className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {firstName + " " + lastName}
          </h2>
          {age && gender && <p className="text-slate-300 font-medium">{age + ", " + gender}</p>}
          <p className="text-slate-200 leading-relaxed">{about}</p>
          <p className="text-blue-300 font-semibold">{skills}</p>
          <div className="card-actions justify-center my-4">
            <button
              className="btn bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 border-none text-white font-semibold px-6 py-2 shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => handleSendRequests("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-none text-white font-semibold px-6 py-2 shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => handleSendRequests("intrested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedCard;

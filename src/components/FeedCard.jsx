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
      <div className="card bg-base-300 w-96 shadow-sm ">
        <figure>
          <img src={photoURL} alt="user" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + "," + gender}</p>}
          <p>{about}</p>
          <p>{skills}</p>
          <div className="card-actions justify-center my-4">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequests("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
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

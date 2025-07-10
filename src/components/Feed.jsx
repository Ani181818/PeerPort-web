import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedData } from "../utils/feedSlice";
import { BASE_URL } from "../utils/constants";
import FeedCard from "./FeedCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeed = async () => {
    if (feed) return;
    // fetch data from API
    try {
      const user = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeedData(user.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if (feed.length === 0) return <h1>No User Found</h1>;
  return (
    feed && (
      <>
        <div className="flex justify-center my-10">
          <FeedCard user={feed[0]} />
        </div>
      </>
    )
  );
};

export default Feed;




const FeedCard = ({user}) => {
   
   const {firstName,lastName,age,gender,about,skills,photoURL} = user;
  return (
    <>
      <div className="card bg-base-300 w-96 shadow-sm ">
        <figure>
          <img src={photoURL} alt="user" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age+","+gender}</p>}
          <p>{about}</p>
          <p>{skills}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedCard

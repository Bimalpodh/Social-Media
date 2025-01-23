const Feed = () => {
  return (
    // <div className="feed-box">
      <div className="feed_Container">
        {/* ------- */}
        {Array.from({ length: 100 }, (_, i) => (
          <div className="feed_Cart">
            <div className="profile_Cart">
              <div className="profile_icon">
               
              </div>
              <label className="profile_name">bimal_babu_🤍</label>
            </div>
          </div>
        ))}
      </div>
    // </div>
  );
};

export default Feed;

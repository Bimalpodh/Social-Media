const Suggest = () => {
  return (
    <div className="rightbar-container">
      <div className="sug-container">
        <div className="sug-header">
          <h3>People to follow</h3>
          <h4>See all</h4>
        </div>

        <div className="frnd-sug">
          <div className="sug-profile">
            <img
              className="frnd-sug-img"
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmc88PffAo0Dkm8ESzfQZDOlvOpD2NtzKow&s"
            ></img>
            <p>bimal</p>
          </div>
          <button className="follow">Follow</button>
        </div>

        <div className="frnd-sug">
          <div className="sug-profile">
            <img
              className="frnd-sug-img"
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmc88PffAo0Dkm8ESzfQZDOlvOpD2NtzKow&s"
            ></img>
            <p>bimal</p>
          </div>
          <button className="follow">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Suggest;

import Story from "./Story";
import Feed from "./Feed";
import Suggest from "./Suggest";

const Body = () => {
  return (
    <div className="body">
      <div className="Story-box" >
        <div className="story">
          <Story />
          <Feed />
        </div>
          
        
      </div>

      <div className="third-alignment">
        <div className="suggest">
          <Suggest />
        </div>
      </div>
    </div>
  );
};
export default Body;

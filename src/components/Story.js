



const Story = () => {
  return (
    <div className="Story-Container">
        {Array.from({ length: 100 }, (_, i) => (
          <div className="Story-Laypout">
            <div className="story-img"></div>

          </div>
        ))}
    </div>
  );
};

export default Story;

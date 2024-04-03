const OurMissionBlock = () => {
  return (
    <div className="om_block">
      <div className="om_block_left">
        <h1>Our Mission</h1>
        <p
          style={{ textAlign: "justify", marginTop: "30px", fontSize: "20px" }}
        >
          At Englishdom, we believe that the education of the future should be
          accessible, convenient and effective. That is why we are already
          creating innovative educational products and inspiring Ukrainians to
          speak the same language with the world.
        </p>
      </div>
      <img src={"/om-image.jpg"} className="om_block_right" alt="" />
    </div>
  );
};

export default OurMissionBlock;

import Image from "next/image";
import "./style.css";

const OurMissionBlock = () => {
  return (
    <div className="om_block">
      <div className="om_block_left">
        <h1>Our Mission</h1>
        <p style={{ textAlign: "justify", marginTop: "30px", fontSize: "20px"}}>
          At Englishdom, we believe that the education of the future should be
          accessible, convenient and effective. That is why we are already
          creating innovative educational products and inspiring Ukrainians to
          speak the same language with the world.
        </p>
      </div>
      <div className="om_block_right">
        <img src={"/students.png"} className="om_image" alt="" />
      </div>
    </div>
  );
};

export default OurMissionBlock;

import { wuItems } from "../../data";
import "../../styles/why_us.scss";

const WhyUsBlock = () => {
  return (
    <div className="wu_block">
      <h1 className="wu_title">Why us</h1>
      <div className="wu_block_items">
        {wuItems.map((item) => (
          <div className="wu_blocks_wrapper" key={item.id}>
            <div className="block_item_wrapper">
              <div className="wu_title_Wrapper" style={{ background: item.bg }}>
                <h3>{item.title}</h3>
              </div>
              <p className="wu_description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsBlock;

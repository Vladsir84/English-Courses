import { programs } from "@/app/data";

const YourProgram = () => {
  return (
    <div className="program-wrapper">
      {programs.map((item) => (
        <div key={item.id} className="program-item" id="program-item">
          <div className="program-texts-wrapper">
            <p className="program-item-title">{item.title}</p>
            <p className="program-item-subtitle">{item.subtitle}</p>
          </div>
          <div className="program-btn-wrapper">
            <button className="program-btn">Go to the payment</button>
          </div>
          <img src={item.img} alt="" className="program-img" />
        </div>
      ))}
    </div>
  );
};

export default YourProgram;

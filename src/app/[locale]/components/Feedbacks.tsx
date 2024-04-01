import { feedbacks } from "../../data";

const Feedbacks = () => {
  return (
    <>
      <h2 className="feedbacks-title">Отзывы наших студентов</h2>
      <div className="feedbacks-wrapper">
        <div
          style={{ left: -30, transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
          className="fade-borders"
        />
        <div style={{ right: -30 }} className="fade-borders" />
        <div className="feedback-container">
          {feedbacks.map((item) => (
            <div className="feedback-item" key={item.id}>
              <h3>{item.name}</h3>
              <p className="feedback-description">{item.feedback}</p>
            </div>
          ))}

          {feedbacks.map((item) => (
            <div className="feedback-item" key={item.id}>
              <h3>{item.name}</h3>
              <p className="feedback-description">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feedbacks;

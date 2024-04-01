const PaymentBlock = () => {
  return (
    <div className="payment-block-wrapper">
      <img src="teacher.png" alt="" className="payment-img"/>
      <div className="payment-part-wrapper">
        <h1 className="payment-title">Courses for teachers</h1>
        <p className="price">$110</p>
        <button className="price-btn">Buy</button>
        <p className="price-text">
          When paying, it is possible to pay in installments. After payment, you
          will see an invitation to the closed Telegram channel, where all
          videos and materials are posted.
        </p>
        <p className="price-text">
          If you have problems of any kind, contact us on Telegram or Instagram.
          We will gladly consult and provide all the necessary information.
        </p>
      </div>
    </div>
  );
};

export default PaymentBlock;

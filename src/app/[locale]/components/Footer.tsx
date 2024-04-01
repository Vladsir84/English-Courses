import Image from "next/image";
import { footerInfo } from "../../data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer_info_wrapper">
          {/* {footerInfo.map((item) => ( */}
            <p className="footer_info">All rights reserved</p>
          {/* ))} */}
        </div>
        <hr style={{ marginTop: "30px" }} />
        <div className="footer_blocks_wrapper">
          <h3>Vovadron ltd.</h3>
          <div className="icons">
            <Image src={"/facebook.svg"} width={30} height={30} alt="" />
            <Image
              src={"/instagram.svg"}
              width={27}
              height={27}
              style={{ marginTop: "2px" }}
              alt=""
            />
            <Image
              src={"/linkedin.svg"}
              width={27}
              height={27}
              style={{ marginTop: "2px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

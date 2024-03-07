import Image from "next/image";
import styles from "../page.module.css";
import { footerInfo } from "../data";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div style={{ width: "70%", marginTop: "30px" }}>
        <div className={styles.footer_info_wrapper}>
          {footerInfo.map((item) => (
            <p key={item.id}>Information</p>
          ))}
        </div>
        <hr style={{ marginTop: "30px" }} />
        <div className={styles.footer_blocks_wrapper}>
          <h3>Vovadron ltd.</h3>
          <div className={styles.icons}>
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

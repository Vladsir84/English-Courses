import { wuItems } from "../data";
import styles from "../page.module.css";

const WhyUsBlock = () => {
  return (
    <div className={styles.wu_block}>
      <h1>Why us</h1>
      <div className={styles.wu_block_items}>
        {wuItems.map((item) => (
          <div className={styles.wu_blocks_wrapper} key={item.id}>
            <div className={styles.block_item_wrapper}>
              <div className={styles.wu_title_Wrapper} style={{ background: item.bg }}>
                <h3>{item.title}</h3>
              </div>
              <p className={styles.wu_description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsBlock;

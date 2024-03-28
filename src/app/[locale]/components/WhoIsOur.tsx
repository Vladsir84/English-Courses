"use client";
import { useState } from "react";

const WhoIsOur = () => {
  const [menuItem, setMenuItem] = useState("children");

  const menuItems = [
    { id: 1, title: "Lessons For Children", mode: "children" },
    { id: 2, title: "Speaking Lessons", mode: "adults" },
    { id: 3, title: "Preparing for tests", mode: "companies" },
  ];

  return (
    <div style={{ padding: "15px" }}>
      <h1 style={{ marginTop: "15px", color: "#fdb548" }}>
        Should you come to us if:
      </h1>
      <div className="wio_menu">
        {menuItems.map((item) => (
          <p
            key={item.id}
            onClick={() => setMenuItem(item.mode)}
            className="wio_menu_item"
            style={{
              background: menuItem === item.mode ? "#fdb548" : "#ffffff",
              color: menuItem === item.mode ? "#ffffff" : "#000000",
            }}
          >
            {item.title}
          </p>
        ))}
      </div>
      <hr className="divider" />
      <div className="wio_blocks_wrapper">
        {menuItem === "children" && (
          <div className="wio_block">
            <div className="wio_block_item left_block">
              <img src={"/tab_children.png"} alt="" className="wio_image" />
            </div>
            <div className="wio_block_item right_block">
              <h1>For children and teenagers</h1>
              <p style={{ fontSize: "24px", marginTop: "15px" }}>
                Our interactive lessons with game elements are an excellent
                solution for children of all ages to learn English online with
                interest.
              </p>
            </div>
          </div>
        )}
        {menuItem === "adults" && (
          <div className="wio_block">
            <div className="wio_block_item left_block">
              <img src={"/tab_adults.png"} alt="" className="wio_image" />
            </div>
            <div className="wio_block_item right_block">
              <h1>For adults</h1>
              <p style={{ fontSize: "24px", marginTop: "15px" }}>
                Thanks to the personal approach and focus on goals, students
                quickly see progress when taking online English lessons at our
                school.
              </p>
            </div>
          </div>
        )}
        {menuItem === "companies" && (
          <div className="wio_block">
            <div className="wio_block_item left_block">
              <img src={"/tab_companies.png"} alt="" className="wio_image" />
            </div>
            <div className="wio_block_item right_block">
              <h1>For companies</h1>
              <p style={{ fontSize: "24px", marginTop: "15px" }}>
                We develop a personal program for each business separately so
                that learning English online is effective and takes into account
                all the needs of the company.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhoIsOur;

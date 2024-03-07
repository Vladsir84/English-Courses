"use client";
import { useState } from "react";

const WhoIsOur = () => {
  const [menuItem, setMenuItem] = useState("children");

  const menuItems = [
    { id: 1, title: "For children and teenagers", mode: "children" },
    { id: 2, title: "For adults", mode: "adults" },
    { id: 3, title: "For ccompanies", mode: "companies" },
  ];

  return (
    <div style={{ padding: "15px" }}>
      <h1 style={{ marginTop: "15px" }}>
        Who is interested in our online English lessons?
      </h1>
      <div className="wio_menu">
        {menuItems.map((item) => (
          <p
            key={item.id}
            onClick={() => setMenuItem(item.mode)}
            className="wio_menu_item"
          >
            {item.title}
          </p>
        ))}
      </div>
      {menuItem === "children" && (
        <div className="wio_block">
          <div className="wio_block_item">
            <img src={"/tab_children.png"} alt="" className="wio_image" />
          </div>
          <div className="wio_block_item">
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
          <div className="wio_block_item">
            <img src={"/tab_adults.png"} alt="" className="wio_image" />
          </div>
          <div className="wio_block_item">
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
          <div className="wio_block_item">
            <img src={"/tab_companies.png"} alt="" className="wio_image" />
          </div>
          <div className="wio_block_item">
            <h1>For companies</h1>
            <p style={{ fontSize: "24px", marginTop: "15px" }}>
              We develop a personal program for each business separately so that
              learning English online is effective and takes into account all
              the needs of the company.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhoIsOur;

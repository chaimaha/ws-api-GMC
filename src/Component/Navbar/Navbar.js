import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Header */}
      <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand" style={{ display: "flex" }}>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.TYwrsoYNL1MISmHIrBKVRAHaHa&pid=Api&rs=1&c=1&qlt=95&w=105&h=105"
                alt=""
                style={{ width: "33px", height: "33px", margin: "1%" }}
              />
              <a href="#hero">
                <h1 style={{ display: "flex" }}>
                  <span>Co</span>ck <span> ta</span>il
                </h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar" />
              </div>
              <ul>
                <li>
                  <Link to="/" data-after="Home" className="li_bar">
                    Home
                  </Link>
                </li>
                <li>
                  <Link data-after="Service" className="li_bar" to="/cocktails">
                    Cocktails
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Header */}
    </div>
  );
};

export default Navbar;

import React from "react";
import "./index.css";
import { Button, Input } from "reactstrap";
export default function Footer() {
  return (
    <div className="footer_div">
      <div className="section_1">
        <div>
          <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
          </div>
          <p>We Provide Best Budget Segament Shose </p>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
        
        <div className="sub_sec_3">
          <div></div>
          <div className="subscribe">
            <Input placeholder="Enter your email " />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="rights_div">
        © 2024 India - surat All Rights are Reserved
      </div>
    </div>
  );
}

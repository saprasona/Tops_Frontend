import React from "react";
import { MdKeyboardDoubleArrowRight, MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <div className="d-flex justify-content-around p-5 gap-4 footer" >
        <div className="about   text-white w-25 p-3">
          <h4 className="text-danger fw-bold ">About</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab.
          </p>
        </div>
        <div className="service text-white w-25 p-3">
          <h4 className="text-danger fw-bold ">Services</h4>
          <li><MdKeyboardDoubleArrowRight />Plans and Projects</li>
          <li><MdKeyboardDoubleArrowRight />Conceptual Architecture</li>
          <li><MdKeyboardDoubleArrowRight />Apartment Buildings</li>
          <li><MdKeyboardDoubleArrowRight />Skyscrapers Buildings</li>
          <li><MdKeyboardDoubleArrowRight />Restauration Projects</li>
        </div>
        <div className="works text-white w-25 p-3">
          <h4 className="text-danger fw-bold ">Recent Works</h4>
          <li><MdKeyboardDoubleArrowRight />The House</li>
          <li><MdKeyboardDoubleArrowRight />The Star House</li>
          <li><MdKeyboardDoubleArrowRight />Hill Duplex</li>
          <li><MdKeyboardDoubleArrowRight />High Tech Exteriors</li>
        </div>
        <div className="contact text-white w-25 p-3">
          <h4 className="text-danger fw-bold ">Contact Us</h4>
          <li><MdOutlineMarkEmailRead className="me-2 h4 mt-2" />info@example.com</li>
          <li><IoCallOutline className="me-2 h4 mt-2"/>+44-000-888-999</li>
          <li><IoLocationOutline className="me-2 h4 mt-2"/>Sydney, 235 Terry, 10001</li>
        </div>
      </div>
    </div>
  );
}
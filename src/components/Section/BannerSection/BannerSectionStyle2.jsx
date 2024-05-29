import React, { useState } from "react";
import parse from "html-react-parser";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import AppointmentForm from "../../AppointmentForm";
import AppointmentForm1 from "../../AppointmentForm/index1";

export default function BannerSectionStyle2({ bgUrl, title, subTitle }) {
  const [sideNav, setSideNav] = useState(false);
  return (
    <>
      <div className="container">
        <div
          className="cs_banner cs_style_2 cs_radius_25 cs_bg_filed"
          style={{ backgroundImage: `url(${bgUrl})` }}
        >
          <div className="cs_section_heading cs_style_1">
            <h2 className="cs_section_title cs_fs_72 m-0 cs_white_color">
              {parse(title)}
            </h2>
            <div className="cs_height_22" />
            <p className="m-0 cs_white_color cs_fs_20 cs_medium">
              {parse(subTitle)}
            </p>
          </div>
          <div>
            <div className="col-lg-12">
              <button
                className="cs_btn1 cs_style_1"
                onClick={() => setSideNav(!sideNav)}
              >
                <span>Book Now !!</span>
                <i>
                  <img src="/images/icons/arrow_white.svg" alt="Icon" />
                  <img src="/images/icons/arrow_white.svg" alt="Icon" />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Offcanvas
        direction={"end"}
        isOpen={sideNav}
        toggle={setSideNav(!sideNav)}
      >
        <OffcanvasHeader>OffCanvas</OffcanvasHeader>
        <OffcanvasBody>
          TEST
          <AppointmentForm1 />
          <Button onClick={() => setSideNav(!sideNav)}>Close</Button>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

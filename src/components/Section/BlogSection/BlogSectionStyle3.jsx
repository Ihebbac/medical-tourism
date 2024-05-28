import React from "react";
import Post from "../../Post";
import Spacing from "../../Spacing";
import SectionHeading from "../../SectionHeading";
import Slider from "react-slick";

export default function BlogSectionStyle3({ sectionTitle, sectionTitleUp, sectionTitleDown, sectionSubTitle, data }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={"cs_slider_prev cs_center" + (currentSlide === 0 ? " slick-disabled" : "")}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <img src="images/icons/left_arrow_blue.svg" alt="Icon" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={"cs_slider_next cs_center" + (currentSlide === slideCount - 1 ? " slick-disabled" : "")}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <img src="images/icons/right_arrow_blue.svg" alt="Icon" />
    </div>
  );
  const settings = {
    dots: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container mb-5">
      <SectionHeading
        title={sectionTitle}
        titleUp={sectionTitleUp}
        titleDown={sectionTitleDown}
        subTitle={sectionSubTitle}
        center
      />
      <Spacing md="72" lg="50" />
      <div className="row cs_gap_y_24">
        <Slider {...settings} className="cs_gap_20 cs_cs_slider_navigation_1 cs_department_carousel">
          {data?.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <Post {...item} variant="cs_type_1" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

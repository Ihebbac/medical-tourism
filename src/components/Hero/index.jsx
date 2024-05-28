import React from 'react';
import parse from 'html-react-parser';
import VideoModal from '../VideoModal';
import { Link } from 'react-router-dom';

export default function Hero({
  title,
  subTitle,
  bgUrl,
  imgUrl,
  videoBtnText,
  videoUrl,
  infoList,
  btnText,
  btnUrl,
  funfactList
}) {
  return (
    <section className="cs_hero cs_style_1 cs_type_1">
      <div
        className="cs_hero_wrap cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="container">
          <div className="cs_hero_text">
            <h1 className="cs_hero_title cs_fs_94">{parse(title)}</h1>
            <p className="cs_hero_subtitle cs_fs_20 cs_heading_color">
              {parse(subTitle)}
            </p>
            <div className="cs_hero_btn_wrap">
              <VideoModal
                videoUrl={videoUrl}
                videoBtnText={videoBtnText}
                variant="cs_heading_color"
              />
            </div>
          </div>
          <img src={imgUrl} alt="Hero" className="cs_hero_img" />
          <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cs_hero_funfact text-center">
              {funfactList?.map((item, index) => (
                <div className="cs_hero_funfact_col" key={index}>
                  <h3 className="cs_white_color cs_fs_72">{item.number}</h3>
                  <p className="cs_white_color mb-0">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}

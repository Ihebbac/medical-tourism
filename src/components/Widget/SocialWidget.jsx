import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

export default function SocialWidget({ className }) {
  return (
    <div className={className ? `cs_social_links_wrapCustum ${className}` : "cs_social_links_wrap"}>
      <h2>Contact Us</h2>
      <div className="cs_social_links">
        <Link className="icoFB" to="/">
          <Icon icon="fa-brands:facebook-f" />
        </Link>
        <Link className="icoYoutube" to="/">
          <Icon icon="fa-brands:youtube" />
        </Link>
        <Link className="icoWhatsapp" to="/">
          <Icon icon="fa-brands:whatsapp" />
        </Link>
        <Link className="icoTiktok" to="/">
          <Icon icon="fa-brands:tiktok" />
        </Link>
        <Link className="icoInsta" to="/">
          <Icon icon="fa-brands:instagram" />
        </Link>
      </div>
    </div>
  );
}

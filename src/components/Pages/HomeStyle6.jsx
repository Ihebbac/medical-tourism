import React from "react";
import HeroStyle6 from "../Hero/HeroStyle6";
import Section from "../Section";
import AboutSectionStyle3 from "../Section/AboutSection/AboutSectionStyle3";
import DepartmentSectionStyle4 from "../Section/DepartmentSection/DepartmentSectionStyle4";
import TestimonialSectionStyle2 from "../Section/TestimonialSection/TestimonialSectionStyle2";
import WorkingProcess from "../Section/WorkingProcess";
import BannerSectionStyle2 from "../Section/BannerSection/BannerSectionStyle2";
import BlogSectionStyle3 from "../Section/BlogSection/BlogSectionStyle3";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";
import AppointmentSectionStyle2 from "../Section/AppointmentSection/AppointmentSectionStyle2";
import BrandsSectionStyle2 from "../Section/BrandsSection/BrandsSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import DepartmentSection from "../Section/DepartmentSection";
const departmentData = [
  {
    title: "Emergency Department",
    iconUrl: "/images/home_2/department_icon_1.svg",
    href: "/departments/department-details",
  },
  {
    title: "Pediatric Departement",
    iconUrl: "/images/home_2/department_icon_2.svg",
    href: "/departments/department-details",
  },
  {
    title: "Obstetrics and Gynecology Department",
    iconUrl: "/images/home_2/department_icon_3.svg",
    href: "/departments/department-details",
  },
  {
    title: "Cardiology Department",
    iconUrl: "/images/home_2/department_icon_4.svg",
    href: "/departments/department-details",
  },
  {
    title: "Neurology Department",
    iconUrl: "/images/home_2/department_icon_5.svg",
    href: "/departments/department-details",
  },
  {
    title: "Psychiatry Department",
    iconUrl: "/images/home_2/department_icon_6.svg",
    href: "/departments/department-details",
  },
];
const testimonialData = [
  {
    text: "Traveling abroad for my surgery was the best decision I ever made. The medical staff were top-notch, and the care I received was unparalleled. I couldn't be happier with the results!”",
    ratingNumber: "5",
    avatarImgUrl: "/images/7309703.jpg",
    avatarName: "PAULO HUBERT",
    avatarDesignation: "New York, USA",
  },
  {
    text: "I was nervous about undergoing treatment in another country, but the team made me feel comfortable and safe. The entire process was smooth, and I am thrilled with my recovery.”",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/9334175.jpg",
    avatarName: "PAULO HUBERT",
    avatarDesignation: "New York, USA",
  },
  {
    text: "The level of professionalism and attention to detail exceeded my expectations. I felt like I was in very good hands throughout my entire stay. Highly recommend!”",
    ratingNumber: "5",
    avatarImgUrl: "/images/7309703.jpg",
    avatarName: "PAULO HUBERT",
    avatarDesignation: "New York, USA",
  },
  {
    text: "I saved a lot of money without compromising on quality. The medical team was highly experienced, and the post-operative care was outstanding. I’m extremely satisfied!”",
    ratingNumber: "4.5",
    avatarImgUrl: "/images/9334175.jpg",
    avatarName: "Carlos T.",
    avatarDesignation: "São Paulo, Brazil",
  },
];
const workingProcessData = [
  {
    title: "Care Request Submission",
    subTitle:
      "Send your care request",
    iconUrl: "/images/home_2/numero-1 (1).png",
    // number: "01",
  },
  {
    title: "Finding the Best Doctors",
    subTitle:
      "Our assistants are looking for <br /> the best doctors for you",
    iconUrl: "/images/home_2/numero-2.png",
    // number: "02",
  },
  {
    title: "Care Plan Study  <br />and Best Quote",
    subTitle:
      "Care plan study with the best quote <br />",
    iconUrl: "/images/home_2/numero-3.png",
    // number: "03",
  },
  {
    title: "Appointment and Travel <br /> Arrangement",
    subTitle:
      "Appointment scheduling and travel  <br />arrangement",
    iconUrl: "/images/home_2/numero-4.png",
    // number: "04",
  },
  {
    title: "Continuous Assistance Until Return",
    subTitle:
      "Assistance ensured until your return to <br /> <center><b>your country</b></center>",
    iconUrl: "/images/home_2/numero-5.png",
    // number: "05",
  },
];
const blogData = [
  {
    title: "Hopital 1",
    thumbUrl: "images/home_5/Hopital3.jpg",
    date: "Istanbul",
  },
  {
    title: "Hopital 2",
    thumbUrl: "images/home_5/Hopital3.jpg",
    date: "Fethiya",
  },
  {
    title: "Hopital 3",
    thumbUrl: "images/home_5/Hopital3.jpg",
    date: "Istanbul",
  },
  {
    title: "Hopital 4",
    thumbUrl: "images/home_5/Hopital3.jpg",
    date: "Istanbul",
  },
  {
    title: "Hopital 5",
    thumbUrl: "images/home_5/Hopital3.jpg",
    date: "Istanbul",
  },
  {
    title: "Hopital 6",
    thumbUrl: "images/home_5/Hopital3.jpg",
    date: "Istanbul",
  },
];
const faqData = [
  {
    title: "What services does ProHealth offer?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I schedule an appointment with ProHealth?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "Do you accept insurance?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What should I bring to my appointment?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I request a prescription refill?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
];
const brandData = [
  {
    imgUrl: "/images/brand_1.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_2.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_3.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_4.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_5.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_6.png",
    imgAlt: "Brand",
  },
  {
    imgUrl: "/images/brand_7.png",
    imgAlt: "Brand",
  },
];
export default function HomeStyle6() {
  pageTitle("Home V6");
  return (
    <>
      <HeroStyle6
        title="The specialist in medical travel to <span>Turkey</span>"
        subTitle="We are specialists in medical travel to Turkey, offering tailored solutions for quality healthcare and safe, comfortable travels."
        bgUrl="/images/home_5/bghome6.jpg"
        imgUrl="/images/home_2/patents.png"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        // btnText="Pro Health"
        btnUrl="/"
        funfactList={[
          { number: "8+", title: "Years of experience" },
          { number: "97%", title: "Patient satisfaction rating" },
          { number: "2300+", title: "Patients served annually" },
          { number: "10+", title: "Healthcare providers on staff" },
        ]}
      />

      {/* <Section bottomMd={190} bottomLg={145} bottomXl={105}>
        <AboutSectionStyle3
          titleUp="ABOUT US"
          title="ProHealth is a team of experienced medical professional"
          subTitle="Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms."
          imgUrl="/images//home_2/about.jpeg"
        />
      </Section> */}
      {/* <Section bottomMd={190} bottomLg={145} bottomXl={105}>
        <DepartmentSectionStyle4 sectionTitle="For Your Health" sectionTitleUp="OUR DEPARTMENTS" data={departmentData} />
      </Section> */}
      <Section bottomMd={190} bottomLg={145} bottomXl={105}>
        <DepartmentSection sectionTitle="For Your Health" sectionTitleUp="OUR DEPARTMENTS" bgUrl="images/home_1/department_bg.svg" data={departmentData} />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSectionStyle3 sectionTitle="  Hospitals And Clinique" sectionTitleUp="Our" sectionTitleDown="" sectionSubTitle="" data={blogData} />
      </Section>

      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)` }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle2
          sectionTitle="What Our Patients Say <br /> About Us"
          sectionTitleUp="TESTIMONIALS"
          data={testimonialData}
        />
      </Section>

      <Section topMd={185} topLg={140} topXl={100} bottomMd={200} bottomLg={150} bottomXl={110}>
        <WorkingProcess
          sectionTitle="How it Works"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={workingProcessData}
        />
      </Section>
      <Section>
        <BannerSectionStyle2
          bgUrl="/images/home_2/logo_make_11_06_2023_171.jpg"
          title="Don’t Let Your Health Take a <span>Backseat </span>! "
          subTitle="Schedule an appointment with one of our <br />
          experienced medical professionals today!"
        />
      </Section>

      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105} bottomMd={200} bottomLg={150} bottomXl={110}>
        <FaqSectionStyle2 data={faqData} sectionTitle="Usually Asked" sectionTitleUp="What People" />
      </Section>
      {/* End FAQ Section */}
      <Section>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointment_img.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110} bottomMd={200} bottomLg={150} bottomXl={110}>
        <BrandsSectionStyle2 data={brandData} />
      </Section>
    </>
  );
}

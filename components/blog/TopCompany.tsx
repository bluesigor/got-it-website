import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import poster from "../../public/photos/blog/b2b.svg";
import share from "../../public/photos/blog/share.svg";
import face from "../../public/photos/blog/face.svg";
import linkedin from "../../public/photos/blog/link.svg";
import twitter from "../../public/photos/blog/tw.svg";
import copyLink from "../../public/photos/blog/lin.svg";

import { Header } from "../additional/Header";
import { Banner } from "../additional/Banner";
import { Footer } from "../additional/Footer";

export const TopCompany = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="finest">
      <Header />
      <div className="finest__photo pst">
        <Image className="pst__image" src={poster} alt="b2b company" />
      </div>
      <section className="finest__container cont">
        <div className="services__container-category category">
          <Link href="/company/blog/" className="category__link">
            All
          </Link>
        </div>
        <h2 className="goodfirms__container-title headn">
          Got It Agency Named to Clutch 2019 Top Eastern European
        </h2>
        <div className="goodfirms__container-share share">
          <p className="share__info">12 January, 2021 . 2 min read</p>
          <div
            className="share__wrap"
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}>
            <div className="share__wrap-photo">
              <Image src={share} alt="share" />
            </div>
            {visibility && (
              <div className="share__wrap-cross cross">
                <Link
                  target="blank"
                  href="http://www.facebook.com/sharer/sharer.php?u=https://got-it.agency/dedicated-team-services/&title=Dedicated%20Team%20Services"
                  className="cross__box">
                  <Image
                    className="cross__box-icon"
                    src={face}
                    alt="facebook"
                  />
                  <p className="cross__box-text">Facebook</p>
                </Link>
                <Link
                  target="blank"
                  href="http://www.linkedin.com/shareArticle?mini=true&url=https://got-it.agency/dedicated-team-services/&title=Dedicated%20Team%20Services&source=https://got-it.agency"
                  className="cross__box">
                  <Image
                    className="cross__box-icon"
                    src={linkedin}
                    alt="linkedin"
                  />
                  <p className="cross__box-text">Linkedin</p>
                </Link>
                <Link
                  target="blank"
                  href="https://twitter.com/intent/tweet?url=https://got-it.agency/dedicated-team-services//&text=Dedicated%20Team%20Services"
                  className="cross__box">
                  <Image
                    className="cross__box-icon"
                    src={twitter}
                    alt="twitter"
                  />
                  <p className="cross__box-text">Twitter</p>
                </Link>
                <Link
                  onClick={(event) => {
                    event.preventDefault();
                    navigator.clipboard.writeText(window.location.href);
                  }}
                  href={window.location.href}
                  className="cross__box">
                  <Image
                    className="cross__box-icon"
                    src={copyLink}
                    alt="copy link"
                  />
                  <p className="cross__box-text">Copy link</p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="finest__content">
          <p className="finest__content-text">
            Got It Agency is proud to announce that we have been recognized as a
            top company in Ukraine by Clutch, a leading ratings and reviews
            platform.
          </p>
          <p className="finest__content-text">
            <em>
              &quot;We are a young company and honestly didn`t expect to receive
              this award. We are very surprised; it`s fantastic!” said Got It
              Agency`s CEO. “We strive to deliver the best possible results to
              our clients, and this award proves that approach works. We are
              honoured to receive this award. However, we know it`s not just our
              award, but also our clients` award. We are convinced that сlient
              feedback is the most important metric for success, and we will
              continue to use it to improve our services.&quot;
            </em>
          </p>
          <p className="finest__content-text">
            The Got It Agency Team is always seeking out new ways to improve and
            provide the best possible
            <span>&nbsp;</span>
            <Link href="">web design</Link> , UI/UX design, and web development
            services to our clients. We would like to thank our clients who have
            left reviews and contributed to growing our company.
          </p>
          <p className="finest__content-text">
            Clutch is a leading B2B rating and reviews platform that uses client
            interviews to rank and evaluate service providers. Their reviews
            help buyers find the
            <span>&nbsp;</span>
            <Link href="">best designers in Ukraine</Link> to make their
            projects a reality.
          </p>
          <p className="finest__content-text">
            Potential buyers can also
            <span>&nbsp;</span>
            <Link href="">view The Manifest`s research</Link> to find more
            information on service providers. Clutch`s sister site serves as an
            information hub for new entrants into the space. Our work is also
            highlighted at Visual Objects, a site where companies can post work
            portfolios.
          </p>
          <div className="finest__content-rating">
            <Image
              src={require("../../public/photos/blog/clutch.jpg")}
              alt="clutch rating"
            />
          </div>
          <p className="finest__content-text">
            Potential customers can
            <Link href="">look at Visual Objects` list</Link> of top Ukrainian
            web designers and find our portfolio. If you want to start a
            project, make sure to <Link href="">contact us</Link> today!
          </p>
        </div>
      </section>
      <Banner />
      <Footer />
    </div>
  );
};

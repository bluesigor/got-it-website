import React from "react";
import Link from "next/link";
import Image from "next/image";

import behance from "../../public/photos/footer/behance.svg";
import linkedin from "../../public/photos/footer/linkedin.svg";
import facebook from "../../public/photos/footer/facebook.svg";
import twitter from "../../public/photos/footer/twitter.svg";
import clutch from "../../public/photos/footer/clutch.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-logo logo">
          <Link href="/" className="logo__reload">
            <Image
              className="logo__reload-img"
              src={require("../../public/photos/home/logo.png")}
              alt="logo gotIt"
            />
          </Link>
          <div className="footer__container-clutch clutch clutch-tablet">
            <div className="clutch__icons">
              <Link
                href="https://www.behance.net/gotitagency"
                className="clutch__icons-item">
                <Image src={behance} alt="behance icon" />
              </Link>
              <Link
                href="https://www.facebook.com/gotitagency"
                className="clutch__icons-item">
                <Image src={facebook} alt="facebook icon" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/got-it-agency/"
                className="clutch__icons-item">
                <Image src={linkedin} alt="linkedin icon" />
              </Link>
              <Link
                href="https://twitter.com/AgencyGot"
                className="clutch__icons-item">
                <Image src={twitter} alt="clutch icon" />
              </Link>
              <Link
                href="https://clutch.co/profile/got-it-agency#summary"
                className="clutch__icons-item">
                <Image src={clutch} alt="clutch icon" />
              </Link>
            </div>
            <div className="clutch__response">
              <iframe
                className="clutch__response-own"
                id="iframe-0.2920422332486563"
                width="100%"
                src="https://widget.clutch.co/widgets/get/2?ref_domain=got-it.agency&amp;uid=979763&amp;ref_path=/contact-us/"
                height="50px"
                title="Got It Agency Clutch Review Widget 2"></iframe>
            </div>
          </div>
        </div>
        <div className="footer__container-list ls">
          <ul className="ls__mobile">
            <li className="ls__mobile-item">
              <Link href="/about-us/">About us</Link>
            </li>
            <li className="ls__mobile-item">
              <Link href="/portfolio/">Portfolio</Link>
            </li>
            <li className="ls__mobile-item">
              <Link href="/contact-us/">Contact us</Link>
            </li>
          </ul>
          <div className="ls__content content">
            <ul className="content__services">
              <li className="content__services-link link">
                <Link href="#" className="link__gen">
                  Services
                </Link>
              </li>
              <li className="content__services-link link">
                <Link href="/services/ui-ux-design/" className="link__go">
                  UI/UX Design
                </Link>
              </li>
              <li className="content__services-link link">
                <Link href="/services/web-development/" className="link__go">
                  Web Development
                </Link>
              </li>
              <li className="content__services-link link">
                <Link href="/services/mobile-development/" className="link__go">
                  Mobile Development
                </Link>
              </li>
              <li className="content__services-link link">
                <Link
                  href="/services/dedicated-team-services/"
                  className="link__go">
                  Dedicated Team Services
                </Link>
              </li>
            </ul>
            <ul className="content__portfolio">
              <li className="content__portfolio-link link">
                <Link href="#" className="link__gen">
                  Portfolio
                </Link>
              </li>
              <li className="content__portfolio-link link">
                <Link href="/services/ui-ux-design/" className="link__go">
                  Holy Perogy
                </Link>
              </li>
              <li className="content__portfolio-link link">
                <Link href="/services/web-development/" className="link__go">
                  Miia
                </Link>
              </li>
              <li className="content__portfolio-link link">
                <Link href="/services/mobile-development/" className="link__go">
                  Reno
                </Link>
              </li>
              <li className="content__portfolio-link link">
                <Link
                  href="/services/dedicated-team-services/"
                  className="link__go">
                  Clinics
                </Link>
              </li>
            </ul>
            <ul className="content__contacts">
              <li className="content__contacts-link link ">
                <Link href="/contact-us/" className="link__gen">
                  Contact us
                </Link>
              </li>
              <li className="content__contacts-link link">
                <Link href="tel:0639640354" className="link__go">
                  +380639640354
                </Link>
              </li>
              <li className="content__contacts-link link">
                <Link
                  href="mailto:info@got-it.agency"
                  className="link__go link__mail">
                  info@got-it.agency
                </Link>
              </li>
              <li className="content__contacts-link link">
                <Link
                  href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB.+%D0%9A%D1%83%D0%BB%D1%8C%D0%BF%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0,+230,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8028733,23.9801595,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7a632c78ad5:0x15de5d2318d0f40c!8m2!3d49.8028733!4d23.9801595"
                  target="blank"
                  className="link__go">
                  Kulparviska street, 230,
                  <span className="link__go-adress">Lviv, 79000, Ukraine</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__container-clutch clutch clutch-desktop">
          <div className="clutch__icons">
            <Link
              href="https://www.behance.net/gotitagency"
              className="clutch__icons-item">
              <Image src={behance} alt="behance icon" />
            </Link>
            <Link
              href="https://www.facebook.com/gotitagency"
              className="clutch__icons-item">
              <Image src={facebook} alt="facebook icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/got-it-agency/"
              className="clutch__icons-item">
              <Image src={linkedin} alt="linkedin icon" />
            </Link>
            <Link
              href="https://twitter.com/AgencyGot"
              className="clutch__icons-item">
              <Image src={twitter} alt="clutch icon" />
            </Link>
            <Link
              href="https://clutch.co/profile/got-it-agency#summary"
              className="clutch__icons-item">
              <Image src={clutch} alt="clutch icon" />
            </Link>
          </div>
          <div className="clutch__response ">
            <iframe
              className="clutch__response-own"
              id="iframe-0.2920422332486563"
              width="100%"
              src="https://widget.clutch.co/widgets/get/2?ref_domain=got-it.agency&amp;uid=979763&amp;ref_path=/contact-us/"
              height="50px"
              title="Got It Agency Clutch Review Widget 2"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

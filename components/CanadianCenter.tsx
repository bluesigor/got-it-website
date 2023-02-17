import { AnimationOnScroll } from "react-animation-on-scroll";

import Image from "next/image";
import Link from "next/link";

import canadian_center_logo from "../public/photos/canadian-center/canadian_center-logo.svg";
import vertical_side_line from "../public/photos/canadian-center/vertical-side-line.svg";
import horizontal_line from "../public/photos/canadian-center/horizontal-line.svg";
import trust_logo from "../public/photos/canadian-center/trust-logo.svg";
import trust_values from "../public/photos/canadian-center/trust-values.svg";
import mask_wrapper from "../public/photos/canadian-center/mask-wrapper.svg";
import treatment_main from "../public/photos/canadian-center/treatment-main.svg";
import treatment_bckg from "../public/photos/canadian-center/treatment-bckg.svg";
import life_bckg from "../public/photos/canadian-center/life-bckg.svg";
import toronto_bckg from "../public/photos/canadian-center/toronto-bckg.svg";
import toronto_main from "../public/photos/canadian-center/toronto-main.svg";
import effective_bckg from "../public/photos/canadian-center/effective-bckg.svg";
import effective_main from "../public/photos/canadian-center/effective-main.svg";
import formula_bckg from "../public/photos/canadian-center/formula-bckg.svg";
import formula_main from "../public/photos/canadian-center/formula-main.svg";
import care from "../public/photos/canadian-center/care.svg";
import amenities from "../public/photos/canadian-center/amenities.svg";
import general_bckg from "../public/photos/canadian-center/general-bckg.svg";
import wrapper_bckg from "../public/photos/canadian-center/wrapper-second.svg";
import recovery from "../public/photos/canadian-center/recovery.svg";
import patients from "../public/photos/canadian-center/patients.svg";
import help from "../public/photos/canadian-center/help.svg";
import search_wrapper from "../public/photos/canadian-center/search-wrapper.svg";
import news_block from "../public/photos/canadian-center/news-block.svg";
import unskool from "../public/photos/canadian-center/unskool.svg";
import catering from "../public/photos/canadian-center/catering.svg";
import reno from "../public/photos/canadian-center/reno.svg";
import newme from "../public/photos/canadian-center/newme.svg";
import miia from "../public/photos/canadian-center/miia.svg";

export const CanadianCenter = () => {
  return (
    <div className="canadian-center">
      <main className="canadian-center-main-layout">
        <nav className="canadian-center-main-layout-nav">
          <Image
            src={canadian_center_logo}
            alt=""
            className="canadian-center-main-layout-nav-logo"
          />
          <ul className="canadian-center-main-layout-nav__list-nav list-nav">
            <li className="list-nav__item">
              Year: <br />
              <span className="list-nav__item-main">October 2020</span>
              <Image
                className="vertical-line-first"
                src={vertical_side_line}
                alt="vertical_side_line"
              />
            </li>

            <li className="list-nav__item">
              Role: <br />
              <span className="list-nav__item-main">UX/UI Designe</span>
              <Image
                className="vertical-line-second"
                src={vertical_side_line}
                alt="vertical_side_line"
              />
            </li>
            <li className="list-nav__item">
              Platforms: <br />
              <span className="list-nav__item-main">Mobile & Web</span>
            </li>
          </ul>
        </nav>
        <div className="canadian-center-main-layout-title-block">
          <h1 className="canadian-center-main-layout-title-block-txt">
            Canadas premier private facility <br /> for addiction services
          </h1>
        </div>
      </main>
      <section className="canadian-center__treatment-section treatment-section">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <div className="treatment-section-info-block">
            <h2 className="treatment-section-info-block-title">
              National Leader in Addiction Treatment
            </h2>
            <Image
              src={horizontal_line}
              alt="horizontal_line"
              className="line-info-block"
            />
            <span className="treatment-section-info-block-subtitle">
              Our goal will always be simple: to keep our word to our residents
              and help them through every stage of alcohol and drug addiction
              treatment.
              <br />
              <br />
              Our focus on quality care helps us deliver a clear message to
              anyone wanting to overcome addiction in a caring, supportive
              environment. Everything we do and everything we are is a
              reflection of the profound experience we want for those in our
              care.
            </span>
            <Image
              className="mask_wrapper"
              src={mask_wrapper}
              alt="mask_wrapper"
            />
          </div>
        </AnimationOnScroll>
        <div className="treatment-section-logos-block">
          <Image
            className="treatment-section-logos-block-trust"
            src={trust_logo}
            alt="trust-logo"
          />
          <Image
            className="treatment-section-logos-block-values"
            src={trust_values}
            alt="trust_values"
          />
        </div>
      </section>
      <section className="canadian-center__wireframes-canadian wireframes-canadian">
        <h2 className="wireframes-canadian__title">Wireframes</h2>
        <div className="wireframes-canadian__phones-section"></div>
      </section>
      <section className="canadian-center__pallete-section pallete-section">
        <div className="pallete-section-header">
          <h1 className="pallete-section-header__title">Color palette</h1>
          <div className="pallete-section-header__horizontal-line"></div>
        </div>
        <div className="pallete-section-colors">
          <div className="pallete-section-colors-primary">
            <h5 className="pallete-section-colors-primary__name">
              primary colours
            </h5>
            <div className="pallete-section-colors-primary-box">
              <div className="pallete-section-colors-primary-box__item">
                <div className="pallete-section-colors-primary-box__item-color-first"></div>
                <div className="pallete-section-colors-primary-box__item-color-first-txt">
                  <span className="pallete-section-colors-primary-box__item-color-first-txt-font">
                    2F2E2E
                  </span>
                  <ul className="pallete-section-colors-primary-box__item-color-first-txt-list">
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      R 47
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      G 46
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      b 46
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-primary-box__item">
                <div className="pallete-section-colors-primary-box__item-color-second"></div>
                <div className="pallete-section-colors-primary-box__item-color-first-txt">
                  <span className="pallete-section-colors-primary-box__item-color-first-txt-font">
                    837165
                  </span>
                  <ul className="pallete-section-colors-primary-box__item-color-first-txt-list">
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      R 131
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      G 113
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      b 101
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-primary-box__item">
                <div className="pallete-section-colors-primary-box__item-color-third"></div>
                <div className="pallete-section-colors-primary-box__item-color-first-txt">
                  <span className="pallete-section-colors-primary-box__item-color-first-txt-font">
                    A89167
                  </span>
                  <ul className="pallete-section-colors-primary-box__item-color-first-txt-list">
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      R 168
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      G 145
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      b 103
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pallete-section-colors-secondary">
            <h5 className="pallete-section-colors-secondary__name">
              secondary colours
            </h5>
            <div className="pallete-section-colors-secondary-block">
              <div className="pallete-section-colors-secondary-block-box-first colour-block">
                <div className="pallete-section-colors-secondary-block-box-first-color"></div>
                <div className="pallete-section-colors-secondary-block-box-first-txt">
                  <span className="rgb-color-title">524B4D</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 82</li>
                    <li className="rgb-colours-list__item">G 75</li>
                    <li className="rgb-colours-list__item">B 77</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-second colour-block">
                <div className="pallete-section-colors-secondary-block-box-second-color"></div>
                <div className="pallete-section-colors-secondary-block-box-second-txt">
                  <span className="rgb-color-title">95867B</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 149</li>
                    <li className="rgb-colours-list__item">G 134</li>
                    <li className="rgb-colours-list__item">B 123</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-third colour-block">
                <div className="pallete-section-colors-secondary-block-box-third-color"></div>
                <div className="pallete-section-colors-secondary-block-box-third-txt">
                  <span className="rgb-color-title">B3A07A</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 179</li>
                    <li className="rgb-colours-list__item">G 160</li>
                    <li className="rgb-colours-list__item">B 122</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-fourth colour-block">
                <div className="pallete-section-colors-secondary-block-box-fourth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-fourth-txt">
                  <span className="rgb-color-title">767072</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 118</li>
                    <li className="rgb-colours-list__item">G 112</li>
                    <li className="rgb-colours-list__item">B 114</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-fifth colour-block">
                <div className="pallete-section-colors-secondary-block-box-fifth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-fifth-txt">
                  <span className="rgb-color-title">B1A59E</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 177</li>
                    <li className="rgb-colours-list__item">G 165</li>
                    <li className="rgb-colours-list__item">B 158</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-sixth colour-block">
                <div className="pallete-section-colors-secondary-block-box-sixth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-sixth-txt">
                  <span className="rgb-color-title">C1B191</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 193</li>
                    <li className="rgb-colours-list__item">G 177</li>
                    <li className="rgb-colours-list__item">B 145</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-seventh colour-block">
                <div className="pallete-section-colors-secondary-block-box-seventh-color"></div>
                <div className="pallete-section-colors-secondary-block-box-seventh-txt">
                  <span className="rgb-color-title">A8A7A7</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 168</li>
                    <li className="rgb-colours-list__item">G 167</li>
                    <li className="rgb-colours-list__item">B 167</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-eighth colour-block">
                <div className="pallete-section-colors-secondary-block-box-eighth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-eighth-txt">
                  <span className="rgb-color-title">D0C9C4</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 208</li>
                    <li className="rgb-colours-list__item">G 201</li>
                    <li className="rgb-colours-list__item">B 196</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-ninth colour-block">
                <div className="pallete-section-colors-secondary-block-box-ninth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-ninth-txt">
                  <span className="rgb-color-title">D0C5AB</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 208</li>
                    <li className="rgb-colours-list__item">G 197</li>
                    <li className="rgb-colours-list__item">B 171</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-tenth colour-block">
                <div className="pallete-section-colors-secondary-block-box-tenth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-tenth-txt">
                  <span className="rgb-color-title">F8F7F6</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 248</li>
                    <li className="rgb-colours-list__item">G 247</li>
                    <li className="rgb-colours-list__item">B 246</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-eleventh colour-block">
                <div className="pallete-section-colors-secondary-block-box-eleventh-color"></div>
                <div className="pallete-section-colors-secondary-block-box-eleventh-txt">
                  <span className="rgb-color-title">F3F1F0</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 243</li>
                    <li className="rgb-colours-list__item">G 241</li>
                    <li className="rgb-colours-list__item">B 240</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-twelfth colour-block">
                <div className="pallete-section-colors-secondary-block-box-twelfth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-twelfth-txt">
                  <span className="rgb-color-title">E4DECC</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 228</li>
                    <li className="rgb-colours-list__item">G 222</li>
                    <li className="rgb-colours-list__item">B 204</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pallete-section-fonts">
          <div className="pallete-section-fonts-header">
            <h1 className="pallete-section-fonts-header__title">Fonts</h1>
            <div className="pallete-section-fonts-header__horizontal-line"></div>
          </div>
          <div className="pallete-section-fonts__example-section example-section">
            <div className="example-section-top">
              <div className="example-section-top-butler">
                <ul className="example-section-top-butler-headers">
                  <li className="example-section-top-butler-headers__item">
                    <span className="example-section-top-butler-headers__item-heading-bold">
                      H1
                    </span>
                    <span className="example-section-top-butler-headers__item-weight-bold">
                      Butler Bold
                    </span>
                  </li>
                  <li className="example-section-top-butler-headers__item">
                    <span className="example-section-top-butler-headers__item-heading-medium">
                      H2
                    </span>
                    <span className="example-section-top-butler-headers__item-weight-medium">
                      Butler Medium
                    </span>
                  </li>
                  <li className="example-section-top-butler-headers__item">
                    <span className="example-section-top-butler-headers__item-heading-small">
                      H3
                    </span>
                    <span className="example-section-top-butler-headers__item-weight-small">
                      Butler Medium
                    </span>
                  </li>
                </ul>
              </div>

              <div className="example-section-top-alphabet">
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__fadeInUp">
                  <h3 className="example-section-top-alphabet__uppercase">
                    abcdefghijklmnopqrstuvwxyz
                  </h3>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateOnce={true}
                  delay={0.2}
                  animateIn="animate__fadeInUp">
                  <span className="example-section-top-alphabet__lowercase">
                    abcdefghijklmnopqrstuvwxyz
                  </span>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="example-section-top">
              <div className="example-section-top-butler">
                <ul className="example-section-top-butler-headers">
                  <li className="example-section-top-butler-headers__item headers-item">
                    <span className="example-section-top-butler-headers__item-heading-bold">
                      H1
                    </span>
                    <span className="example-section-top-butler-headers__item-weight-bold-helvetica">
                      HelveticaNeueCyr Medium
                    </span>
                  </li>
                  <li className="example-section-top-butler-headers__item headers-item">
                    <span className="example-section-top-butler-headers__item-heading-medium">
                      Body1
                    </span>
                    <span className="example-section-top-butler-headers__item-weight-medium-helvetica">
                      HelveticaNeueCyr Medium
                    </span>
                  </li>
                  <li className="example-section-top-butler-headers__item headers-item">
                    <span className="example-section-top-butler-headers__item-heading-small">
                      Body2
                    </span>
                    <span className="example-section-top-butler-headers__item-weight-small-helvetica">
                      HelveticaNeueCyr Light
                    </span>
                  </li>
                </ul>
              </div>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInUp">
                <div className="example-section-top-alphabet-helvetica">
                  <h3 className="example-section-top-alphabet-helvetica__uppercase">
                    abcdefghijklmnopqrstuvwxyz
                  </h3>

                  <span className="example-section-top-alphabet-helvetica__lowercase">
                    abcdefghijklmnopqrstuvwxyz
                  </span>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
      <section className="canadian-center__programs programs">
        <Image
          src={treatment_bckg}
          alt="treatment_bckg"
          className="programs__treatment-bckg"
        />

        <Image
          src={treatment_main}
          alt="treatment_main"
          className="programs__treatment-main"
        />
        <Image
          src={life_bckg}
          alt="life_bckg"
          className="programs__life-bckg"
        />
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <div className="programs-about">
            <h1 className="programs-about__title">Treatment programs</h1>
            <div className="programs-about-line-horizontal" />
            <p className="programs-about__info">
              On this page, we have posted all our treatment programs.The user
              can get acquainted with each program in more detail, having read
              all the nuances of treatment inherent in a particular treatment
              program.
            </p>
          </div>
        </AnimationOnScroll>
        <Image
          src={toronto_bckg}
          alt="toronto_bckg"
          className="programs__toronto-bckg"
        />
        <Image
          src={toronto_main}
          alt="toronto_main"
          className="programs__toronto-main"
        />
        <Image
          src={effective_bckg}
          alt="effective_bckg"
          className="programs__effective-bckg"
        />
        <Image
          src={effective_main}
          alt="effective_main"
          className="programs__effective-main"
        />
        <Image
          src={formula_bckg}
          alt="effective_bckg"
          className="programs__formula-bckg"
        />
        <Image
          src={formula_main}
          alt="effective_main"
          className="programs__formula-main"
        />
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <div className="programs-life">
            <h1 className="programs-life__title">Life at CCFA</h1>
            <div className="programs-life-line-horizontal" />
            <p className="programs-life__info">
              Seeking Inpatient care doesn`t mean turning your life upside down.
              <br />
              <br />
              We tailor your recovery so you can remain connected to your life
              and responsibilities in the world outside so you transition back
              into normal life is as smooth as possible.
            </p>
          </div>
        </AnimationOnScroll>
        <Image src={care} alt="care" className="programs__care" />
        <Image
          src={amenities}
          alt="amenities"
          className="programs__amenities"
        />
        <Image
          src={general_bckg}
          alt="general-bckg"
          className="programs__wrapper-first"
        />
        <Image
          src={wrapper_bckg}
          alt="wrapper_bckg"
          className="programs__wrapper-bckg"
        />
        <Image src={recovery} alt="recovery" className="programs__recovery" />
        <Image src={patients} alt="patients" className="programs__patients" />
      </section>
      <section className="canadian-center__learning-block learning-block">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <div className="learning-block-about">
            <h1 className="learning-block-about__title">Learning center</h1>
            <div className="learning-block-about-line-horizontal" />
            <p className="learning-block-about__info">
              Here the user can read the information on any topic that interests
              him, it is a full-fledged blog, with the ability to search for a
              topic, there is also a search by tags, all this helps to
              facilitate the search for user
            </p>
          </div>
        </AnimationOnScroll>
        <Image src={help} alt="help" className="learning-block__help" />
        <Image
          src={search_wrapper}
          alt="search_wrapper"
          className="learning-block__search-wrapper"
        />
        <Image
          src={news_block}
          alt="news_block"
          className="learning-block__news-block"
        />
      </section>
      <section className="canadian-center__mobile-wireframes-big mobile-wireframes-big">
        <div className="mobile-wireframes-big-about">
          <h1 className="mobile-wireframes-big-about__title">Mobile version</h1>
          <div className="mobile-wireframes-big-about-line-horizontal" />
        </div>
      </section>
      <section className="canadian-center__projects projects">
        <h1 className="projects__title">Check out more projects</h1>
        <ul className="projects__list">
          <li>
            <Link href={"/portfolio/miia"}>
              <Image className="projects__list-logo" src={miia} alt="miia" />
            </Link>
          </li>
          <li>
            <Link href={"/portfolio/clinics"}>
              <Image className="projects__list-logo" src={newme} alt="newme" />
            </Link>
          </li>
          <li>
            <Link href={"/portfolio/reno"}>
              <Image
                className="projects__list-logo reno"
                src={reno}
                alt="reno"
              />
            </Link>
          </li>
          <li>
            <Image
              className="projects__list-logo catering"
              src={catering}
              alt="catering"
            />
          </li>
          <li>
            <Image
              className="projects__list-logo unskool"
              src={unskool}
              alt="unskool"
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

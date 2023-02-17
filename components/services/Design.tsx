import analysis from "../../public/photos/services/ui/analysis.svg";
import design from "../../public/photos/services/ui/design.svg";
import deployment from "../../public/photos/services/ui/deployment.svg";
import implementation_new from "../../public/photos/services/ui/deployment-new.svg";
import uiUX from "../../public/photos/services/ui/mobile-ui.svg";
import web from "../../public/photos/services/ui/web.svg";
import motion from "../../public/photos/services/ui/motion.svg";
import phone_top from "../../public/photos/services/ui/phone-top.svg";
import new_me from "../../public/photos/home/new-me.svg";
import rehab from "../../public/photos/home/rehab.svg";
import theme from "../../public/photos/services/ui/theme.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import { Header } from "../additional/Header";
import Link from "next/link";
import { Banner } from "../additional/Banner";
import { Footer } from "../additional/Footer";

export const Design = () => {
  return (
    <div className="design">
      <Header />
      <section className="introducion">
        <div className="introducion__container">
          <div className="introducion__container-mobi">
            <Image
              src={require("../../public/photos/services/ui/ui-mobi-top.png")}
              alt="mobi icon"
            />
          </div>
          <div className="introducion__container-intro intro">
            <h2 className="intro__title">
              UX design is a still a relatively new field
            </h2>
            <p className="intro__text">
              Our agency follows a human-centered approach to design. This means
              we care about the end customer, and strive to deliver products
              that people truly enjoy using.
            </p>
            <Link href="/contact-us/" className="intro__link">
              GET IN TOUCH
            </Link>
          </div>
          <div className="introducion__container-big">
            <h2>UI/UX Design</h2>
          </div>
          <div className="introducion__container-phone">
            <Image src={phone_top} alt="phone" />
          </div>
          <div className="introducion__container-letter">
            <Image
              src={require("../../public/photos/services/ui/d.png")}
              alt="letter"
            />
          </div>
        </div>
        <div className="introducion__bg">
          <Image
            className="introducion__bg-img"
            src={require("../../public/photos/services/ui/main-bg.png")}
            alt="bg img"
          />
        </div>
      </section>
      <section className="build">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          className="animated">
          <div className="build__desc">
            <h2 className="build__desc-title">
              Our goal is to develop the best design for you
            </h2>
            <div className="build__desc-content">
              <p className="content-simple">
                The goal of user interface design is to make the user`s
                interaction as simple and efficient as possible, in terms of
                accomplishing user goals.
              </p>
              <br></br>
              <p className="content-simple">
                User interface design can dramatically affect the usability and
                user experience of an application. If a user interface design is
                too complex or not adapted to targeted users, the user may not
                be able to find the information or service they are looking for.
                In website design, this can affect conversion rates. The layout
                of a user interface design should also be clearly set out for
                users so that elements can be found in a logical position by the
                user.
              </p>
            </div>
          </div>
        </AnimationOnScroll>
        <div className="build__bg">
          <Image
            className="build__bg-img"
            src={require("../../public/photos/services/ui/web-bg.png")}
            alt="build bg"
          />
        </div>
      </section>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated">
        <section className="presentation">
          <h2 className="presentation__title">
            Design for Mobile and Web production
          </h2>
          <p className="presentation__desc">
            Using these proven design tools, we make sure our clients receive
            the result they expect within the set timeframe.
          </p>
          <div className="presentation__container">
            <div className="presentation__container-poster poster">
              <div className="poster__icon">
                <Image
                  className="poster__icon-item"
                  src={uiUX}
                  alt="UI/UX Design"
                />
              </div>
              <p className="poster__title">Mobile UI/UX</p>
              <p className="poster__txt">
                Create a unique mobile app or a polished website that will work
                like a charm across all platforms and keep the users coming
                back.
              </p>
            </div>
            <div className="presentation__container-poster poster">
              <div className="poster__icon">
                <Image
                  className="poster__icon-item"
                  src={web}
                  alt="web design"
                />
              </div>
              <p className="poster__title">Web Design</p>
              <p className="poster__txt">
                GotIT user experience firm creates the highest-converting
                websites that not only look stunning but also work for your
                business.
              </p>
            </div>
            <div className="presentation__container-poster poster">
              <div className="poster__icon">
                <Image
                  className="poster__icon-item"
                  src={motion}
                  alt="motion design"
                />
              </div>
              <p className="poster__title">Motion design</p>
              <p className="poster__txt">
                Motion, due to it`s complexity can be challenging to deliver,
                but when done well, it has the potential to connect with user
                mental models, and drive product results.
              </p>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
      <section className="design__process process">
        <h2 className="process__title">UI/UX Design process</h2>
        <div className="process__container">
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="animated">
            <div className="process__container-row row">
              <div className="row__box">
                <div className="row__box-icon">
                  <Image src={analysis} alt="analysis" />
                </div>
                <div className="row__box-text text">
                  <p className="text__one">Phase I: </p>
                  <p className="text__two">Analysis</p>
                  <p className="text__three">
                    Conduct extensive field studies to understand how your users
                    think.
                  </p>
                </div>
              </div>
              <div className="row__box">
                <div className="row__box-icon">
                  <Image src={design} alt="design" />
                </div>
                <div className="row__box-text text">
                  <p className="text__one">Phase II: </p>
                  <p className="text__two">Design</p>
                  <p className="text__three">
                    Create a well-polished interface prototype that breathes
                    with the user and a thorough design specification.
                  </p>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="animated">
            <div className="process__container-central central">
              <div className="central__icon">
                <Image className="central__icon-image" src={theme} alt="icon" />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="animated">
            <div className="process__container-row row">
              <div className="row__box">
                <div className="row__box-icon">
                  <Image src={deployment} alt="deployment" />
                </div>
                <div className="row__box-text text">
                  <p className="text__one">Phase III: </p>
                  <p className="text__two">Deployment</p>
                  <p className="text__three">
                    Usability testing lets us measure the final product against
                    our usability goals frome Phase I
                  </p>
                </div>
              </div>
              <div className="row__box">
                <div className="row__box-icon">
                  <Image src={implementation_new} alt="implementation" />
                </div>
                <div className="row__box-text text">
                  <p className="text__one">Phase IV: </p>
                  <p className="text__two">Implementation</p>
                  <p className="text__three">
                    Converting the prototype into a more refined final product.
                  </p>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="process__flow">
          <Image
            className="process__flow-img"
            src={require("../../public/photos/services/ui/process-flow.jpg")}
            alt="right flow bg"
          />
        </div>
      </section>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated">
        <section className="examples">
          <div className="examples__content">
            <div className="examples__content-texting texting">
              <h2 className="texting__title">Amazing projects we built</h2>
              <p className="texting__text">
                We`ve successfully implemented more 50 projects for industries
                like E-Commerce, Health Care, Advertising & marketing,
                Education, E-Learning, and many more.
              </p>
            </div>
            <div className="examples__content-container">
              <div className="row__up">
                <Link href="/portfolio/clinics/" className="row__up-small">
                  <Image src={new_me} alt="NewMe Clinics" />
                  <p>NewMe Clinics</p>
                </Link>
                <Link href="/portfolio/holy-perogy/" className="row__up-big">
                  <Image
                    className="back-desktop"
                    src={rehab}
                    alt="Rehab Perogy"
                  />
                  <p className="back-desktop">Rehab Finder</p>
                  <Image
                    className="back-mobile"
                    src={require("../../public/photos/examples/holy.png")}
                    alt="Holy Perogy"
                  />
                  <p className="back-mobile">Holy Perogy</p>
                </Link>
              </div>
              <div className="row__bottom">
                <Link href="/portfolio/miia/" className="row__bottom-box box">
                  <Image
                    src={require("../../public/photos/examples/miia-shop.jpg")}
                    alt="Miia Shop"
                  />
                  <p className="box__title">Miia Shop</p>
                </Link>
                <button className="row__bottom-more more">
                  <Link href="/portfolio/" className="more__title changing">
                    See more projects
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
      <Banner />
      <Footer />
    </div>
  );
};

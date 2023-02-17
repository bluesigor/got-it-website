import logo from "../public/photos/newme/logo.svg";
import letters from "../public/photos/newme/letters.svg";
import figma from "../public/photos/newme/figma.svg";
import ai from "../public/photos/newme/ai.svg";
import ps from "../public/photos/newme/ps.svg";
import sketch from "../public/photos/newme/sketch.svg";
import Image from "next/image";
import Link from "next/link";

export const NewMe = () => {
  return (
    <div className="newme">
      <header className="newme__upper">
        <div className="newme__upper-strip strip">
          <p className="strip__text">
            Year: <span className="strip__text-bolder">April 2019</span>
          </p>
          <div className="strip__logo">
            <Image className="strip__logo-item" src={logo} alt="logo" />
          </div>
          <ul className="strip__list">
            <li className="strip__list-item">
              <Link href="/services/web-development/">Web</Link>
            </li>
            <li className="strip__list-item">
              <Link href="/services/mobile-development/">Mobile</Link>
            </li>
            <li className="strip__list-item">
              <Link href="/services/ui-ux-design/">UI/UX Design</Link>
            </li>
          </ul>
        </div>
        <div className="newme__upper-poster">
          <Image src={require("../public/photos/newme/spa.png")} alt="poster" />
        </div>
      </header>
      <main className="newme__main">
        <section className="newme__main-overview overview">
          <div className="overview__container">
            <div className="overview__container-detailed detailed">
              <p className="detailed__small">About Project</p>
              <h2 className="detailed__title">Overview</h2>
              <p className="detailed__text">
                New me clinics - This is a clinic that offer a variety of
                esthetic treatments that are performed on innovative devices.
                The clinic believes the skin`s natural ability to regenerate
                without require surgical intervention and significantly improves
                skin appearance. The technologies used by clinic can a make us
                look younger and healthy by several years.{" "}
              </p>
            </div>
            <div className="overview__container-other">
              <Image
                src={require("../public/photos/newme/phone.png")}
                alt="phone"
              />
            </div>
          </div>
        </section>
        <section className="newme__main-wireframes wireframes">
          <p className="wireframes__small">User Experiance</p>
          <p className="wireframes__bigger">Wireframes</p>
          <Image
            className="wireframes__image"
            src={require("../public/photos/newme/wireframes.png")}
            alt="wireframes"
          />
        </section>
        <section className="treatments">
          <div className="treatments__container pre">
            <div className="pre__photo">
              <Image
                src={require("../public/photos/newme/treat-first.png")}
                alt="Treatments"
              />
            </div>
            <div className="pre__desc">
              <p className="pre__desc-small">Treatments</p>
              <p className="pre__desc-title">Body-Treatments</p>
              <p className="pre__desc-text">
                The various body-treatments used at NewMe Clinics can make the
                body perfect. NewMe Clinics offers such services like body
                contouring, cellulite and stretch mark reduction and laser hair
                removal, quickly and easily.
              </p>
            </div>
          </div>
        </section>
        <section className="newme__main-facial facial">
          <div className="facial__container facial_container-pre pre ">
            <div className="pre__desc facial-desc">
              <p className="pre__desc-small">Treatments</p>
              <p className="pre__desc-title">Facial-Treatments</p>
              <p className="pre__desc-text">
                Facial-Treatments have never been so enjoyable with a line of
                beautifying facial treatments and med spa that are non-surgical
                and completely safe.
              </p>
            </div>
            <div className="facial-photo">
              <Image
                src={require("../public/photos/newme/fac-one.png")}
                alt="Facial"
              />
            </div>
          </div>
          <div className="facial__used">
            <div className="facial__used-ingredients ingredients">
              <div className="ingredients__first">
                <div className="ingredients__first-notions notions">
                  <p className="notions__simple">Typeface</p>
                  <h2 className="notions__title">Rufina</h2>
                </div>
                <h2 className="ingredients__first-big">Segoe UI</h2>
                <div className="ingredients__first-letters">
                  <Image src={letters} alt="letters" />
                </div>
                <div className="ingredients__first-notions notions">
                  <p className="notions__simple">Prymary color</p>
                  <h2 className="notions__title">Color palette</h2>
                </div>
                <div className="ingredients__variety variety">
                  <div className="variety__box">
                    <div className="variety__box-rounded rd"></div>
                    <p className="variety__box-hex">#232326</p>
                  </div>
                  <div className="variety__box">
                    <div className="variety__box-rounded rd"></div>
                    <p className="variety__box-hex">#1B5D64</p>
                  </div>
                  <div className="variety__box">
                    <div className="variety__box-rounded rd"></div>
                    <p className="variety__box-hex">#A5C2C6</p>
                  </div>
                  <div className="variety__box">
                    <div className="variety__box-rounded rd"></div>
                    <p className="variety__box-hex">#CADBD8</p>
                  </div>
                  <div className="variety__box">
                    <div className="variety__box-rounded rd"></div>
                    <p className="variety__box-hex">#F7F9F8</p>
                  </div>
                  <div className="variety__box">
                    <div className="variety__box-rounded rd"></div>
                    <p className="variety__box-hex">#FFFFFF</p>
                  </div>
                </div>
              </div>
              <div className="ingredients__icons">
                <div className="ingredients__icons-notions notions">
                  <p className="notions__simple">Icons</p>
                  <h2 className="notions__title">Icon pack</h2>
                </div>
                <div className="ingredients__icons-photo">
                  <Image
                    src={require("../public/photos/newme/icon-pack.png")}
                    alt="icons"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="newme__main-toolkit toolkit">
          <div className="toolkit__container">
            <div className="toolkit__container-mean">
              <p className="toolkit__container-mean-sml">Tools</p>
              <h2 className="toolkit__container-mean-tit">Design toolkit</h2>
            </div>
            <div className="toolkit__container-tools tools">
              <div className="tools__figma">
                <Image className="tools__figm-icon" src={figma} alt="figma" />
              </div>
              <div className="tools__ps">
                <Image className="tools__ps-icon" src={ps} alt="ps" />
              </div>
              <div className="tools__ai">
                <Image className="tools__ai-icon" src={ai} alt="ai" />
              </div>
              <div className="tools__sketch">
                <Image
                  className="tools__sketch-icon"
                  src={sketch}
                  alt="sketch"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="newme__book book">
          <div className="book__container">
            <div className="book__container-other">
              <Image
                src={require("../public/photos/newme/b-photo.png")}
                alt="Book"
              />
            </div>
            <div className="book__container-detailed detailed">
              <p className="detailed__small">About Project</p>
              <h2 className="detailed__title">Booking</h2>
              <p className="detailed__text">
                You can book an appointment at one of the clinics online or by
                phone. Just choose in one of the three American cities and enjoy
                the perfect service.
              </p>
            </div>
          </div>
        </section>
        <section className="newme__main-wireframes wireframes">
          <p className="wireframes__small">Mobile</p>
          <p className="wireframes__bigger">Mobile version</p>
          <p className="wireframes__down">
            Newme Clinics- dolor sit amet, consectetur adipiscing elit. Quam
            nisi in mauris quisque non duis. Est turpis arcu vestibulum viverra
            commodo tincidunt sit tortor eget.{" "}
          </p>
          <Image
            className="wireframes__image"
            src={require("../public/photos/newme/mobimg.png")}
            alt="wireframes"
          />
        </section>
        <section className="newme__screen screen">
          <div className="screen__title">
            <p className="screen__title-small">Screens</p>
            <p className="screen__title-big">Other screens</p>
          </div>
          <div className="screen__container-phbox phbox">
            <div className="phbox__top">
              <div className="phbox__top-image">
                <Image
                  src={require("../public/photos/newme/ls-top.png")}
                  alt="other #1"
                />
              </div>
              <div className="phbox__top-image">
                <Image
                  src={require("../public/photos/newme/rs-top.png")}
                  alt="other #2"
                />
              </div>
            </div>
            <div className="phbox__bottom">
              <div className="phbox__bottom-image">
                <Image
                  src={require("../public/photos/newme/ls-bottom.png")}
                  alt="other #3"
                />
              </div>
              <div className="phbox__bottom-image">
                <Image
                  src={require("../public/photos/newme/rs-bottom.png")}
                  alt="other #4"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="miia__gen-check check">
        <h1 className="check__title clinics-tit">Check out more projects</h1>
        <div className="check__projects">
          <div className="check__projects-inset inset">
            <div className="inset__photo">
              <Image
                className="inset__photo-item"
                src={require("../public/photos/miia/rehab.png")}
                alt="Rehab Finder"
              />
            </div>
            <h3 className="inset__title clinics-tit">Rehab Finder</h3>
            <p className="inset__text">MCQ platform</p>
          </div>
          <div className="check__projects-inset inset">
            <div className="inset__photo-item">
              <Image
                className="inset__photo"
                src={require("../public/photos/miia/reno.png")}
                alt="Reno"
              />
            </div>
            <h3 className="inset__title clinics-tit">Reno</h3>
            <p className="inset__text">Platform for home education</p>
          </div>
          <div className="check__projects-inset inset">
            <div className="inset__photo">
              <Image
                className="inset__photo-item"
                src={require("../public/photos/miia/miia.png")}
                alt="NewMe clinics"
              />
            </div>
            <h3 className="inset__title clinics-tit">Miia</h3>
            <p className="inset__text">E-commerce platform</p>
          </div>
          <div className="check__projects-inset inset">
            <div className="inset__photo">
              <Image
                className="inset__photo-item"
                src={require("../public/photos/miia/ivala.png")}
                alt="Ivala learn"
              />
            </div>
            <h3 className="inset__title clinics-tit">IVALA Learn</h3>
            <p className="inset__text">MCQ platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

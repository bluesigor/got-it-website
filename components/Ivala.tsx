import mouse from "../public/photos/ivala/mouse.svg";
import quizeMouse from "../public/photos/ivala/quiz-mouse.svg";
import dog from "../public/photos/ivala/quiz-dog.svg";
import firstDog from "../public/photos/ivala/dog-one.svg";
import secondDog from "../public/photos/ivala/dog-two.svg";
import sleep from "../public/photos/ivala/sleep.svg";
import primary from "../public/photos/ivala/primary.svg";
import secondary from "../public/photos/ivala/secondary.svg";
import subtitle from "../public/photos/ivala/subtitle.svg";
import body_txt from "../public/photos/ivala/body-txt.svg";
import header_color from "../public/photos/ivala/header-color.svg";
import petOne from "../public/photos/ivala/pet-one.svg";
import petTwo from "../public/photos/ivala/pet-two.svg";
import petThree from "../public/photos/ivala/pet-three.svg";
import petFour from "../public/photos/ivala/pet-four.svg";
import user_interface from "../public/photos/ivala/user-interface.svg";
import user_interface_second from "../public/photos/ivala/user-interface-second.svg";

import catering from "../public/photos/canadian-center/catering.svg";
import reno from "../public/photos/canadian-center/reno.svg";
import newme from "../public/photos/canadian-center/newme.svg";
import miia from "../public/photos/canadian-center/miia.svg";
import Image from "next/image";
import Link from "next/link";

export const Ivala = () => {
  return (
    <div className="ivala">
      <section className="ivala__int int">
        <div className="int__head">
          <div className="int__head-platform platform">
            <div className="platform__content">
              <p className="platform__content-smaller">UX/UI</p>
              <h4 className="platform__content-bigger">
                Landing page and Quiz platform
              </h4>
              <p className="platform__content-smaller">2020</p>
            </div>
            <div className="platform__more">
              <h2 className="platform__more-title">
                Ivala <span>Learn</span>
              </h2>
              <p className="platform__more-txt">
                Ivalalearn is 3D veterinary anatomy
              </p>
              <p className="platform__more-txt">
                High-quality flashcard content
              </p>
              <p className="platform__more-txt">
                Multiple choice questions are written by content-experts
              </p>
              <p className="platform__more-mobtxt">
                Ivalalearn is 3D veterinary anatomy High-quality flashcard
                content Multiple choice questions are written by content-experts
              </p>
              <div className="platform__more-mouse">
                <Image src={mouse} alt="mouse" />
              </div>
            </div>
          </div>
        </div>
        <div className="int__placard placard">
          <div className="placard__photo">
            <Image
              className="placard__photo-item"
              src={require("../public/photos/ivala/placard.png")}
              alt="poster"
            />
            <div className="placard__photo-smooth"></div>
          </div>
        </div>
        <div className="int__ivala-detailed ivala-detailed">
          <div className="ivala-detailed__desc">
            <h2 className="ivala-detailed__desc-title">
              The <span>challenge</span>
            </h2>
            <h2 className="ivala-detailed__desc-mobtitle">The challenge</h2>
            <div className="ivala-detailed__desc-content">
              <p>
                To create a convenient and modern way of training for veterinary
                students, advanced training of practicing physicians, it was
                necessary to provide information as convenient and correct as
                possible for users.
              </p>
            </div>
          </div>
        </div>
        <div className="int__paralaxed"></div>
        <div className="int__landing landing">
          <div className="landing__container">
            <div className="landing__container-abt abt">
              <h2 className="abt__title">About Landing page</h2>
              <p className="abt__text">
                On the site we tried to tell users what will await them in the
                survey platform itself, also here you can find reviews about the
                service itself and much other interesting information for the
                user.
              </p>
            </div>
            <div className="landing__container-ph ph">
              <div className="ph__box">
                <Image
                  className="ph__box-img"
                  src={require("../public/photos/ivala/asked.png")}
                  alt="asked questiond"
                />
                <div className="ph__box-smooth smth"></div>
              </div>
              <div className="ph__box">
                <Image
                  className="ph__box-img"
                  src={require("../public/photos/ivala/mcq.png")}
                  alt="mcq"
                />
                <div className="ph__box-smooth smth"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="int__mob mob">
          <div className="mob__ivala-detailed ivala-detailed">
            <div className="ivala-detailed__desc">
              <h2 className="ivala-detailed__desc-mobtitle mobile-block-exc">
                Mobile version
              </h2>
              <p className="ivala-detailed__desc-content">
                In the mobile version, we tried to display all the information
                as correctly as possible and follow all the canons of mobile
                design.
              </p>
            </div>
          </div>
          <div className="mob-phone__paralaxed"></div>
        </div>
        <div className="pal">
          <h2 className="pal__title">Color palette</h2>
          <div className="pal__box">
            <div className="pal__box-item">
              <Image src={primary} alt="primary" />
            </div>
            <div className="pal__box-item">
              <Image src={secondary} alt="secondary" />
            </div>
            <div className="pal__box-item">
              <Image src={subtitle} alt="subtitle" />
            </div>
            <div className="pal__box-item">
              <Image src={body_txt} alt="body_txt" />
            </div>
            <div className="pal__box-item">
              <Image src={header_color} alt="header_color" />
            </div>
          </div>
        </div>
        <div className="int__typography typography">
          <h2 className="typography__title">Typography</h2>
          <div className="typography__section">
            <div className="typography__section-part part">
              <h3 className="part__big">Header</h3>
              <p className="part__medium">Montserrat/Bold</p>
              <span className="part__small">56 px</span>
            </div>
            <div className="typography__section-part part">
              <h3 className="part__big">Header 2</h3>
              <p className="part__medium">Montserrat/Bold</p>
              <span className="part__small">45 px</span>
            </div>
            <div className="typography__section-part part">
              <h3 className="part__big">Header 3</h3>
              <p className="part__medium">Montserrat/Bold</p>
              <span className="part__small">32 px</span>
            </div>
            <div className="typography__section-part part">
              <h3 className="part__big">Sub Header</h3>
              <p className="part__medium">SF Pro/Medium</p>
              <span className="part__small">22 px</span>
            </div>
            <div className="typography__section-part part">
              <h3 className="part__big">Body</h3>
              <p className="part__medium">SF Pro/Regular</p>
              <span className="part__small">16 px</span>
            </div>
          </div>
        </div>
        <div className="int__flash flash">
          <div className="flash__flashcards">
            <Image
              className="flash__flashcards-img"
              src={require("../public/photos/ivala/flashcards.png")}
              alt="flashcards"
            />
            <div className="flash__flashcards-dog">
              <Image src={dog} alt="dog" />
            </div>
            <div className="flash__flashcards-smooth"></div>
          </div>
        </div>
      </section>
      <section className="quiz">
        <div className="quiz__first">
          <Image
            className="quiz__first-img"
            src={require("../public/photos/ivala/bg-one.png")}
            alt="top bg"
          />
        </div>
        <div className="quiz__second">
          <Image
            className="quiz__second-img"
            src={require("../public/photos/ivala/bg-second.png")}
            alt="top bg"
          />
        </div>
        <div className="quiz__third">
          <Image
            className="quiz__third-img"
            src={require("../public/photos/ivala/bg-third.png")}
            alt="bottom bg"
          />
        </div>
        <div className="quiz__fourth">
          <Image
            className="quiz__fourth-img"
            src={require("../public/photos/ivala/bg-fourth.png")}
            alt="bottom bg"
          />
        </div>
        <div className="quiz__platform">
          <div className="platform__more">
            <h2 className="platform__more-title">QUIZ Platform</h2>
            <p className="platform__more-txt">
              Ivalalearn is 3D veterinary anatomy
            </p>
            <p className="platform__more-txt">High-quality flashcard content</p>
            <p className="platform__more-txt">
              Multiple choice questions are written by content-experts
            </p>
            <p className="platform__more-mobixtxt">
              Ivalalearn is 3D veterinary anatomy. High-quality flashcard
              content. Multiple choice questions are written by content-experts
            </p>
            <div className="platform__more-mouse">
              <Image src={quizeMouse} alt="mouse" />
            </div>
          </div>
        </div>
        <div className="quiz__msqs msqs">
          <div className="msqs__block">
            <div className="msqs__blocks-msq msq">
              <Image
                className="msq__card"
                src={require("../public/photos/ivala/quiz-one.png")}
                alt="card"
              />
              <div className="msq__sleep sl">
                <Image
                  className="msq__sleep-img"
                  src={sleep}
                  alt="sleeping symbol"
                />
              </div>
              <div className="msq__dog dg">
                <Image className="msq__dog-img" src={firstDog} alt="dog" />
              </div>
              <div className="msq__smooth"></div>
            </div>
            <div className="msqs__blocks-wrd wrd">
              <h2 className="wrd__title">Flashcard</h2>
              <p className="wrd__text">
                We tried to implement as much as possible a more convenient
                opportunity to study the material and in this way, the best
                decision was a Flashcards
              </p>
            </div>
          </div>
          <div className="msqs__block">
            <div className="msqs__blocks-wrd wrd">
              <h2 className="wrd__title">MCQS</h2>
              <p className="wrd__text">
                Multiple choice, objective response, or MCQ (for Multiple Choice
                Question) is a form of an objective assessment in which
                respondents are asked to select only correct answers from the
                choices offered as a list, this method one of the best to
                analyze a student knowleges
              </p>
            </div>
            <div className="msqs__blocks-msq msq">
              <Image
                className="msq__card"
                src={require("../public/photos/ivala/quiz-two.png")}
                alt="card"
              />
              <div className="msq__dog dg">
                <Image className="msq__dog-img" src={secondDog} alt="dog" />
              </div>
              <div className="msq__smooth"></div>
            </div>
          </div>
        </div>
        <div className="quiz__mob mob">
          <div className="mob__ivala-detailed ivala-detailed">
            <div className="ivala-detailed__desc">
              <h2 className="ivala-detailed__desc-title lght">
                Mobile version
              </h2>
              <h2 className="ivala-detailed__desc-mobtitle lght">
                Mobile version
              </h2>
              <div className="ivala-detailed__desc-content lght-cont">
                <p>
                  In the mobile version, we tried to display all the information
                  as correctly as possible and follow all the canons of mobile
                  design.
                </p>
              </div>
            </div>
          </div>
          <div className="mob__paralaxed"></div>
        </div>
      </section>
      <section className="down">
        <div className="down__bg">
          <Image
            className="down__bg-img"
            src={require("../public/photos/ivala/down-bg.png")}
            alt="waves bg"
          />
        </div>
        <div className="down__land land">
          <div className="land__container">
            <div className="land__container-after after">
              <div className="after__desc">
                <h2 className="after__desc-title">User-friendly Interface</h2>
                <p className="after__desc-text">
                  We have implemented the most convenient placement of all
                  elements in both the mobile and desktop versions, thinking all
                  way from the beginning and to the end of user flow, for
                  maximum ease of use
                </p>
                <Image
                  src={user_interface}
                  alt="user_interface"
                  className="after__desc-user-interface"
                />
              </div>
              <div className="after__box bx">
                <Image
                  className="after__box-img"
                  src={require("../public/photos/ivala/land-one.png")}
                  alt="small poster"
                />
                <div className="after__box-blur blur"></div>
                <div className="after__box-hidder"></div>
              </div>
            </div>
            <div className="land__container-hang hang">
              <Image
                className="hang__img"
                src={require("../public/photos/ivala/land-two.png")}
                alt="big poster"
              />
              <div className="hang__bg">
                <Image
                  className="hang__bg-img"
                  src={require("../public/photos/ivala/land-bg.png")}
                  alt="big poster"
                />
                <div className="hang__bg-smaller">
                  <Image
                    src={require("../public/photos/ivala/land-three.png")}
                    alt="dog"
                  />
                </div>
                <div className="hang__bg-overlay"></div>
              </div>
              <div className="hang__smth smth"></div>
              <div className="hang__pet">
                <Image
                  className="hang__pet-img pet-logo"
                  src={petOne}
                  alt="pet"
                />
              </div>
            </div>
          </div>
          <div className="land__container">
            <div className="land__container-hang hang">
              <Image
                className="hang__img"
                src={require("../public/photos/ivala/land-four.png")}
                alt="big poster"
              />
              <div className="hang__smth smth"></div>
              <div className="hang__pet pet">
                <Image className="hang__pet-img" src={petTwo} alt="pet" />
              </div>
            </div>
            <div className="land__container-after after">
              <div className="after__desc">
                <h2 className="after__desc-title">
                  Ability to create custom courses
                </h2>
                <p className="after__desc-text">
                  A convenient feature in the functionality is the ability to
                  create your own course, with this feature you can customize as
                  much as possible all the topics of interest to you to study
                </p>
                <Image
                  src={user_interface_second}
                  alt="user_interface_second"
                  className="after__desc-user-second-interface"
                />
              </div>
              <div className="after__box bx">
                <Image
                  className="after__box-img"
                  src={require("../public/photos/ivala/land-five.png")}
                  alt="small poster"
                />
                <div className="after__box-blur blur"></div>
              </div>
            </div>
          </div>
          <div className="land__container">
            <div className="land__container-after after">
              <div className="after__desc">
                <h2 className="after__desc-title">
                  Separation of information by importance
                </h2>
                <p className="after__desc-text">
                  For the convenience of users, we have divided the information
                  into basic and additional, it will save time on studying only
                  the information needed by the student
                </p>
              </div>
              <div className="after__box bx">
                <Image
                  className="after__box-img"
                  src={require("../public/photos/ivala/land-six.png")}
                  alt="small poster"
                />
                <div className="after__box-blur blur"></div>
              </div>
            </div>
            <div className="land__container-hang hang">
              <Image
                className="hang__img"
                src={require("../public/photos/ivala/land-seven.png")}
                alt="big poster"
              />
              <div className="hang__smth smth"></div>
              <div className="hang__pet pet">
                <Image className="hang__pet-img" src={petThree} alt="pet" />
              </div>
            </div>
          </div>
          <div className="land__container">
            <div className="land__container-hang hang">
              <Image
                className="hang__img im"
                src={require("../public/photos/ivala/land-eight.png")}
                alt="big poster"
              />
              <div className="hang__smth smth"></div>
              <div className="hang__pet pet">
                <Image className="hang__pet-img" src={petFour} alt="pet" />
              </div>
            </div>
            <div className="land__container-after after">
              <div className="after__desc">
                <h2 className="after__desc-title">Video series for users</h2>
                <p className="after__desc-text">
                  Video series will help you get the most out of 3D content, in
                  these videos, you will learn how to use the basics of the 3D
                  content interface
                </p>
              </div>
              <div className="after__box bx">
                <Image
                  className="after__box-img"
                  src={require("../public/photos/ivala/land-ninth.png")}
                  alt="small poster"
                />
                <div className="after__box-blur blur"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="canadian-center__projects projects">
        <h1 className="ivala-projects-title projects__title ">
          Check out more projects
        </h1>
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
        </ul>
      </section>
    </div>
  );
};

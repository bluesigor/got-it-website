import tabletRound from "../public/photos/reno/tablet-round.svg";
import orange from "../public/photos/reno/orange-palette.svg";
import darkBlue from "../public/photos/reno/blue-darker-palette.svg";
import lightBlue from "../public/photos/reno/blue-lighter-palette.svg";
import violet from "../public/photos/reno/violet-palette.svg";
import icons from "../public/photos/reno/icons.svg";
import texts from "../public/photos/reno/texts.svg";
import roundLines from "../public/photos/reno/04-round.svg";
import loginPhone from "../public/photos/reno/login-phone.svg";
import bidPhone from "../public/photos/reno/bid-phone.svg";
import phoneRound from "../public/photos/reno/phone-round.svg";
import dotsSix from "../public/photos/reno/dots-6.svg";
import roundSix from "../public/photos/reno/round-6.svg";
import tabletSix from "../public/photos/reno/tablet-2.svg";
import orangeRound from "../public/photos/reno/orange-round-2.svg";
import tabletOneAdded from "../public/photos/reno/tabletOneAdded.svg";
import tabletTwoAdded from "../public/photos/reno/mini-tablet-1-added.svg";
import mob_elipse from "../public/photos/reno/mob-elipse.svg";
import next_proj from "../public/photos/reno/next-proj-miia.svg";
import tabletThree from "../public/photos/reno/mini-tablet-3.svg";
import tabletFour from "../public/photos/reno/mini-tablet-4.svg";
import decorationBlue from "../public/photos/reno/blue-round-bottom.svg";
import decorationLike from "../public/photos/reno/likes-round.svg";
import newme from "../public/photos/canadian-center/newme.svg";
import miia from "../public/photos/canadian-center/miia.svg";
import reno from "../public/photos/canadian-center/reno.svg";
import catering from "../public/photos/canadian-center/catering.svg";
import Image from "next/image";
import Link from "next/link";

export const Reno = () => {
  return (
    <div className="reno">
      <div className="reno__first">
        <div className="reno__first-container">
          <div className="reno-first-text">
            <div className="reno-first-text__number">
              <p className="reno-first-text__number-num">01</p>
              <span className="reno-first-text__number-letters">
                Web <span>Design</span>
              </span>
            </div>
            <div className="reno-first-desc">
              <div className="reno-first-desc__title">Reno Planet</div>
              <div className="reno-first-desc__txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequats.
              </div>
            </div>
          </div>
          <div className="reno-first-photo">
            <Image
              className="reno-first-photo__img"
              src={require("../public/photos/reno/tablet-1.png")}
              alt="tablet"
            />
            <div className="reno-first-photo__round">
              <Image
                className="reno-first-photo__round-img"
                src={tabletRound}
                alt="round"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="reno__second">
        <div className="reno__second-container">
          <div className="reno-second-text">
            <p className="reno-second-text__num">02</p>
            <span className="reno-second-text__letters">Colors Palette</span>
          </div>
          <div className="reno-second-colors">
            <div className="reno-second-colors__box">
              <Image
                className="reno-second-colors__box-img"
                src={orange}
                alt="orange"
              />
            </div>
            <div className="reno-second-colors__box">
              <Image
                className="reno-second-colors__box-img"
                src={darkBlue}
                alt="dark-blue"
              />
            </div>
            <div className="reno-second-colors__box">
              <Image
                className="reno-second-colors__box-img"
                src={lightBlue}
                alt="light-blue"
              />
            </div>
            <div className="reno-second-colors__box">
              <Image
                className="reno-second-colors__box-img"
                src={violet}
                alt="violet"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="reno__icons">
        <div className="reno__icons-container">
          <div className="reno-icons-photo">
            <Image
              className="reno-second-colors__box-img"
              src={icons}
              alt="icons"
            />
          </div>
          <div className="reno-icons-text">
            <p className="reno-icons-text__num">03</p>
            <span className="reno-icons-text__letters">Icons</span>
          </div>
        </div>
      </div>
      <div className="reno__general">
        <div className="reno__general-font">
          <Image src={texts} alt="texts" />
        </div>
        <div className="reno__general-orange">
          <Image src={orangeRound} alt="round" />
        </div>
        <div className="reno-general__four reno-general-four">
          <div className="reno-general-four__text">
            <p className="reno-general-four__text-num">04</p>
            <span className="reno-general-four__text-letters">Typography</span>
            <Image
              className="reno-general-four__text-round"
              src={roundLines}
              alt="round"
            />
          </div>
        </div>
        <div className="reno-general__five reno-general-five">
          <div className="reno-general-five__text">
            <p className="reno-general-five__text-num">05</p>
            <span className="reno-general-five__text-letters">
              Mobile Design
            </span>
          </div>
          <div className="reno-general-five__login">
            <Image
              className="reno-general-five__login-img"
              src={loginPhone}
              alt="login phone"
            />
            <div className="reno-general-five__login-round">
              <Image src={phoneRound} alt="round" />
            </div>
          </div>
          <Image
            src={mob_elipse}
            alt="mob_elipse"
            className="reno-general-five__mob-elipse"
          />
          <div className="reno-general-five__bid">
            <Image
              className="reno-general-five__bid-img"
              src={bidPhone}
              alt="bid phone"
            />
          </div>
        </div>
        <div className="reno-general__six reno-general-six">
          <div className="reno-general-six__text">
            <p className="reno-general-six__text-num">06</p>
            <span className="reno-general-six__text-letters">Profile</span>
            <Image
              className="reno-general-six__text-round"
              src={dotsSix}
              alt="dots"
            />
          </div>
          <div className="reno-general-six__photo">
            <Image
              className="reno-general-six__photo-img"
              src={tabletSix}
              alt="tablet"
            />
          </div>
          <Image
            className="reno-general-six__rounded"
            src={roundSix}
            alt="round"
          />
        </div>
      </div>
      <div className="reno__tablets">
        <div className="reno__tablets-first">
          <Image
            className="tablets-first-picture second-tablet-added  tab-mob-first "
            src={tabletOneAdded}
            alt="tablet"
          />
          <Image
            className="tablets-first-picture second-tablet-added tab-mob-second"
            src={tabletTwoAdded}
            alt="tablet"
          />
        </div>
        <div className="reno__tablets-second">
          <Image
            className="tablets-second-picture second-tablet-added tab-mob-second "
            src={tabletThree}
            alt="tablet"
          />
          <Image
            className="tablets-second-picture second-tablet-added tab-mob-first"
            src={tabletFour}
            alt="tablet"
          />
        </div>
      </div>
      <div className="reno__decoration">
        <div className="reno__decoration-blue">
          <Image src={decorationBlue} alt="blue round" />
        </div>
        <div className="reno__decoration-orange">
          <Image src={decorationLike} alt="orange round" />
        </div>
      </div>
      <footer className="perogy-projects-footer projects-footer">
        <h1 className="projects-footer__title">Check out more projects</h1>
        <ul className="projects-footer__list">
          <li>
            <Link href={"/portfolio/miia"}>
              <Image
                className="projects-footer__list-logo"
                src={miia}
                alt="miia"
              />
            </Link>
          </li>
          <li>
            <Link href={"/portfolio/clinics"}>
              <Image
                className="projects-footer__list-logo"
                src={newme}
                alt="newme"
              />
            </Link>
          </li>
          <li>
            <Link href={"/portfolio/reno"}>
              <Image
                className="projects-footer__list-logo reno"
                src={reno}
                alt="reno"
              />
            </Link>
          </li>
          <li>
            <Link href={"/portfolio/reno"}>
              <Image
                className="projects-footer__list-logo"
                src={catering}
                alt="catering"
              />
            </Link>
          </li>
        </ul>
      </footer>
      <section className="perogy__next-project next-project">
        <div className="next-project-content-block">
          <h1 className="next-project-content-block__title">Miia</h1>
          <h4 className="next-project-content-block__subtitle">Next project</h4>
        </div>
        <Image src={next_proj} alt="next_proj" className="next-project__logo" />
      </section>
    </div>
  );
};

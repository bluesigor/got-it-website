import laptop_logo from "../public/photos/miia/laptop-logo-cropped-new.svg";
import first from "../public/photos/miia/first.svg";
import second from "../public/photos/miia/second.svg";
import third from "../public/photos/miia/third.svg";
import fourth from "../public/photos/miia/fourth.svg";
import fifth from "../public/photos/miia/fifth.svg";
import sixth from "../public/photos/miia/sixth.svg";
import laptop_mob from "../public/photos/miia/laptop-with-phone.svg";
import mob_leaves from "../public/photos/miia/mob-leavs.svg";

import next_proj from "../public/photos/holy-perogy/next-proj.svg";
import Image from "next/image";

export const Miia = () => {
  return (
    <div className="miia">
      <header className="miia__heading">
        <div className="miia__heading-contain contain">
          <h1 className="contain__big">
            Miia<span className="contain__big-small">- eComerce website</span>
          </h1>
        </div>
      </header>
      <main className="miia__gen">
        <div className="miia__gen-parallax"></div>
        <section className="miia__gen-challenge challenge">
          <div className="challenge__txt">
            <h1 className="challenge__txt-title">The challenge</h1>
            <p className="challenge__txt-simple">
              Mia`s shop is perfect example of a modern commercial website for a
              store with natural cosmetics. Our task was to create a compering
              website that will be convenient and modern to use.
            </p>
            <Image
              src={laptop_logo}
              alt="laptop_logo"
              className="challenge__laptop-img"
            />
          </div>
        </section>
        <section className="miia__gen-mobi mobi">
          <div className="mobi__bg"></div>
          <div className="mobi__container">
            <div className="mobi__container-informing inf">
              <h1 className="inf__big">Mobile version</h1>
              <p className="inf__small">
                Nowadays, is no longer makes sense to create a site only for the
                computer version, because now user is preferring smartphones.
                Agree, that now everyone has so little free time that they
                mostly combine several things at once.
              </p>
              <p className="inf__small">
                We made every effort to make the site fully adaptable and it
                looked great on any smartphone or tablet, and we did it 100%.
              </p>
            </div>
            <div className="mobi__container-iphones iphones">
              <div className="iphones__content">
                <div className="iphones__content-box">
                  <Image src={first} alt="phone" />
                </div>
                <div className="iphones__content-box">
                  <Image src={second} alt="phone" />
                </div>
                <div className="iphones__content-box">
                  <Image src={third} alt="phone" />
                </div>
                <div className="iphones__content-box">
                  <Image src={fourth} alt="phone" />
                </div>
                <div className="iphones__content-box">
                  <Image src={fifth} alt="phone" />
                </div>
                <div className="iphones__content-box">
                  <Image src={sixth} alt="phone" />
                </div>
              </div>
              <div className="iphones__leavs">
                <Image
                  className="iphones__leavs-img"
                  src={mob_leaves}
                  alt="leavs"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="miia__gen-colors colors">
          <section className="colors__container">
            <h1 className="colors__container-title">Used colours</h1>
            <div className="colors__container-palette palette">
              <div className="palette__color">
                <p className="palette__color-txt">#2D3129</p>
                <div className="palette__color-cube base"></div>
                <div className="palette__color-col base"></div>
                <div className="palette__color-gen base"></div>
              </div>
              <div className="palette__color">
                <div className="palette__color-gen base"></div>
                <div className="palette__color-col base"></div>
                <div className="palette__color-cube base"></div>
                <p className="palette__color-txt">#8C9385</p>
              </div>
              <div className="palette__color">
                <p className="palette__color-txt">#F2F2F2</p>
                <div className="palette__color-cube base"></div>
                <div className="palette__color-col base"></div>
                <div className="palette__color-gen base"></div>
              </div>
              <div className="palette__color">
                <div className="palette__color-gen base"></div>
                <div className="palette__color-col base"></div>
                <div className="palette__color-cube base"></div>
                <p className="palette__color-txt">#DAA132</p>
              </div>
            </div>
          </section>
        </section>
        <section className="miia__gen-fonts fonts">
          <div className="fonts__container">
            <h1 className="fonts__container-title">Used fonts</h1>
            <div className="fonts__difference difference">
              <div className="difference__font font">
                <h2 className="font__letters">Aa</h2>
                <div className="font__box">
                  <h3 className="font__box-name">Merriweather</h3>
                  <p className="font__box-upper">ABCDEFGHIJKLMNOPQRSTUVWYZ</p>
                  <span className="font__box-lower">
                    ABCDEFGHIJKLMNOPQRSTUVWYZ
                  </span>
                </div>
              </div>
              <div className="difference__font font">
                <h2 className="font__letters">Aa</h2>
                <div className="font__box">
                  <h3 className="font__box-name">Lato</h3>
                  <p className="font__box-upper">ABCDEFGHIJKLMNOPQRSTUVWYZ</p>
                  <span className="font__box-lower">
                    ABCDEFGHIJKLMNOPQRSTUVWYZ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="miia__gen-solution solution">
          <div className="solution__photo">
            <Image
              className="solution__photo-item"
              src={require("../public/photos/miia/list.png")}
              alt="list"
            />
            <Image
              src={laptop_mob}
              alt="laptop_mob"
              className="solution__photo-mob"
            />
          </div>
          <div className="solution__desc">
            <h1 className="solution__desc-title">Our solution</h1>
            <p className="solution__desc-text">
              We created a minimalistic and comfortable design that allows the
              customer make purchases conveniently and quickly. Intuitive
              navigation made for website allows the user to easily find
              everything they are looking for without wasting precious time.
            </p>
            <p className="solution__desc-text">
              Hearing customer needs, combined with our experience, we create a
              website that will be most suitable to the product.
            </p>
          </div>
        </section>
      </main>
      <footer className="miia__gen-check check">
        <h1 className="check__title">Check out more projects</h1>
        <div className="check__projects">
          <div className="check__projects-inset inset">
            <div className="inset__photo">
              <Image
                className="inset__photo-item"
                src={require("../public/photos/miia/rehab.png")}
                alt="Rehab Finder"
              />
            </div>
            <h3 className="inset__title">Rehab Finder</h3>
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
            <h3 className="inset__title">Reno</h3>
            <p className="inset__text">Platform for home education</p>
          </div>
          <div className="check__projects-inset inset">
            <div className="inset__photo">
              <Image
                className="inset__photo-item"
                src={require("../public/photos/miia/newme.png")}
                alt="NewMe clinics"
              />
            </div>
            <h3 className="inset__title">NewMe Clinics</h3>
            <p className="inset__text">Online beauty clinic</p>
          </div>
          <div className="check__projects-inset inset">
            <div className="inset__photo">
              <Image
                className="inset__photo-item"
                src={require("../public/photos/miia/ivala.png")}
                alt="Ivala learn"
              />
            </div>
            <h3 className="inset__title">IVALA Learn</h3>
            <p className="inset__text">MCQ platform</p>
          </div>
        </div>
      </footer>
      <section className="perogy__next-project next-project">
        <div className="next-project-content-block eat-miia-footer">
          <Image
            src={next_proj}
            alt="next_proj"
            className="next-project__logo"
          />
          <h1 className="next-project-content-block__title title-eat-time">
            Time to eat
          </h1>
          <h4 className="next-project-content-block__subtitle subtitle-eat-time">
            Next project
          </h4>
        </div>
      </section>
    </div>
  );
};

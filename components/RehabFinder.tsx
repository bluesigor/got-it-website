import scroll from "../public/photos/rehab/scroll.svg";
import asset from "../public/photos/rehab/asset.svg";
import Image from "next/image";
import Link from "next/link";

export const RehabFinder = () => {
  return (
    <div className="rehab">
      <header className="rehab__inception inception">
        <div className="inception__gen">
          <ul className="inception__gen-roster roster">
            <li className="roster__item">UX/UI Design</li>
            <li className="roster__item">Web & Mobile</li>
            <li className="roster__item">August 2020</li>
          </ul>
          <div className="inception__gen-asset">
            <Image src={asset} alt="asset" />
          </div>
          <h2 className="inception__gen-big">Rehab Finder</h2>
          <p className="inception__gen-small">
            We provide free resources to help people rehabilitate and transform
            their lives, including in-depth guides, first hand accounts,
            specialist recommendations and more!
          </p>
          <div className="inception__gen-scroll">
            <Image src={scroll} alt="scroll" />
          </div>
        </div>
        <div className="inception__telling telling">
          <h2 className="telling__title">Customer Journey Map</h2>
          <p className="telling__text">
            Building a user path is an important step in creating any web or
            mobile application. Studying all the possible scenarios helps to
            avoid some problems that show up later (design/development stage)
          </p>
        </div>
        <div className="inception__blur"></div>
      </header>
      <main className="rehab__basis">
        <div className="rehab__basis-route route">
          <div className="route__photo">
            <Image
              className="route__photo-item"
              src={require("../public/photos/rehab/route.png")}
              alt="route"
            />
            <div className="route__photo-blur"></div>
          </div>
        </div>
        <div className="rehab__basis-prlx prlx-one"></div>
        <div className="srch">
          <div className="srch__telling telling">
            <h2 className="telling__title-light">Search</h2>
            <p className="telling__text-light">
              With the help of search the user can find any information related
              to dependencies, there is also the ability to track keywords in
              articles that simplifies the search for the user
            </p>
          </div>
          <div className="srch__photo">
            <div className="srch__photo-item">
              <Image
                src={require("../public/photos/rehab/search.png")}
                alt="rehab search"
              />
            </div>
          </div>
        </div>
        <div className="rehab__basis-telling telling">
          <h2 className="telling__title">Dashboard</h2>
          <p className="telling__text-longer">
            With the help of the Dashboard, you will be able to add new
            therapists, add new clinics, as well as edit information about the
            staff or clinic, after the changes are made, the administration will
            check it for authenticity.
          </p>
        </div>
        <div className="rehab__basis-prlx prlx-two"></div>
        <div className="rehab__typo typo">
          <h2 className="typo__title">Typography</h2>
          <div className="typo__alpabet alphabet">
            <div className="alphabet__box">
              <h1 className="alphabet__box-title box-title">A</h1>
              <div className="alphabet__box-txt box-txt">
                <h3>Crimso Text SemiBold</h3>
                <p>
                  Aa Bb Cc Dd Ee Ff gg Hh Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt uu Vv
                  Ww Xx yy Zz 1 2 3 4 5 6 7 8 9 0
                </p>
              </div>
            </div>
            <div className="alphabet__box">
              <h1 className="alphabet__box-title box-title">A</h1>
              <div className="alphabet__box-txt box-txt">
                <h3>Roboto</h3>
                <p>
                  Aa Bb Cc Dd Ee Ff gg Hh Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt uu Vv
                  Ww Xx yy Zz 1 2 3 4 5 6 7 8 9 0
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rehab__paint paint">
          <h2 className="paint__title">Colors</h2>
          <div className="paint__palette">
            <Image
              className="paint__palette-image"
              src={require("../public/photos/rehab/colors.png")}
              alt="colors"
            />
          </div>
        </div>
      </main>
      <footer className="miia__gen-check check">
        <h1 className="check__title rehab-bottom-gen">
          Check out more projects
        </h1>
        <div className="check__projects">
          <div className="check__projects-inset inset">
            <Link href="/miia/" className="inset__photo">
              <Image
                className="inset__photo-item"
                src={require("../public/photos/miia/miia.png")}
                alt="Rehab Finder"
              />
            </Link>
            <h3 className="inset__title rehab-bottom-tit">Miia</h3>
            <p className="inset__text">E-commerce platform</p>
          </div>
          <div className="check__projects-inset inset">
            <Link href="/reno/" className="inset__photo-item">
              <Image
                className="inset__photo"
                src={require("../public/photos/miia/reno.png")}
                alt="Reno"
              />
            </Link>
            <h3 className="inset__title rehab-bottom-tit">Reno</h3>
            <p className="inset__text">Platform for home education</p>
          </div>
          <div className="check__projects-inset inset">
            <Link href="/newme-clinics/" className="inset__photo">
              <Image
                className="inset__photo-item"
                src={require("../public/photos/miia/newme.png")}
                alt="NewMe clinics"
              />
            </Link>
            <h3 className="inset__title rehab-bottom-tit">NewMe Clinics</h3>
            <p className="inset__text">Online beauty clinic</p>
          </div>
          <div className="check__projects-inset inset">
            <Link href="/ivala-learn/" className="inset__photo">
              <Image
                className="inset__photo-item"
                src={require("../public/photos/miia/ivala.png")}
                alt="Ivala learn"
              />
            </Link>
            <h3 className="inset__title rehab-bottom-tit">IVALA Learn</h3>
            <p className="inset__text">MCQ platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

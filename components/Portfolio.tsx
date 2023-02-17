import Link from "next/link";
import Image from "next/image";

import new_me from "../public/photos/portfolio/new-me.svg";
import canadian_new from "../public/photos/portfolio/canadian-new.svg";
import rehab_new from "../public/photos/portfolio/rehab-new.svg";
import holy_perogy from "../public/photos/portfolio/holy-new.svg";
import reno from "../public/photos/portfolio/reno-new.svg";
import { Header } from "./additional/Header";
import { Banner } from "./additional/Banner";
import { Footer } from "./additional/Footer";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />
      <section className="representation">
        <div className="representation__container">
          <h2 className="representation__container-heading">Portfolio</h2>
          <div className="representation__container-col col">
            <Link href="/portfolio/clinics/" className="col__case case">
              <div className="case__picture">
                <Image
                  className="case__picture-img new-me-portfolio"
                  src={new_me}
                  alt="NewMe Clinics"
                />
              </div>
              <div className="case__text">
                <h2 className="case__text-title">NewMe Clinics</h2>
                <p className="case__text-desc">Body treatment clinics</p>
              </div>
            </Link>
            <Link href="/portfolio/miia/" className="col__case case">
              <div className="case__picture">
                <Image
                  className="case__picture-img"
                  src={require("../public/photos/portfolio/miia.png")}
                  alt="Miia Shop"
                />
              </div>
              <div className="case__text">
                <h2 className="case__text-title">Miia</h2>
                <p className="case__text-desc">eComerce website</p>
              </div>
            </Link>
            <Link href="/portfolio/rehab-finder/" className="col__case case">
              <div className="case__picture">
                <Image
                  className="case__picture-img"
                  src={rehab_new}
                  alt="Rehab Finder"
                />
              </div>
              <div className="case__text">
                <h2 className="case__text-title">Rehab Finder</h2>
                <p className="case__text-desc">
                  Service for finding rehabilitation clinics
                </p>
              </div>
            </Link>
            <Link href="/portfolio/canadian/" className="col__case case">
              <div className="case__picture">
                <Image
                  className="case__picture-img"
                  src={canadian_new}
                  alt="Ivala learn"
                />
              </div>
              <div className="case__text">
                <h2 className="case__text-title case__text-title-desktop">
                  Canadian Centre for Addictione
                </h2>
                <h2 className="case__text-title case__text-title-mobile">
                  CCFA
                </h2>
                <p className="case__text-desc">
                  Canadas premier private facility for addiction services
                </p>
              </div>
            </Link>
            <Link href="/portfolio/canadian/" className="col__case case">
              <div className="case__picture">
                <Image className="case__picture-img" src={reno} alt="Reno" />
              </div>
              <div className="case__text">
                <h2 className="case__text-title">Reno</h2>
                <p className="case__text-desc">
                  Service for providing and finding services
                </p>
              </div>
            </Link>
            <Link href="/portfolio/canadian/" className="col__case case">
              <div className="case__picture">
                <Image
                  className="case__picture-img"
                  src={holy_perogy}
                  alt="Holy Perogy"
                />
              </div>
              <div className="case__text">
                <h2 className="case__text-title">Holy Perogy</h2>
                <p className="case__text-desc">
                  Website for perogies restaurant
                </p>
              </div>
            </Link>
            <Link href="/portfolio/canadian/" className="col__case case">
              <div className="case__picture">
                <Image
                  className="case__picture-img"
                  src={require("../public/photos/portfolio/black-p.png")}
                  alt="Unskool"
                />
              </div>
              <div className="case__text">
                <h2 className="case__text-title">Unskool</h2>
                <p className="case__text-desc">Platform for home education</p>
              </div>
            </Link>
            <Link href="/portfolio/canadian/" className="col__case case">
              <div className="case__picture">
                <Image
                  className="case__picture-img"
                  src={require("../public/photos/portfolio/white-p.png")}
                  alt="Unskool"
                />
              </div>
              <div className="case__text">
                <h2 className="case__text-title">Unskool</h2>
                <p className="case__text-desc">Platform for home education</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="bann">
        <Banner />
      </div>
      <Footer />
    </div>
  );
};

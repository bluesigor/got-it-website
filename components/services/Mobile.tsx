import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Header } from "../additional/Header";

import main_mob from "../../public/photos/services/mobile/main-mob.svg";
import ios from "../../public/photos/services/mobile/ios.svg";
import android from "../../public/photos/services/mobile/android.svg";
import swift from "../../public/photos/services/mobile/swift.svg";
import native from "../../public/photos/services/mobile/native.svg";
import kotlin from "../../public/photos/services/mobile/kotlin.svg";
import flutter from "../../public/photos/services/mobile/flutter.svg";
import new_me from "../../public/photos/home/new-me.svg";
import rehab from "../../public/photos/home/rehab.svg";

import { Banner } from "../additional/Banner";
import { Footer } from "../additional/Footer";
import { MobileSwitcher } from "../additional/MobileSwitcher";

export const Mobile = () => {
  return (
    <div>
      <Header />
      <section className="start">
        <div className="start__gen gen">
          <div className="gen__mobi">
            <Image
              className="gen__mobi-img"
              src={require("../../public/photos/services/mobile/mobile-mob.png")}
              alt="mobile bckg"
            />
          </div>
          <div className="gen__intro">
            <h1 className="gen__intro-title">
              Does your business have a mobile app?
            </h1>
            <p className="gen__intro-text">
              We develop fully functional mobile applications, available online
              to millions of users in any country of the world.
            </p>
            <Link href="/contact-us/" className="gen__intro-link">
              GET IN TOUCH
            </Link>
          </div>
          <div className="gen__phone">
            <motion.p
              className="gen__phone-mob"
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              initial={{ opacity: 0 }}
            >
              Mobile
            </motion.p>
            <motion.div
              className="gen__phone-image"
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              initial={{ opacity: 0 }}
            >
              <Image src={main_mob} alt="mobile phone" />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="start__letter"
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          initial={{ opacity: 0 }}
        >
          <Image
            src={require("../../public/photos/services/mobile/m.png")}
            alt="letter m"
          />
        </motion.div>
        <motion.p
          className="start__additional"
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
          initial={{ opacity: 0 }}
        >
          App
        </motion.p>
        <div className="start__bg">
          <Image
            src={require("../../public/photos/services/mobile/top-bg.png")}
            alt="start bg"
          />
        </div>
      </section>
      <section className="build">
        <motion.div
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            delay: 1.5,
          }}
          initial={{ y: 400, opacity: 0 }}
        >
          <div className="build__desc">
            <h2 className="build__desc-title">
              Your Business is always close to you!
            </h2>
            <div className="build__desc-content">
              <p className="content-simple">
                Nowadays, almost 52% of users search for information and
                products with the help of mobile devices, while 97% of those
                people finish their target intervention in the smartphones, and
                therefore, entrepreneurs receive 72% of their profit from mobile
                applications. They are developed to attract and keep new
                customers` attention by transforming them from new clients into
                regular ones.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="build__bg">
          <Image
            className="build__bg-img"
            src={require("../../public/photos/services/mobile/build-bg.png")}
            alt="build bg"
          />
        </div>
      </section>
      <section className="phones">
        <div className="phones__container">
          <div className="phones__container-images images images-desktop">
            <motion.div
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                delay: 1.5,
              }}
              initial={{ y: 400, opacity: 0 }}
            >
              <div className="images__ios">
                <Image
                  src={require("../../public/photos/services/mobile/ios-phone.png")}
                  alt="ios phone"
                />
              </div>
            </motion.div>
            <motion.div
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                delay: 1.5,
              }}
              initial={{ y: 400, opacity: 0 }}
            >
              <div className="images__android">
                <Image
                  src={require("../../public/photos/services/mobile/android-phone.png")}
                  alt="android phone"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 1.5,
            }}
            initial={{ y: 400, opacity: 0 }}
          >
            <div className="phones__container-pres pres">
              <div className="pres__item">
                <h2 className="pres__item-title">iOS Development</h2>
                <p className="pres__item-desc">
                  iOS is the fastest growing mobile operating system in the
                  world. Therefore, by reaching the target audience with the
                  help of a mobile application, you can count on the strategic
                  growth of your business.
                </p>
              </div>
              <div className="pres__item">
                <h2 className="pres__item-title">Android Development</h2>
                <p className="pres__item-desc">
                  Android is a more common mobile platform due to the lower
                  threshold cost of devices. By developing an application for
                  Android, you will get a multimillion audience.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="phones__container-images images images-mobile">
            <div className="images__ios">
              <Image
                src={require("../../public/photos/services/mobile/ios-phone.png")}
                alt="ios phone"
              />
            </div>
            <div className="images__android">
              <Image
                src={require("../../public/photos/services/mobile/android-phone.png")}
                alt="android phone"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="technologies">
        <div className="technologies__info info">
          <motion.div
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 1.5,
            }}
            initial={{ opacity: 0 }}
          >
            <div className="info__text">
              <h2 className="info__text-title">Technologies we use</h2>
              <p className="info__text-desc">
                Top-notch mobile applications are built using the highest
                standards
              </p>
            </div>
          </motion.div>
          <motion.div
            animate={{
              opacity: 1,
              left: 0,
            }}
            transition={{
              duration: 2,
              delay: 1.5,
            }}
            initial={{ opacity: 0, x: -150 }}
          >
            <div className="info__tech">
              <div className="info__tech-block block">
                <div className="block__icon">
                  <Image className="block__icon-img" src={ios} alt="ios" />
                </div>
                <p className="block__txt">iOS</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <Image
                    className="block__icon-img"
                    src={android}
                    alt="android"
                  />
                </div>
                <p className="block__txt">Android</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <Image className="block__icon-img" src={swift} alt="swift" />
                </div>
                <p className="block__txt">Swift</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <Image
                    className="block__icon-img"
                    src={native}
                    alt="react native"
                  />
                </div>
                <p className="block__txt">React Native</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <Image
                    className="block__icon-img"
                    src={kotlin}
                    alt="kotlin"
                  />
                </div>
                <p className="block__txt">Kotlin</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <Image
                    className="block__icon-img"
                    src={flutter}
                    alt="flutter"
                  />
                </div>
                <p className="block__txt">Flutter</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="technologies__bg">
          <Image
            src={require("../../public/photos/services/mobile/tech-bg.png")}
            alt="right bg"
          />
        </div>
        <div className="technologies__bg-left">
          <Image
            src={require("../../public/photos/services/mobile/bgm.png")}
            alt="left bg"
          />
        </div>
      </section>
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
        initial={{ y: 400, opacity: 0 }}
      >
        <MobileSwitcher />
      </motion.div>
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
        initial={{ y: 400, opacity: 0 }}
      >
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
      </motion.div>
      <Banner />
      <Footer />
    </div>
  );
};

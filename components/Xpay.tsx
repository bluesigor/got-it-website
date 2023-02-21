import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

import navbar_line from "../public/photos/xpay/navbar.svg";
import xpay_logo from "../public/photos/xpay/x-pay-logo.svg";
import xpay_title from "../public/photos/xpay/x-pay-title.svg";
import xpay_walpaper from "../public/photos/xpay/x-pay-walpaper.svg";
import icon_info from "../public/photos/xpay/icon-info.svg";
import icon_done from "../public/photos/xpay/icon-done.svg";
import down_line from "../public/photos/xpay/down-line.svg";
import side_line from "../public/photos/xpay/side-line.svg";
import circle from "../public/photos/xpay/circle.svg";
import edit_icon from "../public/photos/xpay/edit-icon.svg";
import switcher from "../public/photos/xpay/switcher.svg";
import inter_regular from "../public/photos/xpay/inter-regular.svg";
import inter_bold from "../public/photos/xpay/inter-bold.svg";
import line_right from "../public/photos/xpay/line-right.svg";
import line_left from "../public/photos/xpay/line-left.svg";
import options from "../public/photos/xpay/options.svg";
import palette_block from "../public/photos/xpay/palette-block.svg";
import labels from "../public/photos/xpay/labels.svg";
import first from "../public/photos/xpay/checkbox-first.svg";
import toggle from "../public/photos/xpay/checkbox-toggle.svg";
import radio_btn from "../public/photos/xpay/checkbox-radio.svg";
import groups from "../public/photos/xpay/groups.svg";
import tabs from "../public/photos/xpay/tabs.svg";
import personal_info from "../public/photos/xpay/personal-info.svg";
import option_tabs from "../public/photos/xpay/option-tabs.svg";
import form_first from "../public/photos/xpay/form-first.svg";
import form_second from "../public/photos/xpay/form-second.svg";
import search_bar from "../public/photos/xpay/search-bar.svg";
import tags from "../public/photos/xpay/tags.svg";
import progress from "../public/photos/xpay/progress-bar.svg";
import dialog_first from "../public/photos/xpay/dialog-first.svg";
import dialog_second from "../public/photos/xpay/dialog-second.svg";
import storage from "../public/photos/xpay/storage.svg";
import colourful from "../public/photos/xpay/colourful.svg";
import vectors from "../public/photos/xpay/vectors.svg";
import login_tab from "../public/photos/xpay/login-tab.svg";
import pass_tab from "../public/photos/xpay/pass-tab.svg";
import login_tab_mob from "../public/photos/xpay/login-tab-mob.svg";
import pass_tab_mob from "../public/photos/xpay/pass-tab-mob.svg";
import last_tab from "../public/photos/xpay/last-tab.svg";
import elipse from "../public/photos/xpay/elipse.svg";
import screen_desk from "../public/photos/xpay/desk-screen-main.svg";
import blue_elipse from "../public/photos/xpay/blue-elips.svg";
import approve_tab from "../public/photos/xpay/approve-tab.svg";
import tablet_approved from "../public/photos/xpay/tab-approved-tab.svg";
import mob_approved from "../public/photos/xpay/approved-mob.svg";
import cactus from "../public/photos/xpay/cactus.svg";
import info_mob from "../public/photos/xpay/info-mob.svg";
import direction_mob from "../public/photos/xpay/direction-mob.svg";
import straight_line_right from "../public/photos/xpay/straight-line-right.svg";
import straight_line_left from "../public/photos/xpay/straight-line-left.svg";
import world from "../public/photos/xpay/world.svg";
import clock from "../public/photos/xpay/clock.svg";
import main_screen_mob from "../public/photos/xpay/main-screen-mob.svg";
import personal_bckg from "../public/photos/xpay/personal-bckg.svg";
import acc_icon from "../public/photos/xpay/acc-icon.svg";
import history_screen from "../public/photos/xpay/history-screen.svg";
import history_mob from "../public/photos/xpay/history-mob.svg";
import arch_logo from "../public/photos/xpay/arch-logo.svg";
import logout_icon from "../public/photos/xpay/logout-icon.svg";
import settings_icon from "../public/photos/xpay/settings-icon.svg";
import saved_accounts from "../public/photos/xpay/saved-accounts.svg";
import mob_first from "../public/photos/xpay/mob-1.svg";
import mob_ssecond from "../public/photos/xpay/mob-2.svg";
import mob_third from "../public/photos/xpay/mob-3.svg";
import mob_fourth from "../public/photos/xpay/mob-4.svg";
import approving_mountain from "../public/photos/xpay/approving-content-logo.svg";
import error_logo from "../public/photos/xpay/404-tab.svg";
import info_icon from "../public/photos/xpay/info-icon.svg";
import time_icon from "../public/photos/xpay/time-icon.svg";
import mob_error from "../public/photos/xpay/mob-error.svg";
import mountain_error from "../public/photos/xpay/error-mountain.svg";
import flame from "../public/photos/xpay/flame-icon.svg";
import tech_break_desk from "../public/photos/xpay/tech-break-desc.svg";
import tech_break_mob from "../public/photos/xpay/tech-break-mob.svg";
import dino from "../public/photos/xpay/dino.svg";
import tech_ellipsis from "../public/photos/xpay/tech-ellipses.svg";

const Xpay = () => {
  return (
    <div className="xpay">
      <header className="xpay-header">
        <nav className="xpay-header-nav">
          <ul className="xpay-header-nav-list">
            <li className="xpay-header-nav-list__item">UI/UX Design</li>
            <li className="xpay-header-nav-list__item">Got It Agency</li>
            <li className="xpay-header-nav-list__item">2023</li>
          </ul>
        </nav>
        <Image

          className="xpay-header-line"
          src={navbar_line}
          alt="navbar_line"
        />
        <div className="xpay-header-mob-line"></div>
      </header>
      <main className="xpay-main">
        <div className="xpay-main-head">
          <Image

            src={xpay_logo}
            alt="xpay_logo"
            className="xpay-main-head__logo"
          />
          <Image

            src={xpay_title}
            alt="xpay_title"
            className="xpay-main-head__title"
          />
        </div>
        <Image

          src={xpay_walpaper}
          alt="xpay_walpaper"
          className="xpay-main-walpaper"
        />
      </main>
      <section className="xpay-about about-proj">
        <div className="about-proj-header">
          <span className="about-proj-header__title">Project</span>
          <div className="about-proj-header__icons-list">
            <Image

              src={icon_info}
              alt="icon_info"
              className="about-proj-header__icons-list-item"
            />
            <Image

              src={icon_done}
              alt="icon_done"
              className="about-proj-header__icons-list-item"
            />
          </div>
        </div>
        <Image

          className="xpay-header-line"
          src={navbar_line}
          alt="navbar_line"
        />
        <div className="xpay-header-mob-line"></div>
        <div className="about-proj-first">
          <div className="about-proj-first-top-none"></div>
          <div className="about-proj-first-top-exist">
            <Image

              src={down_line}
              alt="down_line"
              className="about-proj-first-top-exist__line"
            />
            <span className="about-proj-first-top-exist__txt">
              About Project
            </span>
          </div>
        </div>
        <div className="about-proj-second">
          <div className="about-proj-second-top-none"></div>
          <div className="about-proj-second-top-exist">
            <Image src={circle} alt="circle" />
            <Image

              src={side_line}
              alt="side_line"
              className="about-proj-second-top-exist__side-line"
            />
          </div>
        </div>
        <div className="about-proj-content">
          <div className="about-proj-content-main">
            <AnimationOnScroll
              delay={0.5}
              animateIn="animate__fadeInUp"
              animateOnce={true}>
              <span className="about-proj-content-main__accent">Idea</span>
              are many variations of passages passages of Lorem Ipsum available,
              but
            </AnimationOnScroll>
            <span className="about-proj-content-main__low">
              <AnimationOnScroll
                delay={1.5}
                animateIn="animate__fadeInUp"
                animateOnce={true}>
                have suffered alteration in some form, by injected humour have
                suffered alteration in some form, by injected humour have
                suffered alteration in some form, by injected humourhave
              </AnimationOnScroll>
            </span>
          </div>
          <div className="about-proj-content-additional">
            here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don`t look even slightly
            believable. If you are going to use a pas.
          </div>
        </div>
        <div className="about-proj-third">
          <div className="about-proj-third-top-none"></div>
          <div className="about-proj-third-top-exist">
            <Image

              src={down_line}
              alt="down_line"
              className="about-proj-third-top-exist__line"
            />
            <Image

              src={edit_icon}
              alt="edit_icon"
              className="about-proj-third-top-exist__edit-icon"
            />
          </div>
        </div>
      </section>
      <section className="xpay-fonts-section fonts-section">
        <div className="fonts-section__first-line" />
        <div className="fonts-section-typo">
          <div className="fonts-section-typo-container">
            <Image

              src={switcher}
              alt="switcher"
              className="fonts-section-typo-container-switcher"
            />
            <Image

              src={inter_regular}
              alt="inter_regular"
              className="fonts-section-typo-container-font"
            />
          </div>
          <div className="fonts-section-typo-container">
            <span className="fonts-section-typo-container-txt">Typography</span>
            <Image

              src={inter_bold}
              alt="inter_bold"
              className="fonts-section-typo-container-font"
            />
          </div>
        </div>
        <div className="fonts-section__end-line" />
      </section>
      <section className="xpay-palette-colors palette-colors">
        <div className="palette-colors-lines-block">
          <Image

            className="palette-colors-lines-block__line-left"
            src={line_left}
            alt="line-left"
          />
          <Image

            className="palette-colors-lines-block__line-right"
            src={line_right}
            alt="line-right"
          />
        </div>
        <div className="palette-colors-top">
          <Image

            src={options}
            alt="options"
            className="palette-colors-top-options"
          />
          <span className="palette-colors-top-txt">Colors</span>
        </div>
        <div className="palette-colors-banner-wrapper">
          <Image

            className="palette-colors-banner-wrapper-logo"
            src={palette_block}
            alt="palette_block"
          />
        </div>
      </section>
      <section className="xpay-components-section components-section">
        <div className="components-section-top">
          <span className="components-section-top__title">Components</span>
          <span className="components-section-top__end">Design System</span>
        </div>
        <div className="components-section-btns">
          <Image

            src={labels}
            alt="labels"
            className="components-section-btns-labels"
          />
          <div className="components-section-btns-check">
            <Image

              src={first}
              alt="first"
              className="components-section-btns-check__first"
            />
            <Image

              src={toggle}
              alt="toggle"
              className="components-section-btns-check__toggle"
            />
            <Image

              src={radio_btn}
              alt="radio_btn"
              className="components-section-btns-check__radio"
            />
          </div>
        </div>
        <div className="components-section-tabs">
          <Image

            src={groups}
            alt="groups"
            className="components-section-tabs__item"
          />
          <Image

            src={tabs}
            alt="tabs"
            className="components-section-tabs__item"
          />
          <Image

            src={personal_info}
            alt="personal_info"
            className="components-section-tabs__item"
          />
        </div>
        <div className="components-section-options-tab">
          <Image

            src={option_tabs}
            alt="option_tabs"
            className="components-section-options-tab__logo"
          />
        </div>
        <div className="components-section-forms">
          <Image

            src={form_first}
            alt="form-first"
            className="components-section-forms__item"
          />
          <Image

            src={form_second}
            alt="form_second"
            className="components-section-forms__item"
          />
        </div>
        <div className="components-section-others">
          <div className="components-section-others-first">
            <Image

              src={search_bar}
              alt="search_bar"
              className="components-section-others-first__search"
            />
            <Image

              src={tags}
              alt="tags"
              className="components-section-others-first__tags"
            />
          </div>
          <div className="components-section-others-second">
            <Image

              src={dialog_first}
              alt="dialog_first"
              className="components-section-others-second__dialog-first"
            />
            <Image

              src={dialog_second}
              alt="dialog_second"
              className="components-section-others-second__dialog-second"
            />
          </div>
          <div className="components-section-others-third">
            <Image

              src={storage}
              alt="storage"
              className="components-section-others-third__storage"
            />
            <Image

              src={progress}
              alt="progress"
              className="components-section-others-third__progress"
            />
          </div>
        </div>
        <div className="components-section-icons">
          <Image src={colourful} alt="colourful" />
          <Image src={vectors} alt="colourful" />
        </div>
      </section>
      <section className="xpay-result-section result-section">
        <div className="result-section-horizontal" />
        <div className="result-section-wrapper">
          <span className="result-section-wrapper__part">UI Part</span>
          <span></span>
          <span className="result-section-wrapper__res">Result</span>
          <span className="result-section-wrapper__design">UI Design</span>
        </div>
        <div className="result-section-auth">
          <span className="result-section-auth-none"></span>
          <span className="result-section-auth-txt">Authorization</span>
        </div>
        <div className="result-section-tablets">
          <Image

            src={login_tab}
            alt="login_tab"
            className="result-section-tablets__item"
          />
          <Image

            src={pass_tab}
            alt="pass_tab"
            className="result-section-tablets__item"
          />
          <Image

            src={login_tab_mob}
            alt="login_tab"
            className="result-section-tablets__mob-item"
          />
          <Image

            src={pass_tab_mob}
            alt="pass_tab"
            className="result-section-tablets__mob-item"
          />
          <Image

            src={last_tab}
            alt="last_tab"
            className="result-section-tablets__item"
          />
        </div>
        <div className="result-section-elipses">
          <Image src={elipse} alt="elipse" />
        </div>
        <div className="result-section-mob-screen">
          <p className="result-section-mob-screen-txt">
            Main Screen
            <br />
            <span className="result-section-mob-screen-add-desktop">
              / Desktop
            </span>
          </p>
        </div>
      </section>
      <section className="xpay-cactus cactus">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <div className="cactus-screen-wrapper">
            <Image

              src={screen_desk}
              alt="screen_desk"
              className="cactus-screen-wrapper__banner"
            />
          </div>
        </AnimationOnScroll>
      </section>
      <section className="xpay-application-xpay application-xpay">
        <div className="application-xpay-header">
          <p className="application-xpay-header-full">
            Application Approving
            <br />
            <span className="application-xpay-header-full-tab">/ Tablet</span>
          </p>
        </div>
        <div className="application-xpay-elipsess">
          <Image src={blue_elipse} alt="blue_elipse" />
        </div>
        <div className="application-xpay__line-through"></div>
        <Image

          className="application-xpay__approve-desk"
          src={approve_tab}
          alt="approve_tab"
        />
        <Image

          className="application-xpay__approve-tab"
          src={tablet_approved}
          alt="tablet_approved"
        />
        <Image

          className="application-xpay__approve-mob"
          src={mob_approved}
          alt="mob_approved"
        />
        <div className="application-xpay-mobile">
          <p className="application-xpay-mobile-title">
            Application Approving
            <br />
            <span className="application-xpay-mobile-sub">
              / Mobile
            </span>
          </p>
        </div>
        <Image alt="cactus" src={cactus} className="application-xpay__cactus-img" />
        <Image alt="line-right" src={straight_line_right} className="application-xpay__straight-line-right" />
        <Image alt="info-mob" src={info_mob} className="application-xpay__info-mob-img" />
        <Image alt="direction_mob" src={direction_mob} className="application-xpay__direction-mob" />
        <Image alt="straight_line_left" src={straight_line_left} className="application-xpay__straight-line-left" />
        <Image alt="line-right-second" src={straight_line_right} className="application-xpay__straight-line-right-second" />
        <Image src={world} alt="world" className="application-xpay__world" />
        <Image src={clock} alt='clock' className="application-xpay__clock" />
      </section>
      <section className="application-xpay__blue-section blue-section">
        <div className="blue-section-mountain-block">
          <div className="blue-section-mountain-block-left">
            <div className="blue-section-mountain-block-left__txt">
              <p className="blue-section-mountain-block-left__txt-title">
                Main Screen
                <br />
                <span className="blue-section-mountain-block-left__txt-sub">
                  / Mobile
                </span>
              </p>
              <div>
              </div>
            </div>
            <Image alt="main_screen_mob" src={main_screen_mob} className="blue-section-mountain-block-left__mob-screen" />
          </div>
          <div className="blue-section-mountain-block-right" />
          <div className="blue-section-mountain-block-mobile" />
        </div>
        <div className="blue-section-personal-account">
          <Image src={personal_bckg} className="blue-section-personal-account-arch" alt="personal_bckg" />
          <div className="blue-section-personal-account-txt">
            <span className="blue-section-personal-account-txt-title" >Personal Account</span>
            <Image src={acc_icon} alt="acc_icon" className="blue-section-personal-account-txt-icon" />
          </div>
          <Image src={history_screen} className="blue-section-personal-account__history-logo" alt="history-screen" />
          <Image src={history_mob} className="blue-section-personal-account__mob-logo" alt="history-mob" />
        </div>
        <div className="blue-section-saved">
          <Image className="blue-section-saved-logo" src={arch_logo} alt="arch-logo" />
          <div className="blue-section-saved-icons">
            <Image src={settings_icon} alt='settings' className="blue-section-saved-icons__settings" />
            <Image src={logout_icon} alt='logout' className="blue-section-saved-icons__logout" />
          </div>
          <Image src={saved_accounts} alt="saved-accounts" className="blue-section-saved__accounts" />
        </div>
        <div className="blue-section-bottom">
          <div className="blue-section-bottom-content" >
            <p className="blue-section-bottom-content-title">
              Main Screen
              <br />
              <span className="blue-section-bottom-content-sub">
                / Mobile
              </span>
            </p>
          </div>
          <div className="blue-section-bottom-phones">
            <Image src={mob_first} alt='mob_first' className="blue-section-bottom-phones__item" />
            <Image src={mob_ssecond} alt="mob-second" className="blue-section-bottom-phones__item" />
            <Image src={mob_third} alt="mob-third" className="blue-section-bottom-phones__item" />
            <Image src={mob_fourth} alt="mob-fourth" className="blue-section-bottom-phones__item" />
          </div>
        </div>
      </section>
      <section className="application-xpay__approving approving">
        <div className="approving-content">
          <p className="approving-content-title">
            Main Screen
            <br />
            <span className="approving-content-sub">
              / Mobile
            </span>
          </p>
        </div>
        <Image src={approving_mountain} alt='approving__mountain' className="approving__mountain" />
      </section>
      <section className="application-xpay__fallback fallback">
        <div className="fallback__horizontal" />
        <div className="fallback-content">
          <p className="fallback-content__title" >
            Custom Background
          </p>
        </div>
        <div className="fallback-wrapper">
          <div className="fallback-wrapper-pages">
            <span className="fallback-wrapper-pages__item" >404 Page</span>
            <span className="fallback-wrapper-pages__item" >404 Page</span>
          </div>
        </div>
        <Image className="fallback__tab-logo" src={error_logo} alt="error-tab" />
        <div className="fallback-error">
          <p className="fallback-error__title">
            404 Page
            <br />
            <span className="fallback-error__sub">
              / Tablet
            </span>
          </p>
        </div>
        <div className="fallback-icons">
          <Image src={time_icon} alt='time_icon' className="fallback-icons__item" />
          <Image src={info_icon} alt="info_icon" className="fallback-icons__item" />
        </div>
        <Image src={mob_error} alt='mob-error' className="fallback__mob-error" />
        <Image src={mountain_error} alt='mountain_error' className="fallback__mountain-error" />
        <div className="fallback-container">
          <Image src={flame} alt="flame" className="fallback-container__flame" />
        </div>
      </section>
      <section className="application-xpay__technical technical">
        <div className="technical-content">
          <p className="technical-content__title">
            Technical Break
            <br />
            <span className="technical-content__sub">
              / Desktop
            </span>
          </p>
        </div>
        <Image src={tech_break_desk} alt="tech_break_desk" className="technical__tech-break-desk" />
        <Image src={tech_ellipsis} alt="tech-ellipsis" className="technical__tech-ellipsis" />
        <div className="technical-custom">
          <p className="technical-custom__title">
            Custom Background
            <br />
            <span className="technical-custom__sub">
              / All Gadgets
            </span>
          </p>
        </div>
        <Image src={dino} alt='dino' className="technical__dino" />
        <Image src={tech_break_mob} alt='tech_break_mob' className="technical__tech-break-mob" />
      </section>
    </div>
  );
};

export default Xpay;

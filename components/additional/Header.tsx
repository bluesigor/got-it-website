import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import polygon from "../../public/photos/polygon.svg";

export const Header = () => {
  const [firstSubmenu, setFirstSubmenu] = useState<boolean>(false);
  const [secondSubmenu, setSecondSubmenu] = useState<boolean>(false);
  const [burger, setBurger] = useState<boolean>(false);
  const [smallMenu, setSmallMenu] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header__heading heading">
        <Link href="/" className="heading__logo">
          <Image
            className="heading__logo-image"
            src={require("../../public/photos/home/logo.png")}
            alt="GotIT Logo"
          />
        </Link>
        <div className="heading__menu menu">
          <ul className="menu__links links">
            <li className="links__link">
              <Link href="/" className="links__link-item">
                HOME
              </Link>
            </li>
            <li
              className="links__link parent"
              onMouseEnter={() => setFirstSubmenu(true)}
              onMouseLeave={() => setFirstSubmenu(false)}>
              <Link href="/" className="links__link-item">
                SERVICES
              </Link>
              {firstSubmenu && (
                <ul className="links__link-submenu submenu">
                  <li className="submenu__link">
                    <Link
                      href="/services/ui-ux-design/"
                      className="submenu__link-text">
                      UI/UX Design
                    </Link>
                  </li>
                  <li className="submenu__link">
                    <Link
                      href="/services/web-development/"
                      className="submenu__link-text">
                      Web Development
                    </Link>
                  </li>
                  <li className="submenu__link">
                    <Link
                      href="/services/mobile-development/"
                      className="submenu__link-text">
                      Mobile Development
                    </Link>
                  </li>
                  <li className="submenu__link">
                    <Link
                      href="/services/dedicated-team-services/"
                      className="submenu__link-text">
                      Dedicated Team Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="links__link">
              <Link href="/portfolio/" className="links__link-item">
                PORTFOLIO
              </Link>
            </li>
            <li
              className="links__link parent"
              onMouseEnter={() => setSecondSubmenu(true)}
              onMouseLeave={() => setSecondSubmenu(false)}>
              <Link href="/" className="links__link-item">
                COMPANY
              </Link>
              {secondSubmenu && (
                <ul className="links__link-submenu submenu">
                  <li className="submenu__link">
                    <Link
                      href="/company/about-us/"
                      className="submenu__link-text">
                      About Us
                    </Link>
                  </li>
                  <li className="submenu__link">
                    <Link
                      href="/company/career/"
                      className="submenu__link-text">
                      Career
                    </Link>
                  </li>
                  <li className="submenu__link">
                    <Link href="/company/blog/" className="submenu__link-text">
                      Blog
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="links__link">
              <Link href="/contact-us/" className="links__link-item">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="burger"
          onClick={() => {
            setBurger(!burger);
            setSmallMenu(false);
          }}>
          <div
            className={classNames({
              burger__first: true,
              opnd: burger,
            })}></div>
          <div
            className={classNames({
              burger__second: true,
              opnd: burger,
            })}></div>
          <div
            className={classNames({
              burger__third: true,
              opnd: burger,
            })}></div>
        </div>
      </div>
      {burger && (
        <nav className="nav">
          <ul className="nav__list">
            <li
              onClick={() => {
                setBurger(false);
                setSmallMenu(false);
              }}
              className="nav__list-link">
              <Link href="/">HOME</Link>
            </li>
            <li className="nav__list-srv srv">
              <div className="srv__box">
                <a
                  onClick={() => setSmallMenu(!smallMenu)}
                  className="srv__box-link"
                  href="#">
                  SERVICES
                </a>
                <div
                  onClick={() => setSmallMenu(!smallMenu)}
                  className={classNames({
                    "srv__box-polygon": true,
                    "polygon-opened": smallMenu,
                  })}>
                  <Image src={polygon} alt="polygon" />
                </div>
              </div>
              {smallMenu && (
                <ul className="srv__other">
                  <li className="srv__other-link">
                    <Link href="/services/web-development/">
                      WEB DEVELOPMENT
                    </Link>
                  </li>
                  <li className="srv__other-link">
                    <Link href="/services/mobile-development/">
                      MOBILE DEVELOPMENT
                    </Link>
                  </li>
                  <li className="srv__other-link">
                    <Link href="/services/ui-ux-design/">UX/UI DESIGN</Link>
                  </li>
                  <li className="srv__other-link">
                    <Link href="/services/dedicated-team-services/">
                      DEDICATED TEAM
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav__list-link">
              <Link href="/portfolio/">PORTFOLIO</Link>
            </li>
            <li className="nav__list-link">
              <Link href="/company/about-us/">ABOUT US</Link>
            </li>
            <li className="nav__list-link">
              <Link href="/company/blog/">BLOG</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

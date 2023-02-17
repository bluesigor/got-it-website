import Image from "next/image";
import Link from "next/link";
import { Header } from "./additional/Header";

export const PageNotFound = () => {
  return (
    <div className="error">
      <Header />
      <section className="error__problem problem">
        <div className="problem__container">
          <div className="problem__container-photo">
            <Image src={require("../public/photos/error/404.png")} alt="404" />
          </div>
          <h2 className="problem__container-title">
            Oops! Page not <span>found</span>
          </h2>
          <p className="problem__container-desc">
            Sorry, we can`t find page you`re looking for.
          </p>
          <Link href="/" className="problem__container-link">
            GO HOME
          </Link>
        </div>
      </section>
    </div>
  );
};

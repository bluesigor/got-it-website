import { useEffect, useState } from "react";
import classNames from "classnames";

import { Blog } from "@/core/types/Blog";
import { BlogTopics } from "@/core/constants/blog";
import { Header } from "../additional/Header";
import { BlogCard } from "./BlogCard";
import { Banner } from "../additional/Banner";
import { Footer } from "../additional/Footer";

export const BlogPage = () => {
  const [topics, setTopics] = useState<Blog[]>([]);
  const [all, setAll] = useState<boolean>(true);
  const [news, setNews] = useState<boolean>(false);
  const [web, setWeb] = useState<boolean>(false);
  const allFilter = "All";
  const newsFilter = "News";
  const webFilter = "Web";

  useEffect(() => {
    setTopics(BlogTopics);
  }, []);

  const clearBckg = () => {
    setAll(false);
    setNews(false);
    setWeb(false);
  };

  const filtering = (param: string) => {
    switch (param) {
      case allFilter:
        setTopics(BlogTopics);
        break;

      case newsFilter:
        setTopics(BlogTopics.filter((item) => item.chapter === newsFilter));
        break;

      case webFilter:
        setTopics(BlogTopics.filter((item) => item.chapter === webFilter));
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <Header />
      <section className="blog">
        <h2 className="blog__title">Our Blog</h2>
        <div className="blog__filtering">
          <button
            className={classNames({
              "blog__filtering-btn": true,
              blog__bckg: all,
            })}
            onClick={() => {
              clearBckg();
              setAll(true);
              if (!all) {
                filtering(allFilter);
              }
            }}>
            All
          </button>
          <button
            className={classNames({
              "blog__filtering-btn": true,
              blog__bckg: news,
            })}
            onClick={() => {
              clearBckg();
              setNews(true);
              if (!news) {
                filtering(newsFilter);
              }
            }}>
            News
          </button>
          <button
            className={classNames({
              "blog__filtering-btn": true,
              blog__bckg: web,
            })}
            onClick={() => {
              clearBckg();
              setWeb(true);
              if (!web) {
                filtering(webFilter);
              }
            }}>
            Web Development
          </button>
        </div>
        <ul className="blog__list">
          {topics.map((topic) => (
            <li key={topic.id} className="blog__list-item">
              <BlogCard
                topic={topic}
                filtering={filtering}
                allFilter={allFilter}
                clearing={clearBckg}
                setAll={setAll}
                setNews={setNews}
                setWeb={setWeb}
              />
            </li>
          ))}
        </ul>
      </section>
      <Banner />
      <Footer />
    </div>
  );
};

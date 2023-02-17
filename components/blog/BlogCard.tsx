import { Blog } from "@/core/types/Blog";
import Image from "next/image";
import Link from "next/link";

type Props = {
  topic: Blog;
  filtering: (param: string) => void;
  clearing: () => void;
  setAll: (bol: boolean) => void;
  setWeb: (bol: boolean) => void;
  setNews: (bol: boolean) => void;
  allFilter: string;
};

export const BlogCard: React.FC<Props> = ({
  topic,
  filtering,
  allFilter,
  setNews,
  setAll,
  setWeb,
  clearing,
}) => {
  return (
    <div className="card">
      <Link href={topic.link} className="card__image">
        <Image
          className="card__image-item"
          src={topic.photo}
          alt={topic.title}
        />
      </Link>
      <span className="card__date">{topic.date}</span>
      <Link href={topic.link} className="card__title">
        {topic.title}
      </Link>
      <p className="card__txt">{topic.text}</p>
      <div className="card__links">
        <button
          className="card__links-btn"
          onClick={() => {
            filtering(allFilter);
            clearing();
            setAll(true);
          }}>
          All
        </button>
        <button
          className="card__links-btn"
          onClick={() => {
            filtering(topic.chapter);
            clearing();
            topic.chapter === "News" ? setNews(true) : setWeb(true);
          }}>
          {topic.chapter}
        </button>
      </div>
    </div>
  );
};

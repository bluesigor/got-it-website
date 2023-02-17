import { allAwards } from "@/core/constants/home";
import { Award } from "@/core/types/Award";
import Image from "next/image";
import { useEffect, useState } from "react";

export const HomeCarousel = () => {
  const [awards, setAwards] = useState<Award[]>([]);

  useEffect(() => {
    setAwards(allAwards);
  }, []);

  useEffect(() => {
    const slide = setTimeout(() => {
      const item = awards[0];
      setAwards([...awards.slice(1, 8), item]);
    }, 7000);
    return () => {
      clearTimeout(slide);
    };
  }, [awards]);

  return (
    <section className="awards">
      <p className="awards__title">Our awards</p>
      <div className="awards__carousel">
        <ul className="awards__carousel-chart chart">
          {awards.slice(0, 5).map((award) => (
            <li className="chart__item" key={award.id}>
              <Image src={award.image} alt={award.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

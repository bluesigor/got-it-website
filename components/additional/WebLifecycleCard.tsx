import classNames from "classnames";
import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  selectedId: number;
  id: number;
};

export const WebLifecycleCard: React.FC<Props> = ({
  icon,
  title,
  selectedId,
  id,
}) => {
  return (
    <div
      className={classNames({
        clickers: true,
        bckg: selectedId === id,
      })}>
      <Image className="clickers__icon" src={icon} alt={title} />
      <h2
        className={classNames({
          clickers__title: true,
          whiter: selectedId === id,
        })}>
        {title}
      </h2>
    </div>
  );
};

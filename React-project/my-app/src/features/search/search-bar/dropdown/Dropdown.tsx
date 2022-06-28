import { Post } from "../../../../types/post";
import styles from "./Dropdown.module.css";

type DropdownProps = {
  list: Post[];
  onSelectedItem: (id: string | number) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ list, onSelectedItem }) => {
  return (
    <ul className={styles.ul}>
      {list.map((item) => (
        <li className={styles.li} key={item.id}>
          <img className={styles.img} src={item.image} alt={item.title} />
          {item.title}
        </li>
      ))}
    </ul>
  );
};

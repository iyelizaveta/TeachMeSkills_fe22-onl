import styles from "./SortBar.module.css";
type SortBarProps = {
  onChange: (e: any) => void;
};
export const SortBar: React.FC<SortBarProps> = ({ onChange }) => {
  return (
    <select
      className={styles.container}
      onChange={onChange}
      defaultValue="Select order by:"
    >
      <option disabled>Select order by:</option>
      <option>date</option>
      <option>tite</option>
      <option>text</option>
    </select>
  );
};

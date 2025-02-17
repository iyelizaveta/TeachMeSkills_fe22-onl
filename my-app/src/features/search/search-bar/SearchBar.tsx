import { SearchOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import styles from "./SearchBar.module.css";
import { actions } from "../searchSlice";
import { Dropdown } from "./dropdown/Dropdown";

type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.search.response?.results ?? []);
  console.log(list);
  return (
    <div className={styles.container}>
      <SearchOutlined className={styles.searchIcon} />
      <div>
        <input
          className={styles.input}
          type="text"
          onInput={(e) => {
            dispatch(actions.search({ text: e.currentTarget.value }));
          }}
        ></input>
        {list.length > 0 ? (
          <div className={styles.dropdownContainer}>
            <Dropdown
              list={list}
              onSelectedItem={() => {
                dispatch(actions.reset());
              }}
            ></Dropdown>
          </div>
        ) : null}
      </div>
    </div>
  );
};

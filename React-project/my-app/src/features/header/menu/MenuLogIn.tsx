import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";

type MenuLogInProps = {};

export const MenuLogIn: React.FC<MenuLogInProps> = () => {
  return (
    <ul>
      <Link to={AppPages.ALL_POSTS}>
        <li>All posts</li>
      </Link>
      <Link to={AppPages.MY_POSTS}>
        <li>
          My posts
          <ul>
            <Link to={AppPages.ADD_POST}>
              <li>Add posts</li>
            </Link>
          </ul>
        </li>
      </Link>
      <Link to={AppPages.MAIN_PAGE}>
        <li>
          Log out
          <LogoutOutlined />
        </li>
      </Link>
    </ul>
  );
};

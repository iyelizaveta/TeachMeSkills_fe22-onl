import styles from "./ContentTemplate.module.css";
import { Header } from "../../features/header/Header";
import { UserButton } from "../../ui/button/UserButton/UserButton";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { getUser } from "../../features/user/userSlice";

type ContentTemplateProps = {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  children,
  className = "",
}) => {
  const username = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className={`${styles.container} ${className}`}>
      <Header>
        <UserButton>{username}</UserButton>
      </Header>
      <div className={styles.body}>
        {title}
        {children}
      </div>
    </div>
  );
};

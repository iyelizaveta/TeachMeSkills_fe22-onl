// import { PrimaryButton } from '../../ui/button/PrimaryButton/PrimaryButton';
import { Title } from '../../ui/title/Title';
// import styles from './ContentTemplate.module.css';
import { UserButton } from '../../ui/button/UserButton/UserButton';

type ContentTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <div>
      <UserButton>Username</UserButton>
      <Title>{title}</Title>
      <div>{children}</div>
    </div>
  );
};

import { PrimaryButton } from '../../ui/button/PrimaryButton/PrimaryButton';
import { Title } from '../../ui/title/Title';
import styles from './WelcomeTemplate.module.css';

type WelcomeTemplateProps = {};

export const WelcomeTemplate: React.FC<WelcomeTemplateProps> = () => {
  return (
    <div>
      <Title>Template title</Title>
      <p>Template body</p>
      <PrimaryButton className={styles.button}>Button</PrimaryButton>
    </div>
  );
};

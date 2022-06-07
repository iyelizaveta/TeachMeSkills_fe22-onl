import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { Title } from "../../ui/title/Title";
import { InfoTab } from "./components/InfoTab";
import styles from "./InformationPage.module.css";

type InformationPageProps = {};

export const InformationPage: React.FC<InformationPageProps> = () => {
  return (
    <ContentTemplate
      title={<Title>Information</Title>}
      className={styles.container}
    >
      <div className={styles.btnContainer}>
        {" "}
        <PrimaryButton className={styles.button}>Tab 1</PrimaryButton>
        <PrimaryButton className={styles.button}>Tab 2</PrimaryButton>
        <PrimaryButton className={styles.button}>Tab 3</PrimaryButton>
      </div>
      <InfoTab></InfoTab>
    </ContentTemplate>
  );
};

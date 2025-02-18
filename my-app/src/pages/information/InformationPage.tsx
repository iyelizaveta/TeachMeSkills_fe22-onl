import { useState } from "react";
import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { TabContent } from "../../features/posts/tab-content/TabContent";
import { Tabs } from "../../ui/tabs/Tabs";
import { Title } from "../../ui/title/Title";
import styles from "./InformationPage.module.css";

type InformationPageProps = {};

export const InformationPage: React.FC<InformationPageProps> = () => {
  const tabs: Array<{
    id: string | number;
    label: string | number;
  }> = [
    { id: "1", label: "Label 1" },
    { id: "2", label: "Label 2" },
    { id: "3", label: "Label 3" },
  ];
  const content: Array<{
    id: string | number;
    text: string;
  }> = [
    {
      id: "1",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
    {
      id: "2",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: "3",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const handleTabClick = (id: string | number) => {
    setSelectedTabId(id);
  };
  return (
    <div className={styles.container}>
      <ContentTemplate title={<Title>Information</Title>}>
        <Tabs tabs={tabs} selectedId={selectedTabId} onClick={handleTabClick} />
        <TabContent content={content} selectedId={selectedTabId}></TabContent>
      </ContentTemplate>
    </div>
  );
};

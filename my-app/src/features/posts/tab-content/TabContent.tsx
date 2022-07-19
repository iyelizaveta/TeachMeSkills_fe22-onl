import styles from "./TabContent.module.css";

type TabContentProps = {
  content: Array<{
    id: string | number;
    text: string;
  }>;
  className?: string;
  selectedId: string | number;
};

export const TabContent: React.FC<TabContentProps> = ({
  content,
  className,
  selectedId,
}) => {
  return (
    <div className={`${styles.tabContent} ${className}`}>
      {content &&
        content.map((item) => (
          <div key={item.id}>{item.id === selectedId ? item.text : null}</div>
        ))}
    </div>
  );
};

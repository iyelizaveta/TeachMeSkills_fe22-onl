import React from "react";
import styles from "./Tabs.module.css";

export type TabsProps = {
  className?: string;
  tabs: Array<{
    id: string | number;
    label: string | number;
  }>;
  selectedId: string | number;
  onClick: (id: string | number) => void;
};

export const Tabs: React.FC<TabsProps> = ({
  className,
  tabs,
  selectedId,
  onClick,
}) => {
  return (
    <div className={`${styles.tabs} ${className}`}>
      {tabs &&
        tabs.map((tab) => (
          <div
            className={tab.id === selectedId ? styles.tabSelected : styles.tab}
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            <div
              className={
                tab.id === selectedId
                  ? styles.tabLabelSelected
                  : styles.tabLabel
              }
            >
              {tab.label}
            </div>
          </div>
        ))}
    </div>
  );
};

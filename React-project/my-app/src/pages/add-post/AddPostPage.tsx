import { AddPostForm } from "../../features/posts/add-post";
import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { Title } from "../../ui/title/Title";
import styles from "./AddPostPage.module.css";

type AddPostPageProps = {};

export const AddPostPage: React.FC<AddPostPageProps> = () => {
  return (
    <div className={styles.container}>
      <ContentTemplate title={<Title>Add post</Title>}>
        <AddPostForm></AddPostForm>
      </ContentTemplate>
    </div>
  );
};

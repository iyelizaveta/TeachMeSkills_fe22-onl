import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { AppPages } from "../../../../types";
import { PrimaryButton } from "../../../../ui/button/PrimaryButton/PrimaryButton";
import { Input } from "../../../../ui/form/inputs/text-input/Input";
import { Textarea } from "../../../../ui/form/inputs/textarea-input/Textarea";
import { actions } from "../addPostSlice";
import styles from "./Form.module.css";

type FormProps = {};

export const Form: React.FC<FormProps> = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [publish, setPublish] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.addPost.post?.id);
  const [step, setStep] = useState<"initial" | "submitted">("initial");
  const navigate = useNavigate();

  useEffect(() => {
    if (step === "submitted" && id != null) {
      navigate(`${AppPages.POST_PAGE}/${id}`);
    }
  }, [id, step, navigate]);
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          actions.addPost({
            image: image,
            text: text,
            lesson_num: 0,
            title: title,
          })
        );
        setStep("submitted");
      }}
    >
      <div className={styles.container}>
        <Input
          label="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <Input
          label="URL"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        ></Input>
      </div>
      <div className={styles.container}>
        <Input
          label="Publish at"
          type="text"
          value={publish}
          onChange={(e) => setPublish(e.target.value)}
        ></Input>
        <Input
          label="Image"
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] ?? null)}
        ></Input>
      </div>
      <div className={styles.containerSecond}>
        <Input
          className={styles.description}
          label="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
        <Textarea
          className={styles.text}
          label="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></Textarea>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton className={styles.button} type="reset">
          Cancel
        </PrimaryButton>
        <PrimaryButton className={styles.button} type="submit">
          Add post
        </PrimaryButton>
      </div>
    </form>
  );
};

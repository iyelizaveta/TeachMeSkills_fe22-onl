import { MarkDismark } from "./ui/MarkDismark";
import { setMarkPost } from "./markDismarkSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

type PostsMarkDismarkProps = {
  id: number | string;
};

export const PostsMarkDismark: React.FC<PostsMarkDismarkProps> = ({ id }) => {
  const { state } = useAppSelector(
    (state) => state.markedPost[id] ?? { state: false }
  );
  const dispatch = useAppDispatch();

  return (
    <MarkDismark
      onMarkClick={() => dispatch(setMarkPost({ id, state: !state }))}
      currentState={state}
    ></MarkDismark>
  );
};

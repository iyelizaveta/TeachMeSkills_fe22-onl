import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { activate } from "../../features/auth/authSlice";

export const Activate: React.FC = () => {
  const { uid, token } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (uid && token) {
      dispatch(activate({ isActivated: true }));
      console.log("Dispatch was called");
    } else {
      console.error("Activate data is missing");
    }
  }, [dispatch, token, uid]);

  return <div>Выполняется активация пользователя</div>;
};

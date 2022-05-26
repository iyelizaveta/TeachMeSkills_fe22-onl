import { Header } from "../../features/header/Header";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import styles from "./MainPage.module.css";

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div className={styles.main}>
      <Header></Header>
      <h2>
        Make your Blog <span>Online</span>
      </h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been... jjfdnnvkvl; sdfsdfdsfdldkmfk
        sdcfsdlmfkdmfvlkd s;dlsfklsdkfkslfvnkfdv;lsdc; asxsddcksdmfkl
        asksddfklsdmfjjfdnnvkvl; sdfsdfdsfdldkmfk sdcfsdlmfkdmfvlkd
        s;dlsfklsdkfkslfvnkfdv;lsdc; asxsddcksdmfkl asksddfklsdmfjjfdnnvkvl;
        sdfsdfdsfdldkmfk sdcfsdlmfkdmfvlkd s;dlsfklsdkfkslfvnkfdv;lsdc;
        asxsddcksdmfkl asksddfklsdmfjjfdnnvkvl; sdfsdfdsfdldkmfk
        sdcfsdlmfkdmfvlkd s;dlsfklsdkfkslfvnkfdv;lsdc; asxsddcksdmfkl
        asksddfklsdmfjjfdnnvkvl; sdfsdfdsfdldkmfk sdcfsdlmfkdmfvlkd
        s;dlsfklsdkfkslfvnkfdv;lsdc; asxsddcksdmfkl asksddfklsdmfjjfdnnvkvl;
        sdfsdfdsfdldkmfk sdcfsdlmfkdmfvlkd s;dlsfklsdkfkslfvnkfdv;lsdc;
        asxsddcksdmfkl asksddfklsdmfjjfdnnvkvl; sdfsdfdsfdldkmfk
        sdcfsdlmfkdmfvlkd s;dlsfklsdkfkslfvnkfdv;lsdc; asxsddcksdmfkl
        asksddfklsdmfjjfdnnvkvl; sdfsdfdsfdldkmfk sdcfsdlmfkdmfvlkd
        s;dlsfklsdkfkslfvnkfdv;lsdc; asxsddcksdmfkl asksddfklsdmfjjfdnnvkvl;
        sdfsdfdsfdldkmfk sdcfsdlmfkdmfvlkd s;dlsfklsdkfkslfvnkfdv;lsdc;
        asxsddcksdmfkl asksddfklsdmfjjfdnnvkvl; sdfsdfdsfdldkmfk
        sdcfsdlmfkdmfvlkd s;dlsfklsdkfkslfvnkfdv;lsdc; asxsddcksdmfkl
        asksddfklsdmf
      </p>
      <PrimaryButton className={styles.button}>Learn More</PrimaryButton>
    </div>
  );
};

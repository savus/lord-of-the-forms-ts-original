import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { TUserInformation } from "../types";

export const FunctionalApp = () => {
  const [userInfo, setUserInfo] = useState<TUserInformation | null>(null);
  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userInfo} />
      <FunctionalForm
        setUserInfo={(info: TUserInformation) => {
          setUserInfo(info);
        }}
      />
    </>
  );
};

import { useEffect, useState } from "react";
import userAuthentication from "./authenticationCreate";

let UserData_Authentication = ({ children }) => {
  let [signUpData, setSignUpData] = useState([]);
  let [loginData, setLoginData] = useState([]);

  useEffect(() => {
    setLoginData(
      signUpData.filter((e) => e.username).map((m) => ({ username: m.username, password: m.password }))
    );
  }, [signUpData]);

  return (
    <userAuthentication.Provider
      value={{ loginData, setLoginData, signUpData, setSignUpData }}
    >
      {children}
    </userAuthentication.Provider>
  );
};

export default UserData_Authentication;

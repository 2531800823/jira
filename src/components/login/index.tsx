import React, { FC, FormEvent } from "react";

const apiUrl = import.meta.env.VITE_APP_API_URL;

interface LoginScreenProps {}

const LoginScreen: FC<LoginScreenProps> = (props) => {
  const {} = props;

  const login = (param: { password: string; username: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id={"username"} />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" id={"password"} />
        </div>
        <button type={"submit"}>登录</button>
      </form>
    </div>
  );
};

export default LoginScreen;

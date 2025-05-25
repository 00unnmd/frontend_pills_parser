import React, { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import { LoginPageService } from "./types.ts";

export const useLoginService = (): LoginPageService => {
  const [username, _setUsername] = useState<string>("");
  const [password, _setPassword] = useState<string>("");
  const login = useLogin();
  const notify = useNotify();

  const setUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setUsername(e.target.value);
  };
  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify("Invalid email or password"),
    );
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    handleSubmit,
  };
};

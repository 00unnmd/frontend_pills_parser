import React from "react";

export type LoginPageService = {
  username: string;
  password: string;
  setUsername(e: React.ChangeEvent<HTMLInputElement>): void;
  setPassword(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
};

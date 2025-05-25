import { AuthProvider } from "react-admin";
import { API_URL } from "../utils/constants.ts";

const authProvider: AuthProvider = {
  async login({ username, password }) {
    const request = new Request(`${API_URL}/login`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ username: username, password: password }),
    });

    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error("/login: неверный username или password");
      }

      const { token } = await response.json();
      localStorage.setItem("token", token);

      return Promise.resolve();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Ошибка сети");
      } else {
        throw new Error("/login: неизвестная ошибка при запросе");
      }
    }
  },

  async logout() {
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  async checkError({ status }: { status: number }) {
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      throw new Error("сессия просрочена");
    }

    return Promise.resolve();
  },

  async checkAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("токен авторизации не найден, требуется аутентификация");
    }

    return Promise.resolve();
  },
};

export default authProvider;

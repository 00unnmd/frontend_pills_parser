export const getAuthHeader = (contentType?: string): Headers => {
  const headers = new Headers();
  const token = localStorage.getItem("token");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  if (contentType) {
    headers.set("Content-Type", contentType);
  }

  return headers;
};

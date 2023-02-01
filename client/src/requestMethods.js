import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE2MGUwZTk0YTQwZDA2M2FkNDJhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTI1MzUzMSwiZXhwIjoxNjc1NTEyNzMxfQ.Kw0_O4jTiYPTvxyAMYcDSs3mXvGJhX9Br9SAgwZDnlY";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

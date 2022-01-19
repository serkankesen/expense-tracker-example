import axios from "axios";
const apiEndpoint = "http://localhost:3001/";

export const fetch = async (url) => await axios.get(apiEndpoint + url);

export const fetchSingle = async (id, url) =>
  await axios.get(`${apiEndpoint}${url}/${id}`);

export const createData = async (data, url) =>
  await axios.post(apiEndpoint + url, data);

export const updateData = async (id, updated, url) =>
  await axios.patch(`${apiEndpoint}${url}/${id}`, updated);

export const deleteData = async (id, url) =>
  await axios.delete(`${apiEndpoint}${url}/${id}`);

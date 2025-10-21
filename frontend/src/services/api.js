import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getProjects = () => axios.get(`${BASE_URL}/projects`);
export const getSkills = () => axios.get(`${BASE_URL}/skills`);
export const postContact = (data) => axios.post(`${BASE_URL}/contact`, data);

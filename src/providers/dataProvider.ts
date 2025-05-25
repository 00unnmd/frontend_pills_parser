import { DataProvider, fetchUtils } from "react-admin";
import { API_URL } from "../utils/constants.ts";
import { getAuthHeader } from "../utils/authHeader.ts";

const dataProvider: DataProvider = {
  async getList(resource, params) {
    const { pagination, sort, filter } = params;

    const query = {
      page: String(pagination?.page ?? 1),
      perPage: String(pagination?.perPage ?? 1),
      sort: sort?.field ?? "name",
      order: sort?.order ?? "ASC",
      filter: filter.q ?? "",
    };

    const url = `${API_URL}/${resource}?${new URLSearchParams(query).toString()}`;
    return fetchUtils
      .fetchJson(url, {
        method: "GET",
        headers: getAuthHeader(),
      })
      .then(({ json }) => ({
        data: json.data,
        total: json.total,
      }));
  },

  async getOne() {
    return Promise.reject(new Error("getOne not implemented"));
  },
  async getMany() {
    return Promise.reject(new Error("getMany not implemented"));
  },
  async getManyReference() {
    return Promise.reject(new Error("getManyReference not implemented"));
  },
  async update() {
    return Promise.reject(new Error("update not implemented"));
  },
  async updateMany() {
    return Promise.reject(new Error("updateMany not implemented"));
  },
  async create() {
    return Promise.reject(new Error("create not implemented"));
  },
  async delete() {
    return Promise.reject(new Error("delete not implemented"));
  },
  async deleteMany() {
    return Promise.reject(new Error("deleteMany not implemented"));
  },
};

export default dataProvider;

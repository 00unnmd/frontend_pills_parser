import { DataProvider, fetchUtils } from "react-admin";
import { API_URL } from "../utils/constants.ts";
import { getAuthHeader } from "../utils/authHeader.ts";
import { PillsOptions } from "../components/PillsTable/TableFilters/types.ts";
import { ExportPillsXLSX } from "../types/export-xlsx.ts";

export interface MyDataProvider extends DataProvider {
  getPillsOptions: () => Promise<PillsOptions>;
  exportPillsXLSX: () => Promise<ExportPillsXLSX>;
}

const dataProvider: MyDataProvider = {
  async getList(resource, params) {
    const { pagination, sort, filter } = params;
    const query = {
      page: String(pagination?.page ?? 1),
      perPage: String(pagination?.perPage ?? 1),
      sort: sort?.field ?? "createdAt",
      order: sort?.order ?? "DESC",
    };
    const parameters = new URLSearchParams(query);

    // preparing table params
    Object.entries(filter).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => parameters.append(key, item));
      } else {
        if (typeof value === "string" && value.length) {
          parameters.append(key, value);
        }
      }
    });

    const url = `${API_URL}/${resource}?${parameters.toString()}`;
    const options = {
      method: "GET",
      headers: getAuthHeader(),
    };

    try {
      const response = await fetchUtils.fetchJson(url, options);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`getPillsPills HTTP error! status: ${response.status}`);
      }

      return Promise.resolve(response.json);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Ошибка сети");
      } else {
        throw new Error(`getPillsList unknown err: ${error}`);
      }
    }
  },

  async getPillsOptions() {
    const url = `${API_URL}/pills/options`;
    const options = {
      method: "GET",
      headers: getAuthHeader(),
    };

    try {
      const response = await fetchUtils.fetchJson(url, options);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(
          `getPillsOptions HTTP error! status: ${response.status}`,
        );
      }

      return Promise.resolve(response.json);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Ошибка сети");
      } else {
        throw new Error(`getPillsOptions unknown err ${error}`);
      }
    }
  },

  async exportPillsXLSX() {
    const url = `${API_URL}/pills/export`;
    const options = {
      method: "GET",
      headers: getAuthHeader(),
    };
    const request = new Request(url, options);

    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentDisposition = response.headers.get("Content-Disposition");
      const filename =
        contentDisposition?.split("filename=")[1].replace(/"/g, "") ||
        "parsing.xlsx";
      const blob = await response.blob();

      return Promise.resolve({
        blob,
        filename,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Ошибка сети");
      } else {
        throw new Error(`exportPillsXLSX export failed: ${error}`);
      }
    }
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

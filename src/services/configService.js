import api from "../api/axios";

export const getConfig =
  async () => {

    const res =
      await api.get(
        "/config"
      );

    return res.data;
};
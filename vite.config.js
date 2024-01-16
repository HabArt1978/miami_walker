export const baseUrl = (path = "") => `/miami_walker${path || "/"}`;

/** @type {import('vite').UserConfig} */
export default {
  base: baseUrl(),
};

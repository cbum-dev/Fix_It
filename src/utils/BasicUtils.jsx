export const extractRepoName = (url) => {
  const parts = url.split("/");
  return parts[4];
};

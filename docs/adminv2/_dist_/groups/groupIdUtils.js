export const getId = pathname => {
  const pathParts = pathname.substr(1).split("/");
  return pathParts.length > 1 ? pathParts.splice(2) : undefined;
};
export const getLastId = pathname => {
  const pathParts = getId(pathname);
  return pathParts ? pathParts[pathParts.length - 1] : undefined;
};
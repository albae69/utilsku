const isFile = (file) => {
  if ("File" in window && file instanceof File) return true;
  else return false;
};
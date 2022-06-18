function validator(obj) {
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const versions = ["HTTP/0.9", "HTTP/0.9", "HTTP/1.1", "HTTP/2.0"];
  const uriPattern = /^[\w.]+$/;
  const messagePattern = /([<>\\&"'])/;

  if (!obj.method || !methods.includes(obj.method)) {
    throw Error("Invalid request header: Invalid Method");
  }
  if (!obj.uri || obj.uri == "" || !uriPattern.test(obj.uri)) {
    throw Error("Invalid request header: Invalid URI");
  }
  if (!obj.version || !versions.includes(obj.version)) {
    throw Error("Invalid request header: Invalid Version");
  } else if (obj.message == undefined || messagePattern.test(obj.message)) {
    throw Error("Invalid request header: Invalid Message");
  }

  return obj;
}
// validator({
//   method: "GET",
//   uri: "svn.public.catalog",
//   version: "HTTP/1.1",
//   message: "",
// });

validator({
  method: "OPTIONS",
  uri: "git.master",
  version: "HTTP/1.1",
  message: "-recursive",
});

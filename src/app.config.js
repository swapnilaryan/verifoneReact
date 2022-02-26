const API_SERVER = {
  host: "http://localhost:8080"
}

const URL = {
  getAllProducts: "/api/getAllProducts",
  signIn: "/api/auth/signin",
  signOut: "/api/auth/signout",
  signUp: "/api/auth/signup"
}

const getUrl = (service) => {
  return API_SERVER.host + URL[service]
}

export{
  getUrl
}

import {getUrl} from "./app.config";

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    fetch(getUrl("getAllProducts"), {
      credentials: 'include',
    }).then((resp) => resp.json()).then((data) => {
      if(data.error) {
        return reject(data);
      }
      return resolve(data)
    }).catch((error) => {
      console.error('Error:', error);
      return reject("Something went wrong");
    });
  })
}

const signIn = (username, password) => {
  return new Promise((resolve, reject) => {
    fetch(getUrl("signIn"), {
      credentials: 'include',
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then((resp) => {
      return resp.json()
    }).then((data) => {
      if(data.error) {
        return reject(data);
      }
      return resolve(data)
    }).catch((error) => {
      console.error('Error:', error);
      return reject("Something went wrong");
    });
  });
}

const signUp = (username, password, email) => {
  return new Promise((resolve, reject) => {
    fetch(getUrl("signUp"), {
      credentials: 'include',
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        email
      },)
    }).then((resp) => {
      return resp.json()
    }).then((data) => {
      if(data.error) {
        return reject(data);
      }
      return resolve(data)
    }).catch((error) => {
      console.error('Error:', error);
      return reject("Something went wrong");
    });
  });
}

const signOut = () => {
  return new Promise((resolve, reject) => {
    fetch(getUrl("signOut"), {
      credentials: 'include'
    }).then((resp) => resp.json()).then((data) => {
      if(data.error) {
        return reject(data);
      }
      return resolve(data)
    }).catch((error) => {
      console.error('Error:', error);
      return reject("Something went wrong");
    });
  });
}

export  {
  signOut,
  signUp,
  signIn,
  getAllProducts
}
export default class FetchWrapper {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    get(endpoint) {
      return this._send("get", endpoint);
    }
  
    put(endpoint, body) {
      return this._send("put", endpoint, body);
    }
  
    post(endpoint, body) {
      return this._send("post", endpoint, body);
    }
  
    patch(endpoint, body) {
      return this._send("patch", endpoint, body);
    }
  
    delete(endpoint, body) {
      return this._send("delete", endpoint, body);
    }
  
    _send(method, endpoint, body) {
      return fetch(this.baseURL + endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      }).then((response) => response.json());
    }
  }
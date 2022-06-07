import * as Hapi from "@hapi/hapi"
import * as crypto from "node:crypto"

interface payload {
  username: string,
  password: string
}

export default function RouteRegister(server: Hapi.Server) {
  server.route({
    method: "GET",
    path: "/",
    handler: (req, res) => {
      return {
        "message": "Hello, World"
      }
    }
  })
  
  server.route({
    path: "/users/{name}",
    method:"*",
    handler: (req, res) => {
      const {name} = req.params;
      return {
        "status": "OK",
        username: name
      }
    }
  })

  server.route({
    path: "/search",
    method: "GET",
    handler: (req, res) => {
      const {q} = req.query;

      return {
        status: "OK",
        query: q
      }
    }
  })

  server.route({
    path: "/login",
    method: "POST",
    handler: (req,res) => {
      const {username, password} = req.payload as payload;
      const hash = crypto.createHash("sha512");

      return {
        status: "OK",
        message: username,
        password_hash: hash.update(password, "utf-8").digest("base64")
      }
    }
  })

  server.route({
    path: "/{a*}", // Bebas penandanya
    method: "*",
    handler: (req, res)=> {
      return {
        "status": "KO",
        "message": "Not Found"
      }
    } 
   })
}
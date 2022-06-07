import * as Hapi from "@hapi/hapi"

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
    path: "/about",
    method:"*",
    handler: (req, res) => {
      return {
        "message": "About Page"
      }
    }
  })

  server.route({
    path: "/{any*}",
    method: "*",
    handler: (req, res)=> {
      return {
        "status": "KO",
        "message": "Not Found"
      }
    } 
   })
}
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
  
}
import * as Hapi from "@hapi/hapi"
import RouteRegister from "./route";

async function server(){
  const server = Hapi.server({
    host: "localhost",
    port: 5000
  })
  
  RouteRegister(server)
  
  await server.start();
  
  console.log(`Server berjalan pada ${server.info.uri}`)
}

server();
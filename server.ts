import app from "./src/app.ts";
import {config} from "./config/config.ts"

export const runServer = () => {
    const PORT = config.PORT || 4000;
    app.listen(PORT, ()=>{
        console.log(`Server Is Up And Running At PORT - ${PORT}`)
    })
} 

runServer()
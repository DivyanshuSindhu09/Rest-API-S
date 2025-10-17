import app from "./src/app.ts";
import {config} from "./config/config.ts"
import connectDB from "./config/databse.ts";

export const runServer = async () => {
    await connectDB()
    const PORT = config.PORT || 4000;
    app.listen(PORT, ()=>{
        console.log(`Server Is Up And Running At PORT - ${PORT}`)
    })
} 

runServer()
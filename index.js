import { app } from "./src/app.js";
import { APP_URL, PORT } from "./src/constants.js";
app.listen(PORT, (_, res) => {
    console.log(`Server is running ${APP_URL}:${PORT}`);
    
})
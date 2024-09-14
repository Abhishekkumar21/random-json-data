import { conf } from "./src/config/index.js";
import app from "./app.js"

app.listen(conf.port, () => {
    console.log(`Server is running on port : ${conf.port}`);
})

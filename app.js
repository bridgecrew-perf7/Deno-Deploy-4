import {
    Application,
    HttpServerStd
} from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.js";

const app = new Application({
    serverConstructor: HttpServerStd
});

app.use(router.routes());

export default app;
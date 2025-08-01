import app from "./app.js";

app.listen(process.env.PORT || 35000);

console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`);

import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  return response.json({
    msg: "Hello World"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

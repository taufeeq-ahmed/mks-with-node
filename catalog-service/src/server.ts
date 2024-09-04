import app from "./app";

const port = process.env.PORT || 3000;

export const startServer = () => {
  app.listen(port, () => {
    console.log("✅ catalog service is up @ " + port);
  });
};

startServer();

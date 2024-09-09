import app from "./app";
import { logger } from "./utils";

const port = process.env.PORT || 3000;

export const startServer = async () => {
  app.listen(port, () => {
    console.log("✅ CATALOG_SERVICE IS UP @:" + port);
  });

  process.on("uncaughtException", async (err) => {
    logger.error(err);
    process.exit(1);
  });
};

startServer().then(() => {
  logger.info("SERVER IS UP");
});

require("dotenv").config({ quiet: true });

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    const server = app.listen(PORT, () => {
      console.log(`🚀 iTube Server is running on http://localhost:${PORT}`);
    });

    const shutdown = (signal) => {
      console.log(`\n${signal} received. Closing server and MongoDB connection...`);
      server.close(async () => {
        await require("mongoose").connection.close();
        process.exit(0);
      });
    };

    process.once("SIGINT", () => shutdown("SIGINT"));
    process.once("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exitCode = 1;
  }
};

startServer();

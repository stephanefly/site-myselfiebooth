import { existsSync, rmSync } from "node:fs";

const buildFolders = [".next", "out"];

for (const folder of buildFolders) {
  if (!existsSync(folder)) {
    continue;
  }

  try {
    rmSync(folder, {
      force: true,
      maxRetries: 3,
      recursive: true,
      retryDelay: 200,
    });
    console.log(`Cleaned ${folder}`);
  } catch (error) {
    console.error(`Impossible de nettoyer ${folder}.`);
    console.error(
      "Fermez les serveurs Next.js, PyCharm ou tout terminal qui utilise le projet, puis relancez npm run build."
    );
    console.error(error.message);
    process.exitCode = 1;
  }
}

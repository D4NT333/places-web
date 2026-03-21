// services/logService.js

// Generador random simple
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const types = ["CREATE", "UPDATE", "DELETE", "ERROR", "INFO"];
const users = ["admin", "moderator", "system", "reviewer"];

function generateLog(id) {
  return {
    id: id.toString(),
    type: randomItem(types),
    message: "Actividad generada automáticamente",
    user: randomItem(users),
    createdAt: new Date(Date.now() - Math.random() * 100000000),
  };
}

// Simula delay (como backend real)
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getRecentActivityLogs(limitCount = 10) {
  try {
    await sleep(300); // simula red

    const logs = Array.from({ length: limitCount }, (_, i) =>
      generateLog(i + 1)
    );

    // ordenar por fecha DESC (como Firestore)
    return logs.sort((a, b) => b.createdAt - a.createdAt);
  } catch (error) {
    console.error("Error mock logs:", error);
    return [];
  }
}
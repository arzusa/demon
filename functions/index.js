const {onCall, HttpsError} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();

const defaultPlayerData = {
  profile: {
    maxhp: 100,
    curhp: 100,
    maxmana: 50,
    curmana: 50,
    level: 1,
    exp: 0,
  },
  inventory: {
    "item_001": {
      id: "knife",
      name: "มีดพื้นฐาน",
      amount: 1,
      type: "weapon",
    },
  },
};

exports.getPlayerData = onCall(async (request) => {
  // 1. Authentication Check
  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "The function must be called while authenticated.",
    );
  }

  const uid = request.auth.uid;
  const userRef = admin.database().ref(`users/${uid}`);

  try {
    const snapshot = await userRef.once("value");

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      // Initialize new player
      await userRef.set(defaultPlayerData);
      return defaultPlayerData;
    }
  } catch (error) {
    console.error("Error initializing player data:", error);
    throw new HttpsError(
      "internal",
      "Internal server error while initializing player data.",
    );
  }
});

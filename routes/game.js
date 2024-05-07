gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  sendUpdatedGames
);
gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  sendUpdatedGames
);

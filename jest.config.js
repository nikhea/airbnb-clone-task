/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest}*/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$",
    "<rootDir>/public/images/air\\.webp$", // add this line to exclude the image file
  ],
};

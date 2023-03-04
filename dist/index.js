#!/usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const welcomeTitle = chalkAnimation.rainbow("Test Your Knowledge about Valorant and earn a Spotify Playlist of Valorant Songs \n");
    await sleep();
    welcomeTitle.stop();
    console.log(`
    ${chalk.bgBlue("How to Play \n")}
    Choose a option from the given options
    If your answer is right you will be given a ${chalk.bgHex("#6461c2")("nice looking pic")},
    which you can even set as your social media pp XD jk 🙃
    So ${chalk.red("Bina Kisi Bakchodi ke")} , ${chalk.green("Lets get Started")}
  `);
}
welcome();
//# sourceMappingURL=index.js.map
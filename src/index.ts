#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { questionList } from "./questions.js";

console.log(questionList[0].questionMessage);

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const welcomeTitle = chalkAnimation.rainbow(
    "Test Your Knowledge about Valorant and earn a Spotify Playlist of Valorant Songs \n"
  );
  await sleep();
  welcomeTitle.stop();

  console.log(`
    ${chalk.bgBlue(" How to Play \n")}
    Choose a option from the given options 🔠,
    If your answer is right you will be given a ${chalk.bgHex("#6461c2")(
      " nice looking pic "
    )},
    which you can even set as your social media pp XD jk 🙃,
    dead simple right? 💀
    So ${chalk.red("Bina Kisi Bakchodi ke")} , ${chalk.green(
    "Lets get Started"
  )}
  `);
}

async function askName() {
  const name = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your username ?",
    default() {
      return "Noob-Player";
    },
  });

  playerName = name.player_name;
}

async function question() {}

await welcome();
await askName();

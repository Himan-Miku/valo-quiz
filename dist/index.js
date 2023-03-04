#!/usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { questionList } from "./questions.js";
// console.log(questionList[0].questionMessage);
let playerName;
const question1 = [questionList[0], questionList[1]];
const question2 = [questionList[2], questionList[3]];
const question3 = [questionList[4], questionList[5]];
const question4 = [questionList[6], questionList[7]];
const question5 = [questionList[8], questionList[9]];
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const lessSleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const welcomeTitle = chalkAnimation.rainbow("Test Your Knowledge about Valorant and earn a Spotify Playlist of Valorant Songs \n");
    await sleep();
    welcomeTitle.stop();
    console.log(`
    ${chalk.bgBlue(" How to Play \n")}
    Choose a option from the given options 🔠,
    If your answer is right you will be given a ${chalk.bgHex("#6461c2")(" nice looking pic ")},
    which you can even set as your social media pp XD jk 🙃,
    dead simple right? 💀
    So ${chalk.red("Bina Kisi Bakchodi ke")} , ${chalk.green("Lets get Started")}
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
function randomQuestion(chooseQue) {
    let randomQuestionNumber = Math.floor(Math.random() * 2);
    return chooseQue[randomQuestionNumber];
}
async function question_1() {
    const ranQ = randomQuestion(question1);
    const { questionMessage, options, ans } = ranQ;
    const answer = await inquirer.prompt({
        name: "question_valo",
        type: "list",
        message: questionMessage,
        choices: options,
    });
    return handleAnswer(answer.question_valo == ans);
}
async function question_2() {
    const ranQ = randomQuestion(question2);
    const { questionMessage, options, ans } = ranQ;
    const answer = await inquirer.prompt({
        name: "question_valo",
        type: "list",
        message: questionMessage,
        choices: options,
    });
    return handleAnswer(answer.question_valo == ans);
}
async function question_3() {
    const ranQ = randomQuestion(question3);
    const { questionMessage, options, ans } = ranQ;
    const answer = await inquirer.prompt({
        name: "question_valo",
        type: "list",
        message: questionMessage,
        choices: options,
    });
    return handleAnswer(answer.question_valo == ans);
}
async function question_4() {
    const ranQ = randomQuestion(question4);
    const { questionMessage, options, ans } = ranQ;
    const answer = await inquirer.prompt({
        name: "question_valo",
        type: "list",
        message: questionMessage,
        choices: options,
    });
    return handleAnswer(answer.question_valo == ans);
}
async function question_5() {
    const ranQ = randomQuestion(question5);
    const { questionMessage, options, ans } = ranQ;
    const answer = await inquirer.prompt({
        name: "question_valo",
        type: "list",
        message: questionMessage,
        choices: options,
    });
    return handleAnswer(answer.question_valo == ans);
}
async function handleAnswer(isCorrect) {
    const spinner = createSpinner("Checking answer...").start();
    await sleep();
    if (isCorrect) {
        spinner.success({
            text: `Nice Job ${playerName} 👍. that's a legit answer!\n`,
        });
    }
    else {
        spinner.error({ text: `Game Over ${playerName}, You are a Noob 💀` });
        process.exit(1);
    }
}
function winner() {
    console.clear();
    const winnerMsg = `Well Played ${playerName},\n ggez!`;
    figlet(winnerMsg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}
await welcome();
await askName();
await question_1();
await lessSleep();
await question_2();
await lessSleep();
await question_3();
await lessSleep();
await question_4();
await lessSleep();
await question_5();
await lessSleep();
await winner();
//# sourceMappingURL=index.js.map
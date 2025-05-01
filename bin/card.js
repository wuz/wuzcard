#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import { Chalk, supportsColor } from "chalk";
import boxen from "boxen";

// Load our data
const {
	name,
	handle,
	tagline,
	jobTitle,
	company,
	twitter,
	github,
	linkedin,
	web,
	card,
	email,
} = {
	handle: "wuz",
	name: "Conlin Durbin",
	tagline: "✨ Typescripter. TTRPG-er. ✨",
	jobTitle: "Senior Frontend Engineer",
	company: "Whatnot",
	web: "wuz.sh",
	twitter: "itswuz",
	bsky: "wuz.sh",
	github: "wuz",
	linkedin: "wuz",
	card: "wuz",
	email: "c@wuz.sh",
};

const chalk = new Chalk({ level: 2 });

// Text + chalk definitions
const boxData = {
	handle: chalk.magenta.bold(handle),
	name: chalk.magenta(name),
	email: chalk.yellow(email),
	work: chalk.white.bold(jobTitle) + " at " + chalk.yellow.bold(company),
	tagline: chalk.magenta(tagline),
	twitter: chalk.cyan.bold(twitter),
	github: chalk.red.bold(github),
	bsky: chalk.blue.bold(github),
	linkedin: chalk.green.bold(linkedin),
	web: chalk.yellow.bold(web),
	npx: chalk.white.bold(card),
	urlTwitter: chalk.dim("https://twitter.com/"),
	urlBsky: chalk.dim("https://bsky.app/profile/"),
	urlGithub: chalk.dim("https://github.com/"),
	urlLinkedIn: chalk.dim("https://linkedin.com/in/"),
	urlWeb: chalk.dim("https://"),
	labelWork: chalk.blue(" work".padEnd(9, " ")),
	labelTwitter: chalk.blue(" twitter".padEnd(9, " ")),
	labelBsky: chalk.blue(" bluesky".padEnd(9, " ")),
	labelGitHub: chalk.blue(" github".padEnd(9, " ")),
	labelLinkedIn: chalk.blue(" linkedin".padEnd(9, " ")),
	labelWeb: chalk.blue(" web".padEnd(9, " ")),
	labelEmail: chalk.blue(" email".padEnd(9, " ")),
	separator: chalk.dim("::"),
};

// Actual strings we're going to output
const working = `${boxData.labelWork} ${boxData.separator} ${boxData.work}`;
const bskying = `${boxData.labelBsky} ${boxData.separator} ${boxData.urlBsky}${boxData.bsky}`;
const githubing = `${boxData.labelGitHub} ${boxData.separator} ${boxData.urlGithub}${boxData.github}`;
const linkedining = `${boxData.labelLinkedIn} ${boxData.separator} ${boxData.urlLinkedIn}${boxData.linkedin}`;
const webing = `${boxData.labelWeb} ${boxData.separator} ${boxData.urlWeb}${boxData.web}`;
const emailing = `${boxData.labelEmail} ${boxData.separator} ${boxData.email}`;

const title = `${boxData.name} (${boxData.handle})`;

const footer = chalk.dim(
	`      run ${chalk.yellow(`npx wuz`)} anytime to see this card`,
);

// Put all our output together into a single variable so we can use boxen effectively
const output = `
          ${boxData.tagline} 
  
${working}
${webing}
${bskying}
${githubing}
${linkedining}
${emailing}

${footer}
`;

// Define options for Boxen
const options = {
	padding: {
		top: 0,
		bottom: 0,
		left: 1,
		right: 2,
	},
	margin: 1,
	borderStyle: "round",
	borderColor: "yellow",
	title,
	titleAlignment: "center",
};

console.log(boxen(output, options));

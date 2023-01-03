#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import { Chalk, supportsColor } from 'chalk';
import boxen from 'boxen';

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
  card
} = {
  handle: "wuz",
  name: "Conlin Durbin",
  tagline: "✨ has-been wizard ✨",
  jobTitle: "Tech Lead Manager",
  company: "Agora/Payscale",
  web: "wuz.sh",
  twitter: "wuz_tweets",
  insta: "wuz_snaps",
  github: "wuz",
  linkedin: "wuz",
  card: "wuz"
};

const chalk = new Chalk({level: 2});


// Text + chalk definitions
const boxData = {
  handle: chalk.magenta.bold(handle),
  name: chalk.magenta(name),
  work: chalk.white.bold(jobTitle) + " at " + chalk.green.bold(company),
  tagline: chalk.magenta(tagline),
  twitter: chalk.cyan.bold(twitter),
  github: chalk.red.bold(github),
  linkedin: chalk.blue.bold(linkedin),
  web: chalk.yellow.bold(web),
  npx: chalk.white.bold(card),
  urlTwitter: chalk.dim('https://twitter.com/'),
  urlGithub: chalk.dim('https://github.com/'),
  urlLinkedIn: chalk.dim('https://linkedin.com/in/'),
  urlWeb: chalk.dim('https://'),
  labelWork: chalk.white('Work:'.padStart(9, ' ')),
  labelTwitter: chalk.white('Twitter:'.padStart(9, ' ')),
  labelGitHub: chalk.white('GitHub:'.padStart(9, ' ')),
  labelLinkedIn: chalk.white('LinkedIn:'),
  labelWeb: chalk.white('Web:'.padStart(9, ' ')),
  labelCard: chalk.white('Card:'.padStart(9, ' '))
}

// Actual strings we're going to output
const working = `${boxData.labelWork}  ${boxData.work}`
const twittering = `${boxData.labelTwitter}  ${boxData.urlTwitter}${boxData.twitter}`
const githubing = `${boxData.labelGitHub}  ${boxData.urlGithub}${boxData.github}`
const linkedining = `${boxData.labelLinkedIn}  ${boxData.urlLinkedIn}${boxData.linkedin}`
const webing = `${boxData.labelWeb}  ${boxData.urlWeb}${boxData.web}`
const carding = `${boxData.labelCard}  ${chalk.red('npx')} ${boxData.npx}`


const title = `${boxData.name} ${chalk.gray.dim("\\\\")} ${boxData.handle}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = `
              ${boxData.tagline} 
  
${working}
${webing}
${twittering}
${githubing}
${linkedining}
${carding}
`;

// Define options for Boxen
const options = {
  padding: {
    top: 0,
    bottom: 1,
    left: 1, 
    right: 2,
  },
  margin: 1,
  borderStyle: 'round',
  borderColor: 'magenta',
  title,
  titleAlignment: 'center',
}

console.log(boxen(output, options));

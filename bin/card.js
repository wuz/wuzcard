#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Conlin Durbin'),
  handle: chalk.magenta.bold('wuz'),
  work: chalk.white.bold('Frontend software engineer at ') + chalk.green.bold('HackerRank'),
  twitter: chalk.cyan.bold('https://twitter.com/CallMeWuz'),
  github: chalk.red.bold('https://github.com/wuz'),
  linkedin: chalk.blue.bold('https://linkedin.com/in/wuz'),
  web: chalk.yellow.bold('https://wuz.sh'),
  npx: chalk.white.bold('npx wuz'),
  labelWork: chalk.white('      Work:'),
  labelTwitter: chalk.white('   Twitter:'),
  labelGitHub: chalk.white('    GitHub:'),
  labelLinkedIn: chalk.white('  LinkedIn:'),
  labelWeb: chalk.white('       Web:'),
  labelCard: chalk.white('      Card:')
}

// Actual strings we're going to output
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = `
                           ${data.handle}
                  a.k.a. ${data.name}

                  ✨ has-been wizard ✨
  
  ${working}
  ${twittering}
  ${githubing}
  ${linkedining}
  ${webing}
  ${carding}
`;

console.log(chalk.magenta(boxen(output, options)))

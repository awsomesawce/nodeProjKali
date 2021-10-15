// Using github's octokit and dotenv

const resultConfig = require('dotenv').config()
if (resultConfig.error) {
    throw resultConfig.error
}

const { Octokit, App } = require('octokit');
const fs = require('fs')
const { parse, resolve } = require('path')

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });

console.log(resultConfig);

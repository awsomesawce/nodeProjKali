// Using import with dotenv and octokit

import { Octokit, App } from 'octokit';
import * as fs from 'fs';
import { parse, resolve } from 'path';

const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });

console.log(octokit);

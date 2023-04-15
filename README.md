commitizen

Commitizen is a popular command-line tool used to standardize commit messages in a Git repository. It helps teams follow a consistent commit message format and makes it easier to understand the purpose of each commit. Here's how you can implement Commitizen in a React codebase:

Step 1: Install Commitizen
npm install -g commitizen
Step 2: Install Commitizen Adapter for Conventional Commits
npm install cz-conventional-changelog 
--save-dev

Step 3: Create a Configuration File
{  "path": "cz-conventional-changelog" }

Step 4: Add Commitizen Script to Your Package.json
"scripts" :{ "commit" : "git-cz" }

Step 5: Commit using Commitizen
Now you can use the Commitizen script to create commits with standardized commit messages. Instead of using git commit, you can run npm run commit or yarn commit in your terminal. Commitizen will prompt you to enter information about your commit, such as the type of change (e.g., feat, fix, docs), the affected scope, and a brief description. It will then generate a commit message that follows the Conventional Commits format.

By using Commitizen in your React codebase, you can ensure that all commits follow a consistent format, making it easier to understand the purpose of each commit and maintain a clean commit history.

set NODE_OPTIONS=--openssl-legacy-provider

Add the following to your settings.json file:

```
"editor.formatOnSave": true

```
# Requirements
## Project Setup
First, download the most recent version of Node from [here](https://nodejs.org/en/download/).  
Then download _yarn_ by typing this, into a command line:
```shell
$> npm i -g yarn
```
After that, download _expo_ using _yarn_ as follows:
```shell
$> yarn global add expo-cli
```
Now, inside the repo root directory, run the following command to install dependencies:
```shell
$> yarn install
```
Finally, inside the repo root directory, type the following to start _expo_:
```shell
$> expo start
``` 
### VCS
To prevent `App.js` from being added and committed to the repo while developing, type the following command inside repo root directory:
```shell
$> git update-index --skip-worktree App.js
```
> To cancel this command, type: 
> ```shell
> $> git update-index --no-skip-worktree App.js
> ```

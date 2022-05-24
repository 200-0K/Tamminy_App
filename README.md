## An AI-Based Cross-Platform Disease Calssification App

<div align="center">
  <img src="https://user-images.githubusercontent.com/38166228/170149143-22c5d992-bf12-493d-9a14-dea2f86f3aba.jpg" width="200">
  <img src="https://user-images.githubusercontent.com/38166228/170149758-004b8aeb-d605-40fa-9d7b-480114466d8c.jpg" width=200>
  <img src="https://user-images.githubusercontent.com/38166228/170149762-ebc2cd16-a09b-42e9-be57-2078bba70ef9.jpg" width=200>
  <img src="https://user-images.githubusercontent.com/38166228/170149763-cb84ea1d-4924-472c-8732-f6bc4663c34b.jpg" width=200>
  <img src="https://user-images.githubusercontent.com/38166228/170149764-bb1db9ec-3b5c-41aa-b6da-3dae7f3947ab.jpg" width=200>
  <img src="https://user-images.githubusercontent.com/38166228/170149766-6a7f7f32-8287-40fe-922c-80071f124398.jpg" width=200>
</div>
  
## Development Requirements
### Project Setup
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
#### VCS
To prevent `App.js` from being added and committed to the repo while developing, type the following command inside repo root directory:
```shell
$> git update-index --skip-worktree App.js
```
> To cancel this command, type: 
> ```shell
> $> git update-index --no-skip-worktree App.js
> ```
#### Tests
To run the tests, run the following inside repo root directory:
```shell
$> yarn test
```

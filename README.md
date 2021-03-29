# Brave_BAT_Bot

### How to use
#### Linux
This project requires a valid [Git Lfs](https://git-lfs.github.com/) setup.

```
git clone https://github.com/bleszerd/Brave_BAT_Bot
```
- navigate to `src/Browser` folder and unzip `brave_browser.zip` file.
- navigate to `src/InstancesData` folder and unzip `bbb_profile-bbbX.zip` file.
- change extracted folder name `bbb_profile-bbbX` to `bbb_profile-bbb1`.
- duplicate `bbb_profile-bbb1` to `bbb_profile-bbb2`, `bbb_profile-bbb3`... based on quantity of workers you want.
- open file `src/index.ts` and change `workers` prop (line 5) to quantity of workers you want.
- run `yarn` or `npm install` on root of project to install all dependencies.
- run `yarn build:run` or `npm run build:run` to compile and run the projet.
- Done!

### What is _Worker_ ?
A worker is a instance of Brave browser to get IDLE Basic Attention Token (BAT). A single worker use a lot of memory, highest worker values can freeze your PC if there was less than 8GB of RAM. Be carefull!

### Minimun system requeriments
- **5 Workers**
    - 4Gb RAM DDR3
    - A dual core processor, like Intel Core i3 6° gen
    - Linux OS, like Manjaro
 
 - **10 Workers**
    - 8Gb RAM DDR3
    - A dual core processor, like Intel Ccore i3 6° gen
    - Linux OS, like Manjaro
   
- **12 Workers or more**
    - 16Gb RAM DDR3
    - A six core processor, like AMD Ryzen 5 3600
    - Linux OS, like Manjaro
    
On tests, AMD Processors appears better!

**Does this project hurt your company's conditions? Please contact alive2k@programmer.net**

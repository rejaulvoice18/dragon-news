// login kora na thaka obostai news er readmore a click korle login page a niye jabe aivabe e kora hoiche programing
// aita shvabik but login hoye jauar por uer k read more a niye jaua dorkar but sheta hochhe nah
// aita ekta bad experience, toh er jonno kichu kaj korte hobe jeno login hour sathe sathe user k readmore a niye jai
// 1st step: PrivateRoute a useLocation() theke pathname ta location variable use kore oi readmore news er exact path ta k dhorte hobe
// 2nd step: tar por location.pathname ta k Navigate er madhome state props use kore login page patha te hobe
// 3rd step: tar por login page a useLocation hook ta use korle location variable a rakha pathname ta pabo
// tarpor useNavigate use kore conditionally readmore ta dekhabo
// jodi location a state props ta thake taile readmore a jabe noyto home a jabe
// condition ta hobe ai rokom navigate(location?.state ? location.state : "/")

// error validation / login error dekhanur jonno ekta state set korte hobe

// Update user profile name and photo url

// Hiding Environment variables

// create env in vite react to hide the firebase api key or confidential data

// ai link a details bola aache https://vite.dev/guide/env-and-mode

// 1st step: create a .env.local in root folter 
// 2nd step: env.local er vitor amader credential gula rakhbo to not push in github
// 3rd step: credential difine korte hole VITE_  aita likhe shuro korte hobe
// 4th step: tarpor firebase.config.js er vitor import.meta.env code er por .env.local er vitor theke 
// VITE_ diye j nam gula aache oigula bosate hobe

// Final part hoche Project Deploy kora

// Hosting korar jonno nicher step gaul follow korte hobe

// 1st Step: Firebase console er lefte side theke Build er vitor theke Hosting select kore Get started a click korte hobe
// 2nd step: 'npm install -g firebase-tools' aita install korte hobe, aita 1 bar e install kora lage bar bar nah
// aita install hoye gele CLI er madhome deploy kora jay
// -g means globally r aita install hobe node a project a nah
// 3rd step: 'firebase login' korte hobe termal a er por CLI ekta message diye jante chaibe proceed korbo ki nah yes er jonno y press korbo
// tarpor cli ekta link dibe oi link a click korle j email a project ta aache oita seleck kore login korte hobe
// er por firebase init korte hobe, firebase init korar madhome amar project a besh kichu file toyari korbe, jate se porbortite deploy korte pare
// 4th step: protita project er jonno 'firebase init' ekbar kore dite hobe
// tar por se jiggesh korbe ami ready aachi ki nah
// 5th step: kiche list diye bolbe ami ki korte chail oita select korte 
// slelect korte chail keyborad er arrow key use kore Hosting a giye space bar press korle select hoye jabe and enter press korte hobe
// 6th step: tar por se abar jiggesh korbe ami ki korte chai sei khan theke seleck korbo use an existing project
// tar por existing project er list dibe oikhan theke jeita deploy korte chai oita selelct korte hobe
// tar por se jiggesh korbe tumar public directory ki hobe tokhon ami likhbo dist, and press enter
// dist hobe amar public directoy
// tar por jiggesh korbe aita ki single page application hobe ki nah, ami press korbo y
// tar por jiggesh korbe amai ki github er madhome automatic deploy korbo ki nah, ami bolbo no and press n
// tar por kich  file create kore bollbe firebase initialization complete
// tar por deploy korar purbe jei jei jaigai console korchi oigula remove korte hobe
// ctrl+shift+f er por console.log likhle sob console log chole asbe
// 7th step: tar por npm run build er madhome project ta build kore nite hobe
// 8th step: build hoye jauar por deploy korbo and er jonno command hochhe 'firebase deploy'
// ai command deuar por npm run build er madhome ja dist folder create hoiche
// oita k se deploy kore felbe
// tar por firebase website er console a relode dile amader deploy krito website er wesite likn show korbe

// website e change korle ta abar re  deploy korar process ta niche deua holo
// prothome npm run build er madhome build kore nite hobe 
// build hoye gele abar 'firebase deploy' command dile deploy hoye jabe


// Ami jodi netlify te deploy korte chai taile login ar signup kaj korbe nah
// karon firebase theke amar domain ka authorisation deua nai tai
// authoraisatin dite hole amak firebase website er console page er left side theke
// Authentication a click korte hobe tar por authorized domains a amar netlify er root link ta diiye add button a click korte hobe





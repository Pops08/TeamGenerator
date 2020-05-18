const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const createPage = require('./src/TeamRoster.js');
const fs = require('fs');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const fullTeam = [];

// Error Catching Function
const funcCallback = (err) => {
    if (err) {
        console.error("An Error Has Occurred & The File Was Not Created!");
    }

    console.log('Success! Team Roster File Has Been Created In The Dist Folder');
}

const createEng = () => {
    console.log(`
    ===========================================================
    Welcome To Build-A-Team. Please Answer Each Question Below
    ===========================================================
    `);

    return inquirer.prompt([
      {
        type: 'input',
        name: 'engName',
        message: 'What Is The Engineers Name?',
        validate: engName => {
            if (engName) {
                return true;
            }
            else {
                return `Engineer Name Is Required!`
            }
        }
      },

      {
        type: 'input',
        name: 'engID',
        message: 'What Is The Engineers ID?',
        validate: engID => {
            if (engID <= 0) {
                return  `Engineers ID Must Be Greater Than 0!`
            }
            else if (engID){
                return true;
            }
            else {
                return `Engineers ID Is Required!`
            }
        }
      },

      {
        type: 'input',
        name: 'engEmail',
        message: 'What Is The Engineers Email?',
        validate: engEmail => {
            if (!(engEmail.match(mailformat)) ) {
                return 'Please Enter A Valid Email'
            }
            else if (engEmail) {
                return true;
            }
            else {
                return `Engineers Email Is Required!`
            }
        }
      },

      {
        type: 'input',
        name: 'engGH',
        message: 'What Is The Engineers GitHub Username?',
        validate: engGH => {
            if (engGH) {
                return true;
            }
            else {
                return `Engineers GitHub Is Required!`
            }
        }
      },

      {
        type: 'list',
        name: 'teamLst',
        message: 'Which Team Member Would You Like To Add?',
        choices: ["Engineer", "Intern", "None. I'm Finished!"]
      },

    ]).then(createTeam => {

        //Create Engineer Object Instance
        const newEngineer = new Engineer(createTeam.engName, createTeam.engID, createTeam.engEmail,createTeam.engGH);

        fullTeam.push(newEngineer);

        if(createTeam.teamLst == "Engineer"){
            //Call Create Engineer Function
            createEng();
        }
        else if (createTeam.teamLst == "Intern") {
            //Call Create Intern Function
            createIntern();
        }
        else {
            //write the file
            const newTR = createPage(fullTeam);
            fs.writeFile('./dist/TeamRoster.html', newTR, funcCallback);
        }
       
    }

    )
}

const createIntern = () => {
    console.log(`
    ===========================================================
    Welcome To Build-A-Team. Please Answer Each Question Below
    ===========================================================
    `);

    return inquirer.prompt([
      {
        type: 'input',
        name: 'intName',
        message: 'What Is The Interns Name?',
        validate: intName => {
            if (intName) {
                return true;
            }
            else {
                return `Interns Name Is Required!`
            }
        }
      },

      {
        type: 'input',
        name: 'intID',
        message: 'What Is The Interns ID?',
        validate: intID => {
            if (intID <= 0) {
                return  `Interns ID Must Be Greater Than 0!`
            }
            else if (intID){
                return true;
            }
            else {
                return `Interns ID Is Required!`
            }
        }
      },

      {
        type: 'input',
        name: 'intEmail',
        message: 'What Is The Interns Email?',
        validate: intEmail => {
            if (!(intEmail.match(mailformat)) ) {
                return 'Please Enter A Valid Email'
            }
            else if (intEmail) {
                return true;
            }
            else {
                return `Interns Email Is Required!`
            }
        }
      },

      {
        type: 'input',
        name: 'intSchool',
        message: 'What School Does The Interns Attend?',
        validate: intSchool => {
            if (intSchool) {
                return true;
            }
            else {
                return `Interns School Is Required!`
            }
        }
      },

      {
        type: 'list',
        name: 'teamLst',
        message: 'Which Team Member Would You Like To Add?',
        choices: ["Engineer", "Intern", "None. I'm Finished!"]
      },

    ]).then(createTeam => {
        //Create Intern Object Instance
        const intern = new Intern(createTeam.intName, createTeam.intID, createTeam.intEmail,createTeam.intSchool);

        //Add Intern Obj To Array
        fullTeam.push(intern);

        if(createTeam.teamLst == "Engineer"){
            //Call The Create Engineer Function
            createEng();
        }
        else if (createTeam.teamLst == "Intern") {
            //Call The Create Intern Function
            createIntern();
        }
        else {
            //write the file
            const newTR = createPage(fullTeam);
            fs.writeFile('./dist/TeamRoster.html', newTR, funcCallback);
        }
       
    }

    )
}


const createManager = () => {
    console.log(`
    ===========================================================
    Welcome To Build-A-Team. Please Answer Each Question Below
    ===========================================================
    `);

    return inquirer.prompt([
      {
        type: 'input',
        name: 'manName',
        message: 'What Is The Team Manager Name?',
        validate: manName => {
            if (manName) {
                return true;
            }
            else {
                return `Manager Name Is Required!`
            }
        }
      },

      {
        type: 'input',
        name: 'manID',
        message: 'What Is The Team Manager ID?',
        validate: manID => {
            if (manID <= 0) {
                return  `Manager ID Must Be Greater Than 0!`
            }
            else if (manID){
                return true;
            }
            else {
                return `Manager ID Is Required!`
            }
        }
      },

      {
        type: 'input',
        name: 'manEmail',
        message: 'What Is The Team Manager Email?',
        validate: manEmail => {
            if (!(manEmail.match(mailformat)) ) {
                return 'Please Enter A Valid Email'
            }
            else if (manEmail){
                return true;
            }
            else {
                return `Manager Email Is Required!`
            }
        }
      },

      {
        type: 'input',
        name: 'manON',
        message: 'What Is The Team Manager Office Number?',
        validate: manON => {
            if (manON <= 0) {
                return  `Manager Office Number Must Be Greater Than 0!`
            }
            else if (manON){
                return true;
            }
            else {
                return `Manager Office Number Is Required!`
            }
        }
      },

      {
        type: 'list',
        name: 'teamLst',
        message: 'Which Team Member Would You Like To Add?',
        choices: ["Engineer", "Intern", "None. I'm Finished!"]
      },

    ])
}

createManager().then(createTeam => {
    
    //Create Manager Obj Instance
    const manager = new Manager(createTeam.manName,createTeam.manID, createTeam.manEmail,createTeam.manON);

    //Push New Obj to Array
    fullTeam.push(manager);

    if(createTeam.teamLst == "Engineer"){
        //Call The Create Engineer Function
        createEng();
    }
    else if (createTeam.teamLst == "Intern") {
        //Call The Create Intern Function
        createIntern();
    }
    else {
                
        //write the file
        const newTR = createPage(fullTeam);
        fs.writeFile('./dist/TeamRoster.html', newTR, funcCallback);
    }
    

});


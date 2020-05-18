var htmlTemplate = `<!DOCTYPE html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Roster</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    
    <body>
        <nav class="navbar navbar-light bg-light justify-content-center">
            <h1 class="m-2">Team Roster</h1>
        </nav>
    
        <div class="row justify-content-center">
        `;

// function to generate markdown for Team Roster HTML
function createTeamRoster(data) {

    //Loop through each object in argument
    for (let i = 0; i < data.length; i++) {
        let teamRole = data[i].getRole();

        //Add Manager Card To HTML
        if (teamRole == "Manager") {
            let updateTemplate = `
                <div class="card col-sm-3 col-md-3 pb-2 m-2">
                    <div class="card-body">
            <h4 class="card-title">${data[i].name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${data[i].getRole()}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
                <li class="list-group-item">Office Number: ${data[i].officeNumber}</li>
              </ul>
        </div>
    </div>
              `;
              htmlTemplate += updateTemplate;
        }

        //Add Engineer Card To HTML
        else if (teamRole == "Engineer") {
            let updateTemplate = `
                <div class="card col-sm-3 col-md-3 pb-2 m-2">
                    <div class="card-body">
            <h4 class="card-title">${data[i].name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${data[i].getRole()}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
                <li class="list-group-item">GitHub: ${data[i].gitHub}</li>
              </ul>
        </div>
    </div>
              `;
              htmlTemplate += updateTemplate;
        }

        //Add Intern Card To HTML
        else if (teamRole == "Intern") {
            let updateTemplate = `
                <div class="card col-sm-3 col-md-3 pb-2 m-2">
                    <div class="card-body">
            <h4 class="card-title">${data[i].name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${data[i].getRole()}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data[i].email}"> ${data[i].email}</a></li>
                <li class="list-group-item">School: ${data[i].school}</li>
              </ul>
        </div>
    </div>
              `;
              htmlTemplate += updateTemplate;
        }
        
    }
    //Add Closing Tags To HTML Template
    htmlTemplate += `
        </div>

        </body>

        </html>`
        console.log(htmlTemplate)



    return htmlTemplate;
}

module.exports = createTeamRoster;
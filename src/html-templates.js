const makeTeam = team => {

    const generateManagerCard = manager => {
        return `
        <div class="col p-3">
            <div class="card text-bg-primary shadow" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${manager.name}</h5>
                    <h5 class="card-text">${manager.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Office: ${manager.officeNumber}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}"> ${manager.email}</a></li>
                </ul>
            </div>
        </div>
      `
    }

    const generateInternCard = intern => {
        return `
        <div class="col p-3">
            <div class="card text-bg-primary shadow" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${intern.name}</h5>
                    <h5 class="card-text">${intern.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">School: ${intern.school}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}"> ${intern.email}</a></li>
                </ul>
            </div>
        </div>
      `
    }

    const generateEngineerCard = engineer => {
        return `
        <div class="col p-3">
            <div class="card text-bg-primary shadow" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${engineer.name}</h5>
                    <h5 class="card-text">${engineer.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Github: ${engineer.github}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
                </ul>
            </div>
        </div>
      `
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManagerCard(manager)).join('')
    );

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineerCard(engineer)).join('')
    );

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateInternCard(intern)).join('')
    );

    return html
    .join('');

};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- CSS only -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body class="bg-light">
        <div class="text-center text-bg-danger">
            <p class="display-6 p-3">My Team</p>
        </div>
        <div class="container">
            <div class="row align-items-center">
                ${makeTeam(team)}
            </div>
        </body>
    </html>
        `
};
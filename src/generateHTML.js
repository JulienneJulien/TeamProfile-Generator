// MANAGER PROFILE-CARD CREATED
const generateManager = function (Manager) {
    return`
    <div class="col-4 mt-4 cardContainer">
        <div class="card h-150">
            <div class="cardHeader">
                <h2>${Manager.name}</h2>
                <h3>Manager</h3><i class="material-icons">content_paste</i>
            </div>

            <div class="cardBody">
                <p class="id">ID: ${Manager.ID}</p>
                <p class="email">Email: <a href="mailto: ${Manager.email}">${Manager.email}</a></p>
                <p class="officeNumber">Office Number: ${Manager.officeNumber}</p>
            </div>
        </div>
    </div> `;
}
// ENGINEER PROFILE-CARD CREATED
const generateEngineer = function (Engineer) {
    return`
    <div class="col-4 mt-4 cardContainer">
        <div class="card h-150">
            <div class="cardHeader">
                <h2>${Engineer.name}</h2>
                <h3>Engineer</h3><i class="material-icons">content_paste</i>
            </div>

            <div class="cardBody">
                <p class="id">ID: ${Engineer.ID}</p>
                <p class="email">Email: <a href="mailto: ${Engineer.email}">${Engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
            </div>
        </div>
    </div> `;
}
// INTERN PROFILE-CARD CREATED
const generateIntern = function (Intern) {
    return`
    <div class="col-4 mt-4 cardContainer">
        <div class="card h-150">
            <div class="cardHeader">
                <h2>${Intern.name}</h2>
                <h3>Intern</h3><i class="material-icons">content_paste</i>
            </div>

            <div class="cardBody">
                <p class="id">ID: ${Intern.ID}</p>
                <p class="email">Email: <a href="mailto: ${Intern.email}">${Intern.email}</a></p>
                <p class="school">school: ${Intern.school}</p>
            </div>
        </div>
    </div> `;
}

generateHTML = (data) => {
// PROFILE CARDS ARRAY
profileArray = [];

for (let i = 0; i < data.length; i++) {
    const Employee = data[i];
    const teamRole = Employee.getRole();
// MANAGER FUNCTION CALLED   
    if  (teamRole === "Manager") {
        const managerCard = generateManager(Employee);

        profileArray.push(managerCard);
    }
// ENGINEER FUNCTION CALLED   
    if  (teamRole === "Engineer") {
        const engineerCard = generateEngineer(Employee);

        profileArray.push(engineerCard);
    }
// INTERN FUNCTION CALLED   
    if  (teamRole === "Intern") {
        const internCard = generateIntern(Employee);

        profileArray.push(internCard);
    }
}

// TO JOIN THE STRINGS
const employeeProfileCards = profileArray.join('')
// TO RETURN TO GENERATED HTML PAGE
const generateProfiles = generateProfilePage(employeeProfileCards);
return generateProfiles;
}
// TO GENERATE HTML TEAM PROFILE PAGE
const generateProfilePage = function (employeeProfileCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
        <link rel="stylesheet" type= "text/css" href="./style.css">
    </head>
    <body>
        <header>
            <nav class="navBar" id="navbar"
                <h1 id="navBarText"> TEAM PROFILE</h1>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="profileCards"> 
                  ${employeeProfileCards}
                </div>
            </div>

        </main>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    </html>;`

}

module.exports=generateHTML;
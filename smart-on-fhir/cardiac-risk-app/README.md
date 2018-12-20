# Deploy

There are a few steps to configure the project:

1. Open **demo-settings.js** and change the **serviceUrl** to a FHIR endpoint
2. The patient **smart-8888803** from SMART works the best for the cardiac-risk-app but you can change that to any patient you want

Now, from a console in the project directory, execute:

 3. Install NPM and install/update Node
 4.  Run ```npm install``` to install all dependencies onto the project
 5.  Run ```npm run serve``` to start the server on any port of localhost

## Things I had to change

The open source code for the cardiac-risk-app at github has the FHIR Compatibility DSTU 2. Therefore:

#### load_data.js: line 21
replace > lname =  patient.name[0].family.join(" ");
with > lname = patient.name[0].family;
          lname = $.isArray(lname) ? lname.join(" ") : lname;

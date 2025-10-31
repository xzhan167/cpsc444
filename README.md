# RoomieDuty

RoomieDuty is a roomate management app for roommates to communicate and manage common household responsibilities by providing a shared space to set initial expectations, facilitate reminders, and resolve issues as they occur. While sharing living spaces is common for students and young professionals, many households struggle with recurring communication challenges such as chore delegation, noise management, or scheduling shared spaces. These issues may be due to differing expectations or negligence of responsibilities, and often remain unresolved until tensions build, leading to frustration or conflict among roommates. Our interface aims to prevent such conflicts through facilitating better communication to resolve issues before they lead to larger issues.

SETTING UP:

1) Installing python:

Windows: https://www.python.org/downloads/

MacOS: brew install python

Linux:
sudo apt update
sudo apt install python3 python3-pip

Verify that python is correctly installed with: python --version

2) run local server from ur project folder, you can use command "cd pathToYourLocalProjectHere" or simply open a new command prompt or terminal at the project foler by right clicking on the folder and choosing to open a cmd or terminal.

Run the following command from the project folder (MUST BE FROM PROJECT FOLDER):

python -m http.server 8000

This will start a local server, as browsers by default blocks JSON fetch requests.

3) open up any web browser and paste the below into the address bar, then press enter:

http://localhost:8000/dashboard.html

Congrats, now you have a local version of the app running!
Keep track of changes and load your changes by downloading the JSON (your saved data) every time you make a change, replace the local version by the downloaded version in your project directory then refresh to see it changed permanently!

This functionality is limited as due to a lack of server hosting, we dont have an easy way to save and update the config file, as such, you must do so manually.

Testing is best done on incognito browser mode, as it would erase any previous data.
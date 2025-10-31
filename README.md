# RoomieDuty

RoomieDuty is a roomate management app for roommates to communicate and manage common household responsibilities by providing a shared space to set initial expectations, facilitate reminders, and resolve issues as they occur. While sharing living spaces is common for students and young professionals, many households struggle with recurring communication challenges such as chore delegation, noise management, or scheduling shared spaces. These issues may be due to differing expectations or negligence of responsibilities, and often remain unresolved until tensions build, leading to frustration or conflict among roommates. Our interface aims to prevent such conflicts through facilitating better communication to resolve issues before they lead to larger issues.

SETTING UP:

0) Download project and unzip into a folder to local computer

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

List of resources and references below. Some references to public approaches and implementations for certain features such as the mini calender, Json loading, date parsing, etc. simply due to time limitations and since this is just a prototype, no different to figma, the implementation is not the focused outcome of the course this is just the nature of learning programming and on the fly problem solving. It is likely there are more, these are just the notable ones I remember.

Big CSS styling and layout, fixing crappy grid panel formatting (its still none scaling crap):

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
 

https://stackoverflow.com/questions/51928581/sidebar-layout-using-css-grid

https://blog.pixelfreestudio.com/how-to-use-css-grid-for-customizable-dashboard-layouts/

https://getbootstrap.com/docs/5.3/components/badge/

https://tailwindcss.com/docs/customizing-colors

https://medium.com/%40kevjose/building-dashboards-using-grid-and-flex-box-620adc1fff51

Styling inspiration, font, style, rounded tables, and corners etc, obv adapted to our own lay out, color schemes, and design, but the rest of the freedom of style and formatting is inspired by some open source projects (i am not an art designer):

https://javascript.plainenglish.io/build-a-modern-dashboard-4-css-grid-techniques-for-complex-layouts-88cb5a90c34


https://codepen.io/collection/XdpzRP

Method of json parsing, reading, writing, and loading:

https://stackoverflow.com/questions/3357553/how-to-store-an-array-in-localstorage

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser

https://stackoverflow.com/questions/29246444/fetch-how-do-you-make-a-non-cached-request

https://stackoverflow.com/questions/34494834/fetch-cache-no-store

https://stackoverflow.com/questions/38619527/how-to-revoke-object-url-created-by-url-createobjecturl

https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL

https://developer.mozilla.org/en-US/docs/Web/API/Blob

https://stackoverflow.com/questions/12413243/javascript-date-format-like-iso-but-local

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

https://stackoverflow.com/questions/15491894/compare-dates-in-javascript

Calender quick implementation and public approaches:

https://martinfowler.com/articles/feature-toggles.html

https://stackoverflow.com/questions/70995014/creating-calendar-with-grid-temlate

https://stackoverflow.com/questions/51231715/highlight-dates-on-calendar-with-events-javascript

https://stackoverflow.com/questions/4156434/javascript-get-the-first-and-last-day-of-the-current-month

https://stackoverflow.com/questions/4156434/javascript-get-the-first-and-last-day-of-the-current-week

https://stackoverflow.com/questions/39251562/javascript-split-list-of-dates-into-week-groups

https://stackoverflow.com/questions/20728054/how-to-highlight-a-day-which-has-an-event-in-fullcalendar-js

https://stackoverflow.com/questions/66166303/create-custom-date-picker-in-html-css-js

Styling lists for example for tasks lists, notifications, etc, Dynamic rendering:

https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

https://stackoverflow.com/questions/48073592/how-to-dynamically-create-html-elements-in-javascript

https://stackoverflow.com/questions/46161988/render-json-data-dynamically-in-html-using-javascript

https://stackoverflow.com/questions/11821261/how-to-get-all-selected-values-from-select-multiple-html-element

https://developer.mozilla.org/en-US/docs/Web/API/Element/dataset

https://stackoverflow.com/questions/1732348/how-to-check-if-an-element-is-visible-in-dom

https://stackoverflow.com/questions/18480474/event-delegation-best-practices

Simulating delays and timer and some other random documentation when I got stuck on the counter logic:

https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

https://stackoverflow.com/questions/3263161/how-do-i-run-an-if-else-statement-based-on-a-local-storage-value-boolean-type

https://stackoverflow.com/questions/69200222/javascript-local-storage-mixing-up-toggle-keys

https://dev.to/hexshift/building-robust-feature-flags-in-javascript-from-basics-to-gradual-rollouts-11f2

https://stackoverflow.com/questions/36226215/how-to-store-and-restore-a-small-json-state-in-localstorage

Form submission and basic validation:

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

https://stackoverflow.com/questions/24816/disable-form-submit-without-jquery

https://stackoverflow.com/questions/11821261/how-to-get-all-selected-values-from-select-multiple-html-element

parsing from ISO:

https://stackoverflow.com/questions/17450043/javascript-slice-string-without-splitting

https://stackoverflow.com/questions/11526504/javascript-get-date-parts-year-month-day

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

Building lists, getting system time (not used), sorting by date:

https://stackoverflow.com/questions/15491894/compare-dates-in-javascript

https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
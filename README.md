In this project I've tried to make an assignment and academic tracker website for students.
first,login and signup authentication is provided so that students can login individually using their email and password.
then,the students are allowed to create assignments through the inputs given.this is just a sample that assignments can be stored,if there are large assignments then the system can be expanded accordingly.
then the assignment,duedate and course are displayed on the screen.
upon clicking the calendar view button,calendar view can be seen in which the start date and end date of assignment can be set upon clicking the dates successively in the calendar.
finally,google calendar authentication is enabled.

note:before filling the event form for google calendar go to localhost:8000/google to authenticate with google and then after logging in start creating events in google calendar.

setup:
for backend,I've used node.js express and mongodb as database.
firsty,start the node server and then connect the server with mongoDB database using the mongoURL by running the following commands in command prompt:
npm start
I've used react.js for frontend,start the frontend server also simultaneuosly and then the site is ready to be used.




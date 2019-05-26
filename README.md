# Crud-nodejs-neo4j
A simple REST apis application to create,read,update and delete user.

Technologies used: Docker,Neo4j Database and nodejs 

Start Application: Go to project directory and run docker-compose up

Api will start on http://localhost:3000 &
Neo4j will start on http://localhost:7474

########--- Apis ----#########:

Create User (Post):
http://localhost:3000/users
body :{ "name":"UserName","mobile":"UserMobile", email:"userEmail" }

Get User (Get):
http://localhost:3000/users/:userId

Update User (put):
http://localhost:3000/users/:userId
       body :{ "name":"UserName","mobile":"UserMobile", email:"userEmail" }
       
Delete User (delete):
http://localhost:3000/users/:userId



var express = require("express");
var mongo = require("mongoose");
var bodyparser = require("body-parser");
var hr=require("./HR");
var db=require("./mongoconnection").url;
var app=express();
const { json } = require('body-parser');
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'NodeJS';

const generateJWTToken = (id) => {
    return jwt.sign({ id: id }, JWT_SECRET, {
      expiresIn: '10h',
    });
};
const createSendToken = (employee, res) => {
  const token = generateJWTToken(employee.id);
  
  res.send({
    status: "Success",
    token,
    data: {
      employee,
    },
  });
};

var port = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
mongo
  .connect(db)
  .then(() => {
    console.log("Database is ok");
  })
  .catch(error => {
    console.log(error.message);
  });

  app.post("/signup", async (req, res) => {
    var HR = new hr({
      UserName: req.body.UserName,
      Password: req.body.Password
    });
  
    await hr.findOne({ name: HR.UserName })
      .then(async profile => {
        if (!profile) {
          await HR
            .save()
            .then(() => {
              res.status(200).send(HR);
            })
            .catch(error => {
              console.log(error.message);
            });
        } else {
          res.send("HR is already exist");
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  });
  app.get("/login", async (req, res) => {
    var HR = new hr({
      UserName: req.body.UserName,
      Password: req.body.Password
    });
  
    await hr.findOne({ name: HR.UserName })
      .then(async profile => {
        const emp=profile.profile(profile=>profile.UserName===req.body.UserName);
        if (!profile) {
         res.send("Hr is not there");
        } else {
          if (profile.password === HR.password) {
            console.log(profile.Password);
            createSendToken(emp[0],res);
            console.log(HR.Password);
            res.send("Welcome HR");
          } else {
            res.send("Password is incorrect");
          }
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  });
  var server = app.listen(3000, function () {console.log("server is ok") });
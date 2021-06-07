const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

app.use(
  session({
    secret: "s4m3t"
  })
);

mongoose.connect(
  process.env.MONGODB_URI ,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
console.log("Database_URL",  process.env.MONGODB_URI);
const SeriesModel = mongoose.model("Series", {
  name: String,
  category: String,
  description: String,
  fragman: String,
  imdb: String,
  production: String,
  season: String,
  type1: String,
  type2: String,
  uploadDate: String,
  url: String,
  year: String
});

const FragmansModel = mongoose.model("Fragmans", {
  fragman: String,
  category: String,
  season: String,
  serieID: String,
  uploadDate: String
});

const CommentsModel = mongoose.model("Comments", {
  comment: String,
  serieID: String,
  uploadDate: String,
  userId: String,
  userName: String,
  userLastName: String,
  value: Number,
  userpp:String
});

const UsersModel = mongoose.model("Users", {
  name: String,
  lastName: String,
  email: String,
  password: String,
  date: String,
  favorite: String,
  authKey: String,
  male: String,
  uploadDate: String,
  comments: [{ comment: String, uploadDate: String, name: String }],
  favoriteSeries: [
    {
      name: String,
      url: String,
      type1: String,
      type2: String,
      serieID: String
    }
  ],
  pp: String
});
app.post("/save-series", (req, res) => {
  const newSeries = new SeriesModel({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    fragman: req.body.fragman,
    imdb: req.body.imdb,
    production: req.body.production,
    season: req.body.season,
    type1: req.body.type1,
    type2: req.body.type2,
    uploadDate: req.body.uploadDate,
    url: req.body.url,
    year: req.body.year
  });
  newSeries.save().then(response => {
    res.status(200).json({
      data: response
    });
  });
});

app.get("/get-series", (req, res) => {
  SeriesModel.find({}, (err, docs) => {
    res.status(200).json({
      docs: docs
    });
  });
});

app.post("/save-fragman", (req, res) => {
  const newFragmans = new FragmansModel({
    fragman: req.body.fragman,
    category: req.body.category,
    season: req.body.season,
    uploadDate: req.body.uploadDate,
    serieID: req.body.serieID
  });
  newFragmans.save().then(response => {
    res.status(200).json({
      data: response
    });
  });
});
app.get("/get-fragman", (req, res) => {
  FragmansModel.find({}, (err, docs) => {
    res.status(200).json({
      docs: docs
    });
  });
});

app.post("/save-comment", (req, res) => {
  const newComments = new CommentsModel({
    comment: req.body.comment,
    uploadDate: req.body.uploadDate,
    serieID: req.body.serieID,
    userId: req.body.userId,
    userName: req.body.userName,
    userLastName: req.body.userLastName,
    value: req.body.value,
    userpp:req.body.userpp
  });
  newComments.save().then(response => {
    res.status(200).json({
      data: response
    });
  });
});
app.get("/get-comment", (req, res) => {
  CommentsModel.find({}, (err, docs) => {
    res.status(200).json({
      docs: docs
    });
  });
});

app.post("/save-user", (req, res) => {
  const newUsers = new UsersModel({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    date: req.body.date,
    favorite: req.body.favorite,
    authKey: req.body.authKey,
    male: req.body.male,
    uploadDate: req.body.uploadDate,
    pp: req.body.pp
  });
  newUsers.save().then(response => {
    res.status(200).json({
      data: response
    });
  });
});

app.get("/get-users", (req, res) => {
  UsersModel.find({}, (err, docs) => {
    res.status(200).json({
      docs: docs
    });
  });
});

app.post("/save-userComment", (req, res) => {
  let comment = req.body.comment;
  let serieUrl = req.body.serieUrl;
  let name = req.body.name;
  let uploadDate = req.body.uploadDate;
  let userid = req.body.userId;
  UsersModel.find({ _id: userid }, (err, docs) => {
    UsersModel.findOneAndUpdate(
      { _id: req.body.userId },
      {
        $push: {
          comments: {
            comment: comment,
            name: name,
            uploadDate: uploadDate,
            serieUrl: serieUrl
          }
        }
      }
    ).then(response => {
      res.status(200).json({
        data: response
      });
    });
  });
});

app.post("/save-userFavorite", (req, res) => {
  let name = req.body.name;
  let url = req.body.url;
  let serieID = req.body.serieID;
  let type1 = req.body.type1;
  let type2 = req.body.type2;
  let userid = req.body.userId;
  UsersModel.find({ _id: userid }, (err, docs) => {
    UsersModel.findOneAndUpdate(
      { _id: req.body.userId },
      {
        $push: {
          favoriteSeries: {
            url: url,
            name: name,
            serieID: serieID,
            type1: type1,
            type2: type2
          }
        }
      }
    ).then(response => {
      res.status(200).json({
        data: response
      });
    });
  });
});

app.post("/delete-userFavorite", (req, res) => {
  let serieID = req.body.serieID;
  let userId = req.body.userId;
  UsersModel.find({ _id: userId }, (err, docs) => {
    UsersModel.findOneAndUpdate(
      { _id: userId },
      {
        $pull: {
          favoriteSeries: {
            serieID: serieID
          }
        }
      }
    ).then(response => {
      res.status(200).json({
        data: response
      });
    });
  });
});

app.post("/get-user", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  UsersModel.find({ email: email, password: password }, (err, docs) => {
    res.status(200).json({
      docs: docs
    });
  });
});
app.post("/get-userid", (req, res) => {
  let userid = req.body.userid;

  UsersModel.find({ _id: userid }, (err, docs) => {
    res.status(200).json({
      docs: docs
    });
  });
});
module.exports = {
  path: "/api",
  handler: app
};

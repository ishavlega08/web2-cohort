const express = require("express");
const app = express();

app.use(express.json());

const users = [{
  name: "john",
  kidneys: [{
    healthy: false
  }]
}];

app.get("/", function (req, res) {
  const userKidneys = users[0].kidneys;
  const numberOfKidneys = userKidneys.length;

  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (userKidneys[i].healthy)
      numberOfHealthyKidneys++;
  }

  const numberofUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberofUnHealthyKidneys
  });
});

app.post("/addKidney", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  });

  res.json({
    msg: "Done!",
    user: users[0]
  });
});

app.put("/updateKidney", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }

    res.json({
      msg: "Unhealthy kidney have fixed and now it is healthy!"
    });

  } else {
    res.status(411).json({
      msg: "You have no unhealthy kidneys"
    });
  }
});

app.delete("/removeUnhealthyKidneys", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true
        })
      }
    }

    users[0].kidneys = newKidneys;
    res.json({
      msg: "Unhealthy kidneys removed"
    });

  } else {
    res.status(411).json({
      msg: "You have no bad kidneys"
    });
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }

  return atleastOneUnhealthyKidney;
}

app.listen(3000);

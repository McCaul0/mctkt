var JSONstring = {"ticketnum": "0000091",
"thread": "0001",
"creationdate": "03.04.2012",
"type": "user error",
"priority": "high",
"blurb": "This is a blurb of text and could be any length, but I have chosen to make it exactly this long."
};

var iterator = function (copies, JSONstring) {
for (i=1; i <= copies; i++) {
for (var key in JSONstring) {
  if (JSONstring.hasOwnProperty(key)) {
    JSONoutput = (JSONstring[key]+i);
    return(JSONoutput);
    //console.log(JSONoutput);
  }
}
}
};

//iterator(4, JSONstring);
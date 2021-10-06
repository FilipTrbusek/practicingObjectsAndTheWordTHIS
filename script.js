let governmentRegulations = false;

school1 = {
  city: "Aberdeen",
  street: "Garthdee",
  type: "university",
  name: "Robert Gordon",
  capacity: 16787,
  open: function () {
    if (governmentRegulations === true) {
      console.log(`${this.name} ${this.type} is open.`);
    } else {
      console.log(`${this.name} ${this.type} is closed.`);
    }
  },
  closed: function () {
    if (governmentRegulations === false) {
      console.log(`${this.name} ${this.type} is closed.`);
    } else {
      console.log(`${this.name} ${this.type} is open.`);
    }
  },
};

school1.open();

school2 = {
  city: "Aberdeen",
  street: "King's College",
  type: "university",
  name: "Aberdeen",
  capacity: 15185,
  open: function () {
    if (governmentRegulations === true) {
      console.log(`${this.name} ${this.type} is open.`);
    } else {
      console.log(`${this.name} ${this.type} is closed.`);
    }
  },
  closed: function () {
    if (governmentRegulations === false) {
      console.log(`${this.name} ${this.type} is closed.`);
    } else {
      console.log(`${this.name} ${this.type} is open.`);
    }
  },
};

school2.open();

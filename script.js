let governmentRegulations = true;

school = {
  city: "Aberdeen",
  street: "Garthdee",
  type: "university",
  name: "Robert Gordon",
  capacity: 16787,
  open: function () {
    console.log(`${this.name} ${this.type} is open.`);
  },
  closed: function () {
    console.log(`${this.name} ${this.type} is closed.`);
  },
};

if (governmentRegulations) {
  school.closed();
} else {
  school.open();
}

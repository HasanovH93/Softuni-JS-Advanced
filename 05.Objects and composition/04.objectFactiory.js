function factory(lib, list) {
  const result = [];
  //for every order in list
  for (let order of list) {
    // - create object
    const object = {};

    for (let prop in order.template) {
      //copy template props
      object[prop] = order.template[prop];
    }
    const parts = order.parts;
    // - for every element in parts
    for(let part of parts){
        object[part] = lib[part]
        
    }

    result.push(object);
  }
  return result;

  // - for every element in parts

  // compose function from library into obj
  // store object

  // return result
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

const products = factory(library, orders);
console.log(products);

let toysClientsInformation = [
  {
    name: "John",
    age: 25,
    address: "123 Main St",
    city: "New York",
    cpf: "123.456.789-00", 
    email: "teste@teste.com", 
  },

  {
    name: "Mary",
    age: 30,
    address: "123 Main St",
    city: "New York",
    cpf: "123.456.789-00",
    email: "",
  },

  {
    name: "Peter",
    age: 35,
    address: "123 Main St",
    city: "New York",
    cpf: "123.456.789-00",
    email: "",
  },

  {
    name: "Paul",
    age: 40,
    address: "123 Main St",
    city: "New York",
    cpf: "123.456.789-00",
    email: "",
  },
];

let newClient = {
  name: "George",
  age: 45,
  address: "123 Main St",
  city: "New York",
  cpf: "123.456.789-00",
};

toysClientsInformation.push(newClient);

console.log(toysClientsInformation[0].address);
console.log(toysClientsInformation[1].age);
console.log(toysClientsInformation[2].address);
console.log(toysClientsInformation[3].city);
console.log(toysClientsInformation[2].cpf.substring(0, 3));

function upadateClient(id, newDatas) {
  let linkFromId = toysClientsInformation.findIndex((client) => toysClientsInformation.id === id);

  if (linkFromId !== -1) {
    for (let key in newDatas) {
      client[linkFromId][key] = newDatas[key];
    }
  } else {
    console.log(`Cliente com id ${id} não encontrado.`);
  }
};

upadateClient(0, {
  email: "novoemailmari@example.com",
  pontosFidelidade: 350,
});

console.log(toysClientsInformation[0].address);
console.log(toysClientsInformation[1].age);
console.log(toysClientsInformation[2].address);
console.log(toysClientsInformation[3].city);
console.log(toysClientsInformation[2].cpf.substring(0, 3));
console.log(toysClientsInformation[0].email);

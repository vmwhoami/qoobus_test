import { createServer, Model } from 'miragejs';

const capFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const generateName = (num) => {
  const name1 = ['Maria', 'Ion', 'Elena', 'Vasile', 'Mihail', 'Valentina', 'Ivan', 'Tatiana', 'Gheorghe', 'Vladimir', 'Victor', 'Nicolae', 'Olga', 'Natalia', 'Nina', 'Ana', 'Andrei', 'Svetlana', 'Vera', 'Galina', 'Lidia', 'Petru', 'Alexandru', 'Ecaterina', 'Tamara', 'Serghei', 'Valeriu', 'Irina', 'Nadejda', 'Constantin', 'Anna', 'Nicolai', 'Sergiu', 'Igor', 'Anatolie', 'Dumitru', 'Zinaida', 'Larisa', 'Alexandra', 'Grigore', 'Iurie', 'Raisa', 'Oleg', 'Ludmila', 'Pavel', 'Tudor', 'Eugenia', 'Liudmila', 'Alexei', 'Alexandr', 'Fiodor', 'Veaceslav', 'Vasili', 'Evghenia', 'Anastasia', 'Vitalie', 'Angela', 'Valentin', 'Lilia', 'Iulia', 'Boris', 'Marina', 'Piotr', 'Sergey', 'Aleksandr', 'Parascovia', 'Dmitriy', 'Aliona', 'Tatyana', 'Leonid', 'Gheorghi', 'Natalya', 'Stefan', 'Mariana', 'Liubovi', 'Dmitri', 'Andrey', 'Ala', 'Vadim', 'Liuba', 'Viorica', 'Victoria', 'Alina', 'Veronica', 'Elizaveta', 'Ilie', 'Diana', 'Stepan', 'Silvia', 'Vasilii', 'Anatoli', 'Sofia', 'Ekaterina', 'Simion', 'Denis', 'Cristina', 'Emilia', 'Zinovia', 'Rodica', 'Ghenadie'];
  const name2 = ['Rusu', 'Ceban', 'Ciobanu', 'Lungu', 'Cebotari', 'Munteanu', 'Popa', 'Gutu', 'Rotari', 'Balan', 'Sirbu', 'Cojocari', 'Grosu', 'Melnic', 'Rotaru', 'Cojocaru', 'Rosca', 'Turcan', 'Moraru', 'Morari', 'Cazacu', 'Cretu', 'Muntean', 'Botnari', 'Ursu', 'Bivol', 'Russu', 'Ivanov', 'Popovici', 'Lupu', 'Mocanu', 'Chiriac', 'Plamadeala', 'Luca', 'Negru', 'Guzun', 'Turcanu', 'Miron', 'Popescu', 'Railean', 'Arnaut', 'Florea', 'Cebanu', 'Popov', 'Plesca', 'Prodan', 'Andronic', 'Sandu', 'Ivanova', 'Rusnac', 'Buga', 'Burlacu', 'Musteata', 'Malai', 'Borta', 'Croitor', 'Bejenari', 'Cusnir', 'Pascari', 'Golban', 'Grecu', 'Oprea', 'Cernei', 'Pinzari', 'Gheorghita', 'Caraman', 'Bostan', 'Istrati', 'Spinu', 'Frunza', 'Cazac', 'Darii', 'Lisnic', 'Raileanu', 'Bors', 'Josan', 'Topal', 'Croitoru', 'Birca', 'Colesnic', 'Botnaru', 'Brinza', 'Gherman', 'Petrov', 'Postica', 'Bulat', 'Dragan', 'Chicu', 'Cucu', 'Mardari', 'Carp', 'Postolachi', 'Covali', 'Platon', 'Uzun', 'Gaina', 'Antoci', 'Radu', 'Caraus', 'Albu',
  ];
  const firstName = capFirst(name1[getRandomInt(0, name1.length)]);
  const lastName = capFirst(name2[getRandomInt(0, name2.length)]);
  const name = [firstName, lastName];
  return name[num];
};
const numGen = (len) => {
  let str = '';
  for (let i = 0; i < len; i += 1) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
};
const phone = () => `+373 69${numGen(6)}`;
const dateGenerator = (start, end) => new Date(start.getTime() + Math.random()
  * (end.getTime() - start.getTime()));

export default () => {
  createServer({
    models: {
      user: Model,
      download: Model,
    },
    seeds(server) {
      for (let j = 0; j < 1000; j += 1) {
        server.create('download', {
          date: dateGenerator(new Date(2017, 0, 1), new Date()),
          nrOfUsers: Number(numGen(3)),
          nrUniqUsers: Number(numGen(2)),
        });
      }
      for (let i = 0; i <= 50; i += 1) {
        server.create('user', {
          numele: generateName(0),
          prenumele: generateName(1),
          idnp: numGen(13),
          phone: phone(),
          panCard: numGen(16),
          lastTransaction: dateGenerator(new Date(2014, 0, 1), new Date()),
        });
      }
    },

    routes() {
      this.get('/api/users', (schema) => schema.users.all());
      this.get('/api/downloads', (schema) => schema.downloads.all());
    },
  });
};

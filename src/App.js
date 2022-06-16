import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

const App = () => {
  let users = [
    { name: "Alex", lastName: "Micky", age: 25, id: 1 },
    { name: "Sten", lastName: "John", age: 26, id: 2 },
    { name: "Naruto", lastName: "Uzumaki", age: 29, id: 3 },
    { name: "Kakasi", lastName: "Hatake", age: 19, id: 4 },
    { name: "Alihan", lastName: "Ergeshbaev", age: 16, id: 5 },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;

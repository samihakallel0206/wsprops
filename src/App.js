
import './App.css';
import Cartes from './components/Cartes';

function App() {
  return (
    <div className="App">
      <h2>WS PROPS</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "4%",
        }}
      >
        
        <Cartes
          title="title1"
          imgUrl="https://images.pexels.com/photos/29626783/pexels-photo-29626783/free-photo-of-ecureuil-roux-joueur-sur-le-sol-moussu-de-la-foret.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          description="desc"
        />
        <Cartes
          title="title2"
          imgUrl="https://images.pexels.com/photos/9477631/pexels-photo-9477631.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Cartes
          title="title3"
          imgUrl="https://images.pexels.com/photos/27245603/pexels-photo-27245603/free-photo-of-islande-route-paysage-montagnes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Cartes imgUrl="https://images.pexels.com/photos/18893258/pexels-photo-18893258/free-photo-of-nuit-arbres-feuilles-briller.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      </div>
    </div>
  );
}

export default App;

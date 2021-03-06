
import './App.css';

const descriptionText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, velit! Perferendis nobis impedit eveniet obcaecati similique itaque voluptate distinctio vitae?`;
const headerLeft = <div className="flex-app-items header header-left item-1"><h2>Pizza Restaurant</h2> </div>;
const headerRight =  <div className="flex-app-items header header-right item-2"><h1>Hey Honey! How did we come here!</h1></div>;
const item3 = <div className="flex-app-items item-3"><h3>Description</h3><p>{descriptionText}</p></div>;
const item4 = <div className="flex-app-items item-4"><div><img src='https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg'></img></div><p>{descriptionText}</p></div>;
const item5 = <div className="flex-app-items item-5"><h3>Description</h3><p>{descriptionText}</p></div>;
const item6= <div className="flex-app-items item-6"><div><img src='https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img></div><p>{descriptionText}</p></div>;
function App() {
  return (
    <div className="App">
      <div className="flex-app">
        {headerLeft}
        {headerRight}
        {item3}
        {item4}
        {item5}
        {item6}
      </div>
    </div>
  );
}

export default App;

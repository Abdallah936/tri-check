import "./App.css";
const arr = [18, 12, 20, 16];

function chercherMin(arr) {
  var long = arr.length;
  var mini = arr[0];
  for (let j = 1; j < long; j++) {
    if (arr[j] < mini) {
      mini = arr[j];
    }
  }
  return mini;
}
function echanger_elt(un, deux) {
  var provi = un;
  un = deux;
  deux = provi;
}

function App() {
  return (
    <div className="App">
      <h1>La liste : {arr[0]},{arr[1]},{arr[2]},{arr[3]}</h1>
      <h1>le plus petit nombre : {chercherMin(arr)}</h1>
    </div>
  );
}
export default App;

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <div className='QA-section'>
        <h1>React Questions and Answers</h1>
        <h2>How does React work?</h2>
        <p>React is a javascript library. React has virtual DOM which is only a represntation of  UI and synced with real DOM. Whenever there is a change in state, a new virtual DOM is created and compared with the previous one and find the differences. After that, DOM only update that elements where changes happened. That's why react is efficient.</p>
        <h2>Props Vs State</h2>
        <p>Props are read only. Props are passed into components and as attributes in html. Props can not be modified. It is immutable. On the other hand, state is mutable. State is used when there is a need of updating information. Changes in state is asynchronous.</p>
        <h2>How does useState work?</h2>
        <p>useState is a hook function. This function returns a pair of values; one is a stateful value and another is a function to update it after passing an initial state. And the state can be a number, string or object whatever is needed.</p>
      </div>
    </div>
  );
}

export default App;

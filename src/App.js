import './App.css';
import PrimaryCard from './components/PrimaryCard';
import SecondaryCard from './components/SecondaryCard';

function App() {
  return (
    <div className='App'>
      <h5>101</h5>
      <PrimaryCard
        background='skyblue'
        text={{
          header: 'Header',
          title: 'Primary Card Title',
          content: 'Some text for jus typing and consoling log to client!',
        }}
      />
      <PrimaryCard
        background='grey'
        text={{
          header: 'Header',
          title: 'Primary Card Title',
          content: 'Some text for jus typing and consoling log to client!',
        }}
      />
      <PrimaryCard
        background='blue'
        text={{
          header: 'Header',
          title: 'Primary Card Title',
          content: 'Some text for jus typing and consoling log to client!',
        }}
      />
      <SecondaryCard
        background='black'
        text={{
          header: 'Header',
          title: 'Primary Card Title',
          content: 'Some text for jus typing and consoling log to client!',
        }}
      />
      <SecondaryCard
        background='blue'
        text={{
          header: 'Header',
          title: 'Primary Card Title',
          content: 'Some text for jus typing and consoling log to client!',
        }}
      />
      <SecondaryCard
        background='skyblue'
        text={{
          header: 'Header',
          title: 'Primary Card Title',
          content: 'Some text for jus typing and consoling log to client!',
        }}
      />
      <br />
    </div>
  );
}

export default App;

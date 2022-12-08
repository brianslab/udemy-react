import Accordion from './components/Accordion';

function App() {
  const items = [
    { label: 'Accodrion label 1', content: 'Foobar' },
    { label: 'Accodrion label 2', content: 'Barfoo' },
    { label: 'Accodrion label 3', content: 'Sample Text' },
  ];

  return <Accordion items={items} />;
}

export default App;

import Accordion from './components/Accordion';

function App() {
  const items = [
    { id: '1', label: 'Accodrion label 1', content: 'Foobar' },
    { id: '2', label: 'Accodrion label 2', content: 'Barfoo' },
    { id: '3', label: 'Accodrion label 3', content: 'Sample Text' },
  ];

  return <Accordion items={items} />;
}

export default App;

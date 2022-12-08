import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>
          Click here
        </Button>
      </div>
      <div>
        <Button secondary>Buy now!</Button>
      </div>
      <div>
        <Button success rounded outline>
          Hide ads
        </Button>
      </div>
      <div>
        <Button warning outline>
          sample
        </Button>
      </div>
      <div>
        <Button danger>Bottom Text</Button>
      </div>
    </div>
  );
}

export default App;

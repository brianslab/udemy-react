import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
  const handleClick = () => {
    console.log('Clicked.');
  };

  return (
    <div>
      <div>
        <Button primary rounded className='mb-5' onClick={handleClick}>
          <GoBell />
          Click here
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload /> Buy now!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <GoDatabase />
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

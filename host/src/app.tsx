import './app.css';

import Mfe1 from 'mfe1/mfeApp';
import Mfe2 from 'mfe2/mfeApp';

const App = () => {
  return (
    <div className="content">
      <h1>Module Federation Host</h1>
      <div className="mfe-container">
        <Mfe1 />
        <Mfe2 />
      </div>
    </div>
  );
};

export default App;

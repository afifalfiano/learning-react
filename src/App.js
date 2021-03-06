import React from 'react';
import { render } from 'react-dom';

import Pet from './Pet.js';

const App = () => {
  return (
    <div>
      <h1 id="something-import">Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"/>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
      <Pet name="Cat" animal="Doink" breed="Mixed"/>
    </div>
  )
};

render(React.createElement(App), document.getElementById("root"));

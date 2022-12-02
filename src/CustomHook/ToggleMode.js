
import {  FiMoon } from 'react-icons/fi';

function ToggleModes(changemode) {
    return (
      <div>
        <button onClick={changemode}>{<FiMoon />}</button>
        </div>
    );
  }
   
  export default ToggleModes;
import { ThemeConsumer } from "./ThemeContext";
import { FiMoon, FiSun } from 'react-icons/fi';

function ToggleModes() {
    return (
      <ThemeConsumer>
        {({ mode, toggleMode }) => {
          return <button onClick={toggleMode}>{mode === 'light' ? <FiMoon /> : <FiSun />}</button>;
        }}
      </ThemeConsumer>
    );
  }
   
  export default ToggleModes;
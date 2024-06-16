import PropTypes from 'prop-types';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.name}
    </div>
  );
}
App.propTypes = {
  name: PropTypes.string.isRequired
};
export default App;

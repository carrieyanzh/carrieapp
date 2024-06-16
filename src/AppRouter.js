import PropTypes from 'prop-types';
import './App.css';

function AppRouter(props) {
  return (
    <div className="App">
      {props.name}
    </div>
  );
}
AppRouter.propTypes = {
  name: PropTypes.string.isRequired
};
export default AppRouter;

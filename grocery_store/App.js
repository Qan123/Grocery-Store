import Root from './src/services/Navigation';
import { Provider } from 'react-redux';
import ConfigureStore from './src/business/redux/store';

export default function App() {
  return (
    <Provider store={ConfigureStore}>
    <Root />
    </Provider>
  );
}


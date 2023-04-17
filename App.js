import { store } from './store';
import { Provider } from 'react-redux';
import IotApp from './IotApp';

export default function App() {
  return (
    <Provider store={store}>
      <IotApp />
    </Provider>
  );
}
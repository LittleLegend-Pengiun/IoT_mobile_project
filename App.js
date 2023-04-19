import { store } from './store';
import { Provider } from 'react-redux';
import MqttComp from './components/MQTTComp';
import InitComp from './components/InitComp';
import AppScreens from './screens';

export default function App() {
  return (
    <Provider store={store}>
      <MqttComp />
      <InitComp />
      <AppScreens />
    </Provider>
  );
}
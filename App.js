import { store } from './store';
import { Provider } from 'react-redux';
import IotApp from './IotApp';
import MqttComp from './components/MQTTComp';
import InitComp from './components/InitComp';

export default function App() {
  return (
    <Provider store={store}>
      <MqttComp />
      <InitComp />
      <IotApp />
    </Provider>
  );
}
import { Provider } from 'react-redux';
import { Header } from "./components/header/Header";
import { Photos } from "./components/photos/Photos";
import { store } from './redux/store/store';

const App = () => {
  return (
    <Provider store={store} >
      <Header />
      <Photos />
    </Provider>
  );
}

export default App;

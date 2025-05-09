import './app.css';
import type { useGlobalStore } from 'host/stores';
export type TAppProps = {
    useGlobalStore?: typeof useGlobalStore;
};
declare const App: React.FC<TAppProps>;
export default App;

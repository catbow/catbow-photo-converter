import { useLoading } from './components/contexts/ContextWrapper';

import Error from './components/common/page/Error';
import Loading from './components/common/page/Loading';
import Home from './pages/Home';

function App() {
  const { mode } = useLoading();

  if (mode === 'error') {
    return <Error />;
  }

  if (mode === 'loading') {
    return <Loading />;
  }

  return <Home />;
}

export default App;

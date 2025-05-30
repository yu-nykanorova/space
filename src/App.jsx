import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { MainLayout } from './components/mainLayout/MainLayout';
import { Home } from './pages/home/Home';
import { Planets } from './pages/planets/Planets';
import { PlanetDetails } from './pages/planetDetails/PlanetDetails';
import { Calculator } from './pages/calculator/Calculator';
import { NotFound } from './components/notFound/NotFound';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="planets" element={<Planets />} />
          <Route path="planets/:id" element={<PlanetDetails />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

};

export default App;

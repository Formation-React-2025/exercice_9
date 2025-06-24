import React from 'react';
import {
  QueryClient, QueryClientProvider,
} from '@tanstack/react-query';
import Exercice8 from './components/exercices/exercice-8/Exercice8';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <main>
      <Exercice8 />
    </main>
  </QueryClientProvider>
);

export default App;

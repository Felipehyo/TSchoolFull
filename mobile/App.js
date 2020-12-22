import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes/index';

export default function App() {
  return (
      <AuthProvider value={{signed: true}}>
        <Routes />
      </AuthProvider>
  )
}

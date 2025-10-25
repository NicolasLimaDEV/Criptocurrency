import { createBrowserRouter } from 'react-router-dom'

//Importar as páginas
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/layout'

const route = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/detail/:cripto',
            element: <Detail />
         },
         {
            path: '*',
            element: <NotFound />
         }
      ]
   }
])

export { route }
import './App.css'
import { Route, Routes } from 'react-router-dom'
import routes from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {


  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        ))}
      </Routes>
    </>
  )
}

export default App

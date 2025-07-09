import { Route, Routes } from 'react-router-dom'
import routes from './routes/routes'
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//components css
import './App.css'
import '../src/common/Layout/NavBar/NavBar.css'
import '../src/common/Layout/SideBar/SideBar.css'
import '../src/common/Layout/BreadCrumbs/BreadCrumbs.css'
import '../src/components/Survey/SurveyDetails/SurveyDetails.css'
//page css
import '../src/pages/SurveyPage.css'

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

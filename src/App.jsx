import { Route, Routes } from 'react-router-dom'
import routes from './routes/routes'
//bootstrap css nd js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//fontawesome css
import '@fortawesome/fontawesome-free/css/all.min.css'
//components css
import './App.css'
import '../src/common/Layout/NavBar/NavBar.css'
import '../src/common/Layout/SideBar/SideBar.css'
import '../src/components/Survey/SurveyDetails/SurveyDetails.css'
import '../src/components/Survey/SurveyResponse/SurveyResponse.css'
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

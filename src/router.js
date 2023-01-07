import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import App from "./App"
  import Index from "./pages/Index"
  import Show from "./pages/Show"
  import {peopleLoader} from "./loaders"
  import {createAction} from "./actions"
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index/>} loader={peopleLoader}/>
      <Route path=":id" element={<Show/>}/>
      <Route path="create" action={createAction}/>
      <Route path="update/:id"/>
      <Route path="delete/:id"/>
    </Route>)
  )
  
  export default router
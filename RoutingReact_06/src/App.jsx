
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";

import UserId from "./routes/users/UserId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div className="grid h-screen place-content-center bg-white px-4">
      <h1 className="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
      {/* Base */}

<a
  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/"
>
  Go Back
</a>


</div>
  },
  {
    path: "/users/:userId",
    element: <UserId/>,
  },
]);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App

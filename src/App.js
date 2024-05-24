import './App.css';
import Form from './Form';
import RootLayout from './RootLayOut';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router =createBrowserRouter([
    {
      path: "/",
      element: <Form/>,
      // children: [
      //   {
      //     path: "/",
      //     element: <Form/>
      //    }
       
      // ]
    }
  ])
  return (
    <div className="App">
    
     <RouterProvider router={router}  /> 
    

    </div>
  );
}


export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Form from './Form';
// import RootLayout from './RootLayout';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
          
//           <Route path="/Form" element={<Form />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
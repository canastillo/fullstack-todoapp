import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AllTodos, SingleTodo } from './views';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exac path="/todos" element={<AllTodos/>} />
          <Route exac path="/todos/:id" element={<SingleTodo/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
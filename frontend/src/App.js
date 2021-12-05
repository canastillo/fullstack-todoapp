import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AllFolders, AllTodos, FolderTodos, SingleTodo } from './views';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exac path="/todos" element={<AllTodos/>} />
          <Route exac path="/todos/:id" element={<SingleTodo/>} />
          <Route exac path="/folders" element={<AllFolders/>} />
          <Route exac path="/folders/:id" element={<FolderTodos/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
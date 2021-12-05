import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AllFolders, AllTodos, FolderTodos, SingleTodo } from './views';
import { Container } from './components/layout';

function App() {
  return (
    <>
      <main>
        <Container>
          <Router>
            <Routes>
              <Route exac path="/" element={<Home />} />
              <Route exac path="/todos" element={<AllTodos />} />
              <Route exac path="/todos/:id" element={<SingleTodo />} />
              <Route exac path="/folders" element={<AllFolders />} />
              <Route exac path="/folders/:id" element={<FolderTodos />} />
            </Routes>
          </Router>
        </Container>
      </main>
    </>
  );
}

export default App;
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import AppRouter from './router';

function App() {
  return (
    <Router>
      <Toaster position="top-center" toastOptions={{
          className: "max-w-[400px] text-[1.2rem] font-bold",
        }}/>
      <AppRouter />
      
    </Router>
  );
}

export default App;

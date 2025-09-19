import Router from './router/Router';
import { ThemeProvider } from './utils/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <div className="aurora-background"></div>
        <div className="relative z-10">
          <Router />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
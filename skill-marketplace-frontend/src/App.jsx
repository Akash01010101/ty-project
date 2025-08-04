import Router from './router/Router';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="aurora-background"></div>
      <div className="relative z-10">
        <Router />
      </div>
    </div>
  );
}

export default App;
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="root">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

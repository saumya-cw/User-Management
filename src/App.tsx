import './index.css';
import { UsersGrid } from './features/users-grid/components/UsersGrid';
function App() {

  return (
    <div className="flex flex-col gap-8 p-8">
      <UsersGrid />
    </div>
  );
}

export default App

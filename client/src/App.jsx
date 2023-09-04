import './App.css';
import PostsList from './features/posts/PostsList';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React on Rails Blog</h1>
      <p>Find this application layout in client/src/app.jsx</p>
      <PostsList />
    </div>
  );
}

export default App;

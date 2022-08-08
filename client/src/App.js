import {PostList} from './components/PostLists';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div class="containter">
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/posts/:id" element={<h1> Post details</h1>} />
            </Routes>
        </div>
    );
}

export default App;

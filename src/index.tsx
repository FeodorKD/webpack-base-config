import { createRoot } from 'react-dom/client';
import { App } from '@/App/App';

const root = document.getElementById('root');

if(!root){
    throw new Error();
}

const app = createRoot(root);

app.render(
    <div>
        <App/>
    </div>
);
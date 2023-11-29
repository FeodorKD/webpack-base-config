import {createRoot} from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './App/router/router';


const root = document.getElementById('root')

if(!root){
    throw new Error()
}

const app = createRoot(root)

app.render(
    <RouterProvider router={router}/>
)
import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import Icon from '@/assets/app-image.svg';
import PngImage from '@/assets/avatar.png';
import JpgImage from '@/assets/avatar.jpg';


export const App = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <br/>
            <Link to={'/'}>main</Link>
            <br/>
            <Icon color={'red'} width={300} height={300}/>
            <img src={PngImage} width={300} height={300} alt={'image'}/>
            <img src={JpgImage} width={300} height={300} alt={'image'}/>
            <h1>Hello React</h1>
            <button className={classes.button} onClick={() => setCount(prev => prev + 1)}>Count is {count}</button>   
            <Outlet/> 
        </div>
    )
}

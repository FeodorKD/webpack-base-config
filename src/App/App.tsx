import { useState } from 'react';
import { getSquare } from '@/App/getSquare';

export const App = () => {
    const [count, setCount] = useState(0);
    const squareCount = getSquare(count);
    return (
        <div>
            <div data-testid='count'>{count}</div>
            <div data-testid='square'>{squareCount}</div>
            <button onClick={() => setCount((count) => count + 1)}>click</button>
        </div>
    );
};

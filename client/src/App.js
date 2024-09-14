import React, {useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import { getGrid } from './actions.js';
import { useSelector } from 'react-redux';
import Front from './Front.js';
    
const App = () => {
        const [currentId, setCurrentId] = useState(null);
        
        return (
        <Front key={setCurrentId} ></Front>
          );
    }
    
export default App;
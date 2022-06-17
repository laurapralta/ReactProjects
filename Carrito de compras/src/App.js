import React, {useState} from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';
import { AppContainer } from './styles/styles';

function App() {
    const [total, setTotal] = useState(0);

    const aumentarTotal = () => {
        setTotal(total + 1);
    }

    return (
        <AppContainer>
            <Cabecera productos={total}/>
            <Listado aumentarTotal={aumentarTotal}/>
        </AppContainer>
    );
}

export default App;

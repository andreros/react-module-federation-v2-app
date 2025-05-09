import { useContext } from 'react';

import { GlobalContext } from '@/context/global';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
    const { useGlobalStore } = useContext(GlobalContext);
    const navigate = useNavigate();

    const authenticated = useGlobalStore?.(store => store.authenticated);
    const loading = useGlobalStore?.(store => store.loading);
    const setAuthenticated = useGlobalStore?.(store => store.setAuthenticated);
    const setLoading = useGlobalStore?.(store => store.setLoading);

    return (
        <div className='content'>
            <h2>Micro Frontend</h2>

            <p>I'm a micro-front-end but I can standalone!</p>

            <p>
                <button onClick={() => navigate('/')}>Go back</button>
                <button onClick={() => navigate('details')}>Go to "Details"</button>
            </p>

            {(setAuthenticated || setLoading) && <h3>Shared state variables</h3>}

            {setAuthenticated && (
                <>
                    <p>Authenticated: {String(authenticated)}</p>
                    <button onClick={() => setAuthenticated(!authenticated)}>Toggle Authentication</button>
                </>
            )}
            {setLoading && (
                <>
                    <p>Loading: {String(loading)}</p>
                    <button onClick={() => setLoading(!loading)}>Toggle Loading</button>
                </>
            )}
        </div>
    );
};

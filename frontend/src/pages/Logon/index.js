import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('name', response.data.name);
            localStorage.setItem('id', id);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="logo"/>

                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}    
                    />
                    <button className='button' type='submit'>Entrar</button>

                    <Link className='back-link' to="/register">
                        <FiLogIn size={16} color='#E02041' />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroes} alt="heroes"/>
        </div>
    );
}

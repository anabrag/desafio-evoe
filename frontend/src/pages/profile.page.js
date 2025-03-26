import React from 'react';

const ProfilePage = () => {
    return (
        <div>
            {/* dados do administrador */}
            <div className='header'>
                <h3>Minha conta</h3>
            </div>
            <div className='section'>
                <h5>Dados gerais</h5>
                <p>Informações sobre a sua conta</p>
            </div>

            <div className='card'>
                <div className='input-group'>
                    <p>Nome</p>
                    <input type='text'></input>
                </div>
                <div className='input-group'>
                    <p>Email</p>
                    <input type='text'></input>
                </div>
                <div className='input-group'>
                    <p>Telefone</p>
                    <input placeholder='(00) 00000-0000'></input>
                </div>
            </div>

            <div className='save-button'>
                <button className='btn-primary'>Salvar Informações</button>
            </div>

            <p>Welcome to the profile page!</p>
            <button className="btn-primary">oi</button>
            <button className="btn-small">oi</button>
            <button className="btn-primary" disabled>oi</button>
            <button className="btn-primary btn-small" disabled>oi</button> 
        </div>
    );
};

export default ProfilePage;
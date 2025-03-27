import React, { useState, useEffect } from 'react';
import user_icon from '../assets/svg/user-icon.svg'
import APIService from '../services/base.service';

const ProfilePage = () => {

    const MOCK_USER_ID = 1

    const [user, setUser] = useState({
        name: "",
        email: "",
        taxid: "",
        phoneNumber: ""
    })

    const loadUserProfile = async (user_id) => {
        const response = await new APIService().get(`/user/${user_id}`)
        setUser(response)
    }

    const saveUserProfile = async () => {
        const user_id = MOCK_USER_ID
        await new APIService().put(`/user/${user_id}`, user)
    }

    const handleFormChange = (field, value) => {
        console.log(field, value)
        setUser({...user, [field]: value})
    }

    useEffect(() => {
        loadUserProfile(MOCK_USER_ID)
    }, [])
    
    return (
        <div className="profile-container">
        <div className="profile-card">
          {/* Seção da imagem e informações */}
          <div className="profile-left">
            <div className="avatar">
              <img src={user_icon} alt="User Avatar" style={{width: '75%', height: 'auto'}} />
            </div>
            <div className="profile-info">
              <h2>{user.name}</h2>
              <p className="email">{user.email}</p>
            </div>
          </div>
  
          {/* Seção do formulário */}
          <div className="profile-right">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder='Nome' value={user.name} onChange={(event) => handleFormChange("name", event.target.value)}/>
            </div>
            <div className="input-group">
              <label>Telefone</label>
              <input type="text" placeholder="(00) 00000-0000" value={user.phoneNumber} onChange={(event) => handleFormChange("phoneNumber", event.target.value)}/>
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="text" placeholder="ryan@example.com" value={user.email} onChange={(event) => handleFormChange("email", event.target.value)}/>
            </div>
            <div className="input-group">
              <label>CPF</label>
              <input type="text" placeholder='***********' value={user.taxid} disabled/>
            </div>
            <div className="input-group">
              <label>Senha</label>
              <button className="action-button">
                Mudar senha
              </button>
            </div>
            <div>
              <button className="save-button" onClick={saveUserProfile}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfilePage;
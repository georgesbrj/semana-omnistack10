import React from './node_modules/react';
import './style.css';

function DevItem({ dev }){
 
   return (
    <li  className="dev-item">
    <header>
       <img src={dev.avatar_url} alt={dev.name}></img>
       <div  className="user-info">
        <strong>{dev.name}</strong>
         <strong>{dev.techs.join(',')}</strong>
       </div>
        <p>{dev.bio}</p>
       <a href={`https://github.com/${dev.github_username}`}>Acessar perfil git</a>
    </header>
  </li>
   );
}

export default DevItem;
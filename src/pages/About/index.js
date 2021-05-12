import React from 'react'
import {DiGithubFull} from 'react-icons/di';
import {FiLinkedin} from 'react-icons/fi';
import {BiWorld} from 'react-icons/bi';

export default function index() {
  return (
    <div>
      <h1>Sobre este App</h1>
      <h2>## Desafio</h2>
      <p> O desafio é criar um SPA em React, onde seja possível realizar a busca de um filme pelo seu título. Também deve ser possível visualizar mais detalhes dos filmes.</p>
      <p>A API a ser utilizada será a <a href="http://www.omdbapi.com/"target="_blank" rel="noreferrer" >[OMDb]</a> ao qual o candidato deverá criar uma conta.</p>
      <ul>
        <li>Layout bem feito</li>
        <li>Código organizado</li>
        <li>Deve publicar o projeto como publico no Github</li>
        <li>Diferencial: Utilizar alguma biblioteca de controle de estado</li>
        <li>Diferencial: >60% de cobertura de testes</li>
        <li>Diferencial: Styled Components</li>
        <li>Diferencial: Criar outras áreas, como por exemplo, filmes prediletos, área de login, etc</li>
        <li>Diferencial: Otimizar webpack.</li>
      </ul>
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '2em'}}>
        <div style={{textAlign: 'center'}}>
          <a href="https://github.com/otiagosoares/movie-app" target="_blank"  rel="noreferrer">
            Projeto no <br />
            <span style={{fontSize: '4em'}}> <DiGithubFull /></span>
          </a>
        </div>
        <div style={{textAlign: 'center'}}>
          <a href="https://www.linkedin.com/in/otiagosoares/" target="_blank"  rel="noreferrer">
            Meu Linkedin: <br />
            <span style={{fontSize: '2em'}}> <FiLinkedin /></span>
          </a>
        </div>
        <div style={{textAlign: 'center'}}>
          <a href="https://tiagosoares.com.br/" target="_blank"  rel="noreferrer">
            Meu Site: <br />
            <span style={{fontSize: '2em'}}> <BiWorld /></span>
          </a>
        </div>
      </div>
    </div>
  )
}

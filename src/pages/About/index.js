import React from 'react'

export default function index() {
  return (
    <div>
      <h1>Sobre este App</h1>
      <h2>## Desafio</h2>
      <p> O desafio é criar um SPA em React, onde seja possível realizar a busca de um filme pelo seu título. Também deve ser possível visualizar mais detalhes dos filmes.</p>
      <p>A API a ser utilizada será a [OMDb](http://www.omdbapi.com/) ao qual o candidato deverá criar uma conta.</p>
      <ul>
        <li> - [x] Layout bem feito</li>
        <li> - [x] Código organizado</li>
        <li> - [] Deve publicar o projeto como publico no Github</li>
        <li> - [x] Diferencial: Utilizar alguma biblioteca de controle de estado</li>
        <li> - [ ] Diferencial: >60% de cobertura de testes</li>
        <li> - [x] Diferencial: Styled Components</li>
        <li> - [ ] Diferencial: Criar outras áreas, como por exemplo, filmes prediletos, área de login, etc</li>
        <li> - [ ] Diferencial: Otimizar webpack.</li>
      </ul>
    </div>
  )
}

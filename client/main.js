import './style.css'
import noteSvg from './note.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="" target="_blank">
      <img src="${noteSvg}" class="logo note" alt="logo" />
    </a>
    <h1>Bem vindo ao app de anotações academicas!</h1>
    <p class="read-the-docs">
      Utilize para fazer anotações, classificar a dificuldade das disciplinas e mais...
    </p>
    <a href="./src/html/cadastro.html" class="button">
      Começar!
    </a>
  </div>
`


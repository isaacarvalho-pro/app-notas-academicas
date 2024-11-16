import './style.css'
import noteSvg from './note.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${noteSvg}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Bem vindo ao app de anotações academicas!</h1>
    <p class="read-the-docs">
      Utilize para fazer anotações, classificar a dificuldade das materias e mais...
    </p>
  </div>
`


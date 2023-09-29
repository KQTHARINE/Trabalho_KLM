import Jogos from './componentes/Jogos';


function App() {
  return (
    <div className="App">
      <hr />

      <Jogos desc= "Bem-vindo ao seu novo emprego de verão na Freddy Fazbear's Pizza, 
      onde crianças e pais vêm em busca de entretenimento e comida! A atração principal é Freddy Fazbear, 
      claro; e seus dois amigos. São robôs animatrônicos, programados para agradar multidões!"
      categoria="Terror / Suspense / Familia"/>
      <hr />


      <p className="pepo"> <strong> © Copyright 2000-2023 KLM e Participações S.A </strong> </p> <p className="pepo2"> - editoriais | política de privacidade | minha conta | anuncie conosco</p>
      <hr />
    </div>
  );
}

export default App;
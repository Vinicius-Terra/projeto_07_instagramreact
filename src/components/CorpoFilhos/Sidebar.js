export default function Sidebar() {
    return (
      <div class="sidebar">

        <Usuario />

        <Sugestoes />

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    );
  }

function Usuario () {

  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        Catana
      </div>
    </div>
  );


}

function Sugestoes () {

  const sugestao = [
    { image : "assets/img/bad.vibes.memes.svg",
      name : "bad.vibes.memes",
      status : "Segue você"
    },
    { image : "assets/img/chibirdart.svg",
      name : "chibirdart",
      status : "Segue você"
    },
    { image : "assets/img/razoesparaacreditar.svg",
      name : "razoesparaacreditar",
      status : "Novo no Instagram"
    },
    { image : "assets/img/adorable_animals.svg",
      name : "adorable_animals",
      status : "Segue você"
    },
    { image : "assets/img/smallcutecats.svg",
      name : "smallcutecats",
      status : "Segue você"
    }]


    const componentesSugestao = sugestao.map(obj =>  <Sugestao 
      image = {obj.image}
      name = {obj.name}
      status = {obj.status}
    /> )



  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {componentesSugestao}

    </div>
  );


}

function Sugestao (props) {

  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.image} />
          <div class="texto">
            <div class="nome">{props.name}</div>
            <div class="razao">{props.status}</div>
          </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );


}
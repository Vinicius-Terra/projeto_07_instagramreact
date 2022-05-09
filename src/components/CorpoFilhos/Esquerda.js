import React from "react";

export default function Esquerda() {
    
  

  function heartClick (like, setLike, setDislike) { 

    if (like === "Liked"){
  
      setLike("Invisivel")
      setDislike("Visivel")
    }
    else{

      setLike("Liked")
      setDislike("Invisivel")
    }
  
  
  }  

  function postClick (setLike, setDislike) { 

    setLike("Liked")
    setDislike("Invisivel")

  }

    return (
      <div class="esquerda">
            
        <Stories /> 

        <Posts />   

      </div>
    );
  

  



  function Stories () {
    
    const stories = [
      {image : "assets/img/9gag.svg",
      user: "9gag"},
      {image : "assets/img/meowed.svg",
      user: "meowed"},
      {image : "assets/img/barked.svg",
      user: "barked"},
      {image : "assets/img/nathanwpylestrangeplanet.svg",
      user: "nathanwpylestrangeplanet"},
      {image : "assets/img/wawawicomics.svg",
      user: "wawawicomics"},
      {image : "assets/img/respondeai.svg",
      user: "respondeai"},
      {image : "assets/img/filomoderna.svg",
      user: "filomoderna"},
      {image : "assets/img/memeriagourmet.svg",
      user: "memeriagourmet"}
    ]

    const	componentesStory =  stories.map( obj =>   <Story image = {obj.image}
    user = {obj.user} /> );
                              

    return (
      <div class="stories">
                    
        {componentesStory}

        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>

      </div>
        );   
  }

  function Story (props) {

    return (
      <div class="story">
        <div class="imagem">
          <img src={props.image} />
        </div>
        <div class="usuario">
          {props.user}
        </div>
      </div>
    );

  }

  function Posts () {

    const post = [{
      userImage : "assets/img/meowed.svg",
      user : "meowed",
      contentImage : "assets/img/gato-telefone.svg",
      likedImage : "assets/img/respondeai.svg",
      likedName : "respondeai",
      likesNumbers : "101.523"},
      {
      userImage : "assets/img/barked.svg",
      user : "barked",
      contentImage : "assets/img/dog.svg",
      likedImage : "assets/img/adorable_animals.svg",
      likedName : "adorable_animals",
      likesNumbers : "99.159"  
      }]

      const compontesPost = post.map(obj =>  <Post 
        userImage = {obj.userImage}
        user = {obj.user}
        contentImage = {obj.contentImage}
        likedImage = {obj.likedImage}
        likedName = {obj.likedName}
        likesNumbers = {obj.likesNumbers}
      /> )


    return (
      <div class="posts">
        
      {compontesPost}



      </div>
    );

  }

  function Post (props) {



    const [like, setLike] = React.useState("Invisivel");
    const [dislike, setDislike] = React.useState("Visivel");

    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.userImage} />
            {props.user}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo" onClick={() => postClick (setLike, setDislike)}>
          <img src={props.contentImage} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>

              <ion-icon name="heart-outline" class={dislike} 
              onClick={() => heartClick(like, setLike, setDislike )}></ion-icon>
              <ion-icon name="heart" class={like} 
              onClick={() => heartClick(like, setLike, setDislike )}></ion-icon>

              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.likedImage} />
            <div class="texto">
              Curtido por <strong>{props.likedName}</strong> e <strong>outras {props.likesNumbers} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );

  }


}


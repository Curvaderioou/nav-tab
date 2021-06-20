
function initTabMenu (){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')


  if(tabMenu.length && tabContent.length){
      tabContent[0].classList.add("ativo")
      function activeTab(index) {
        tabContent.forEach((section)=>{
        section.classList.remove("ativo")
      })
        const direction = tabContent[index].dataset.anime;
        tabContent[index].classList.add("ativo", direction)
      }

        tabMenu.forEach((itemMenu, index)=>{
        itemMenu.addEventListener("click", ()=> { 
        activeTab(index)
      })
    })
  }
}
initTabMenu();

/*
css

.js [data-tab="content"] section {
  display: none;
}

.js [data-tab="content"] section.ativo {
  display: block !important;
}
.js [data-tab="content"] section.ativo.show-down {
  animation: show-down 0.5s forwards;
}
.js [data-tab="content"] section.ativo.show-right {
  animation: show-right 0.5s forwards;
}

@keyframes show-down {
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes show-right {
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}


*/
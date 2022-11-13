

const grid = document.querySelector(".grid")
const botoesSFW = document.querySelectorAll(".botao")
const botoesNSFW = document.querySelectorAll(".botoesNSFW")
const nsfwHiddenMenu = document.querySelector(".link-nsfw")
const test1 = document.querySelector(".nsfwttl")

test1.addEventListener("click",()=>{
  nsfwHiddenMenu.classList.toggle("hidden-nsfw")
})






const arrayOfBtn = Array.from(botoesSFW)
arrayOfBtn.forEach(botao => {
  botao.addEventListener("click",()=>{
    const className = botao.innerHTML  
    console.log("clicked")
      function apiRequestData(){
          const option = {
              method : 'POST',
              mode: 'cors',
              cache: 'default',
              headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
              body: JSON.stringify({})
  
          }
          const animeAPI = fetch(`https://api.waifu.pics/many/sfw/${className}`,option)
          .then(res => {
              return res.json()
            })
            .then(data => {
            
            grid.innerHTML = "" 
            
            const arrPic = Array.from(data.files)
             arrPic.forEach(pic => {
              return grid.innerHTML += ` <a href = "${pic}" target="_blank"> <img src="${pic}" alt="" class = "card-tall"> </a>`
             }); 
            })    
      }
      apiRequestData()
  })
});
const arrayOfBtnNSFW = Array.from(botoesNSFW)
arrayOfBtnNSFW.forEach(botao => {
  botao.addEventListener("click",()=>{
    const className = botao.innerHTML
    console.log("clicked")
      function apiRequestData(){
          const option = {
              method : 'POST',
              mode: 'cors',
              cache: 'default',
              headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
              body: JSON.stringify({})
          }
          const animeAPI = fetch(`https://api.waifu.pics/many/nsfw/${className}`,option)
          .then(res => {
              return res.json()
            })
            .then(data => {
              grid.innerHTML = "" 
            const arrPic = Array.from(data.files)
             arrPic.forEach(pic => {
              return grid.innerHTML += `<a href = "${pic}" target="_blank"> <img src="${pic}" alt="" > </a>`
             });
         })
      }
      apiRequestData()
  })
});

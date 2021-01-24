var collapse, restore

collapse = document.querySelector('.hamburger')
collapse.addEventListener('click' ,function(){
          document.getElementById('navbar').style.display = 'none'
          document.querySelector('.hero-expression').style.display = 'none'

          document.querySelector('.toggle').style.display = 'block'
})

restore = document.querySelector('.close')
restore.addEventListener('click' , function(){
          document.querySelector('.toggle').style.display = 'none'

          document.getElementById('navbar').style.display = 'block'
          document.querySelector('.hero-expression').style.display = 'block'

          
})
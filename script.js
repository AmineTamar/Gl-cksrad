function shuffle(array){
    var currentIndex =array.length,randomIndex;
    while(0 !== currentIndex){
       randomIndex = Math.floor(Math.random()* currentIndex);
       currentIndex--;
       [array[currentIndex], array[randomIndex]]=[array[currentIndex],array[currentIndex]];
    }
    return array;
}


function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let selectItem ="";


    let Amine = shuffle([1890, 2250 ,2610]);
    let christiane = shuffle([1850,2210,2570]);
    let Jan = shuffle([1770,2130,2490]);
    let Kay = shuffle([1810,2170,2530]);
    let leo = shuffle([1750,2110,2470]);
    let Eddy = shuffle([1630,1990,2350]);
    let Alex = shuffle([1570,1930,2290]); 


   let Dirk = shuffle([1770,2130,2490]);
    let Nin = shuffle([1770,2130,2490]);
    let Micheal = shuffle([1770,2130,2490]);
   
    let results = shuffle([

Amine[0],
christiane[0],
Jan[0],
Kay[0],
leo[0],
Eddy[0],
Alex[0],

    ]);

    if(Amine.includes(results[0])) selectItem = "Amine";
    if(christiane.includes(results[0])) selectItem = "Christiane";
    if(Jan.includes(results[0])) selectItem = "Jan";
    
    if(Kay.includes(results[0])) selectItem = "Kay";
    if(leo.includes(results[0])) selectItem = "Leo";
    if(Eddy.includes(results[0])) selectItem = "Eddy";

    box.style.setProperty("transition","all ease 5s");
    box.style.transform ="rotate("+ results[0] + "deg)";
    element.classList.remove("animate");

    setTimeout(function(){

        element.classList.add("animate");
    },5000);

    setTimeout(function(){
        applause.play();
        Swal.fire({

            title: 'Sweet!',
            text: ' You Won   ' + selectItem,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    },5500)
    setTimeout(function(){
        box.style.setProperty("transition","initial");
        box.style.transform = "rotate(90deg)";
    },6000);

   
}
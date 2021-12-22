//Intersection observer, para ver/detectar si esta visible, o darle scrol hasta que aparece un div, y ahi detecta el intersecting y el visible
//Por ejemplo como hace twitter que mientras vas bajando o ves el ultimo tw q se muestra te muestra los demás

document.addEventListener('DOMContentLoaded',() => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting){
            console.log('Ya está visible');
        }

    });
    observer.observe(document.querySelector('.premium'));

})
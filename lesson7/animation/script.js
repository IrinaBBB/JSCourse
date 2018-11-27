let box = document.getElementById('box'),
    btn = document.getElementById('btn');

 
function moveRight(timestamp, el, dist, duration){
    var timestamp = timestamp || new Date().getTime(),
        runtime = timestamp - starttime,
        progress = runtime / duration;
    progress = Math.min(progress, 1);
    el.style.left = (dist * progress).toFixed(2) + 'px';
    if (runtime < duration){ 
        requestAnimationFrame(function(timestamp){
            moveRight(timestamp, el, dist, duration)
        });
    }
}
 
 requestAnimationFrame(function(timestamp){
    starttime = timestamp || new Date().getTime(); 
    moveRight(timestamp, box, 350, 2000); 
}); 


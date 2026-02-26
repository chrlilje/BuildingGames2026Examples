function mousePressed(){
    sounds[0].play();
    
}

function mouseReleased(){
    sounds[0].stop();
}

function keyPressed(){
    if (key === '1') {
        // Code to run.
        sounds[0].play();
        
    }
    if (key === '2') {
        // Code to run.
        sounds[1].play();
        
    }
    if (key === '3') {
        // Code to run.
        sounds[2].play();
        
    }
}

function keyReleased(){
    if (key === '1') {
        // Code to run.
        sounds[0].stop();
    }
    if (key === '2') {
        // Code to run.
        sounds[1].stop();
    }
    if (key === '3') {
        // Code to run.
        sounds[2].stop();
    }
}
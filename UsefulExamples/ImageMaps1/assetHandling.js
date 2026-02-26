let appleTreeMap;
let appleTree = {};

function preload(){
    appleTreeMap = loadImage("assets/AppleTree_allSeasons.png");
}

function mapCoordinatesToNames(){
    appleTree.spring = appleTreeMap.get(0, 0, 96, 128);
    appleTree.winter = appleTreeMap.get(96, 0, 96, 128);

}
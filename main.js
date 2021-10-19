tutorialHeadArray=[
    "Welcome!",
    "Pong Tutorial",
    "","","","","","","","",""
]

tutorialBodyArray=[
    "Welcome to Scratch Tutorials! This is a all-in-one tutorial to teach simple and advanced projects in Scratch! From pong games to platformers, everything is here!",
    
    "For a pong game, you need 3 sprites : A ball, a paddle, and a line. All of them can be got from the sprite library. Now, follow the images:"
    ,"","","","","","","",""
]

tutorialPageCounter = 1;
tutorialArrayCounter = 0;






















function next(){
    tutorialPageCounter = tutorialPageCounter + 1;
    tutorialArrayCounter = tutorialArrayCounter +1;

    document.getElementById("tutorialHead").innerHTML=tutorialHeadArray[tutorialArrayCounter];
    document.getElementById("tutorialText").innerHTML=tutorialBodyArray[tutorialArrayCounter];
    document.getElementById("tutorialPageNumber").innerHTML=tutorialPageCounter;
}

function previous(){
        tutorialPageCounter = tutorialPageCounter - 1;
        tutorialArrayCounter = tutorialArrayCounter - 1;
    
        if (tutorialArrayCounter == 0)
        {
            document.getElementById("tutorialHead").innerHTML=tutorialHeadArray[tutorialArrayCounter];
            document.getElementById("tutorialText").innerHTML=tutorialBodyArray[tutorialArrayCounter];
            document.getElementById("tutorialPageNumber").innerHTML=tutorialPageCounter;
        }
        if (tutorialArrayCounter == 1)
        {
            document.getElementById("tutorialHead").innerHTML=tutorialHeadArray[tutorialArrayCounter];
            document.getElementById("tutorialText").innerHTML=tutorialBodyArray[tutorialArrayCounter];
            document.getElementById("tutorialPageNumber").innerHTML=tutorialPageCounter;
            document.getElementById("tutorialImages1").src="images/pongImage1.png";
        }
        
}
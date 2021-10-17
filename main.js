tutorialHeadArray=[
    "Welcome!","","","","","","","","","",""
]

tutorialBodyArray=[
    "Welcome to Scratch Tutorials! This is a all-in-one tutorial to teach simple and advanced projects in Scratch! From pong games to platformers, everything is here!","","","","","","","","",""
]

tutorialPageCounter = 1;
tutorialArrayCounter = 0;


function next(){
    tutorialPageCounter = tutorialPageCounter + 1;
    tutorialArrayCounter = tutorialArrayCounter +1;

    document.getElementById("tutorialHead").innerHTML=tutorialHeadArray[tutorialArrayCounter];
    document.getElementById("tutorialText").innerHTML=tutorialBodyArray[tutorialArrayCounter];
    
    if (tutorialPageCounter < 1)
    {
        document.getElementById("tutorialPageNumber").innerHTML="Can't go on negative numbers";
    }
    else
    {
        document.getElementById("tutorialPageNumber").innerHTML=tutorialPageCounter;
    }
}

function previous(){
       tutorialPageCounter = tutorialPageCounter - 1;
        tutorialArrayCounter = tutorialArrayCounter - 1;
    
        document.getElementById("tutorialHead").innerHTML=tutorialHeadArray[tutorialArrayCounter];
        document.getElementById("tutorialText").innerHTML=tutorialBodyArray[tutorialArrayCounter];
        
        if (tutorialPageCounter < 1)
        {
            document.getElementById("tutorialPageNumber").innerHTML="Can't go on negative numbers";
        }
        else
        {
            document.getElementById("tutorialPageNumber").innerHTML=tutorialPageCounter;
        }
}
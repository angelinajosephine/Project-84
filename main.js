canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

    window.addEventListener("keydown" , my_keydown);

    function my_keydown(e)
    {

        keyPressed = e.KeyCode;
        console.log(keyPressed);

            if(keyPressed >=97 && keyPressed<=122)||( keyPressed >=65 && keyPressed<=90) 
            {
                alphabet();
                document.getElementById("d1").innerHTML="You Pressed Alphabet Key";
                console.log("alphabet key");
            }

            function alphabetkey()
            {
                img_image="Alpkey.png"
                add();
            }

            function my_keydown(e)
    {

        keyPressed = e.KeyCode;
        console.log(keyPressed);

            if(keyPressed >=48 && keyPressed >=57  )
            {
                number();
                document.getElementById("d2").innerHTML="You Pressed Number Key";
                console.log("number key");
            }

            function numberkey()
            {
                img_image="numkey.png"
                add();
            }

            function my_keydown(e)
    {

        keyPressed = e.KeyCode;
        console.log(keyPressed);

            if(keyPressed >=37 && keyPressed >=40 )
            {
                arrow();
                document.getElementById("d3").innerHTML="You Pressed Arrow Key";
                console.log("arrow key");
            }

            function arrowkey()
            {
                img_image="Arrkey.png"
                add();
            }

           
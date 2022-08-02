        function random (min,max){
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function election(play){ //Declarando la función de elección
            let result = ""
            if(play == 1){
                result = "Rock💎"
            } else if(play == 2){
                result = "Paper📰"
            } else if(play == 3){
                result = "Scissors✂️"
            } else{
                result = "Not Allowed, choose again 😔✊"
                alert(result)
                exit
            }
            return result
            }

        //definir variables de PC y Jugador
        let player = 0
        let pc = 0 
        let wins = 0
        let loses = 0
        let ties = 0

        while(wins < 3 && loses < 3){
            pc = random(1,3)
            player = prompt("1. Rock 💎 \n2. Paper 📰 \n3. Scissors ✂️")

            //alert (PC choosed and You Choosed)
            alert("PC choosed: " + election(pc) + "\nYou choosed: " + election(player))
            
            if(player == pc){
                alert("That's a Tie!🏋️‍♀️🏋️‍♀️")
                ties++ //ties = ties + 1 or ties++ works as well
                alert("Score: " + wins + " wins👑 & " + loses + " loses😢 & " + ties + " ties 🏋️‍♀️")
            } else if ((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)){
                wins++ //wins = wins + 1 or wins++ works as well
                alert("You Won~😎")
                alert("Score: " + wins + " wins👑 & " + loses + " loses😢 & " + ties + " ties 🏋️‍♀️")
            } else{
                loses++ //loses = loses + 1 or loses++ works as well 
                alert("You Lose😔")
                alert("Score: " + wins + " wins👑 & " + loses + " loses😢 & " + ties + " ties 🏋️‍♀️")
            }
        }
    
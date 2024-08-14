const allBoxes = document.querySelectorAll('.boxes')
const res = document.querySelector('#result')
const res2 = document.querySelector('#result2')
const reset = document.querySelector('#btn')



let turn = 'X';
const change = () => {
    let turn = 'X';
    return () => {
      if (turn === 'X') {
        turn = 'O';
      } else {
        turn = 'X';
      }
      return turn;
    };
  };
  
const getNextTurn = change();

//Logic for game
let arr = Array.from(allBoxes)
arr.forEach((allBoxes) => {
    allBoxes.addEventListener('click', function(){
        if (turn){
            allBoxes.textContent = turn 
            if (turn == 'X') {
                res.textContent = 'O'
            }else{
                res.textContent = 'X'
            }
            turn = getNextTurn();
        } 
        if (arr[0].textContent == 'X' && arr[1].textContent == 'X' && arr[2].textContent == 'X' ){
            res.textContent =  'X   win' 
            res2.textContent = ' ' 
        }else if (arr[3].textContent == 'X' && arr[4].textContent == 'X' && arr[5].textContent == 'X' ){
            res.textContent =  'X   win' 
            res2.textContent = ' ' 
        }else if (arr[6].textContent == 'X' && arr[7].textContent == 'X' && arr[8].textContent == 'X' ){
            res.textContent =  'X   win' 
            res2.textContent = ' ' 
        }else if (arr[0].textContent == 'X' && arr[3].textContent == 'X' && arr[6].textContent == 'X' ){
            res.textContent =  'X   win' 
            res2.textContent = ' ' 
        }else if (arr[1].textContent == 'X' && arr[4].textContent == 'X' && arr[7].textContent == 'X' ){
            res.textContent =  'X   win' 
            res2.textContent = ' ' 
        }else if (arr[2].textContent == 'X' && arr[5].textContent == 'X' && arr[8].textContent == 'X' ){
            res.textContent =  'X   win' 
            res2.textContent = ' ' 
        }else if (arr[0].textContent == 'X' && arr[4].textContent == 'X' && arr[8].textContent == 'X' ){
            res.textContent =  'X   win' 
            res2.textContent = ' ' 
        }else if (arr[2].textContent == 'X' && arr[4].textContent == 'X' && arr[6].textContent == 'X' ){
            res.textContent =  'X   win' 
            res2.textContent = ' ' 
        }
        // Logic for player 0
        else if (arr[0].textContent == 'O' && arr[1].textContent == 'O' && arr[2].textContent == 'O' ){
            res.textContent =  'O   win' 
            res2.textContent = ' ' 
        }else if (arr[3].textContent == 'O' && arr[4].textContent == 'O' && arr[5].textContent == 'O' ){
            res.textContent =  'O   win' 
            res2.textContent = ' ' 
        }else if (arr[6].textContent == 'O' && arr[7].textContent == 'O' && arr[8].textContent == 'O' ){
            res.textContent =  'O   win' 
            res2.textContent = ' ' 
        }else if (arr[0].textContent == 'O' && arr[3].textContent == 'O' && arr[6].textContent == 'O' ){
            res.textContent =  'O   win' 
            res2.textContent = ' ' 
        }else if (arr[1].textContent == 'O' && arr[4].textContent == 'O' && arr[7].textContent == 'O' ){
            res.textContent =  'O   win' 
            res2.textContent = ' ' 
        }else if (arr[2].textContent == 'O' && arr[5].textContent == 'O' && arr[8].textContent == 'O' ){
            res.textContent =  'O   win' 
            res2.textContent = ' ' 
        }else if (arr[0].textContent == 'O' && arr[4].textContent == 'O' && arr[8].textContent == 'O' ){
            res.textContent =  'O   win' 
            res2.textContent = ' ' 
        }else if (arr[2].textContent == 'O' && arr[4].textContent == 'O' && arr[6].textContent == 'O' ){
            res.textContent =  'O   win' 
            res2.textContent = ' ' 
        }
    })    
    reset.addEventListener('click',function () {
        allBoxes.textContent = " " 
        res.textContent = " "
        res2.textContent = "Turn of player"
    })
});
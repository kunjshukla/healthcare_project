const counterNum = document.querySelectorAll(".counter-numbers");
        const speed = 200;
        
        counterNum.forEach((curElem) => {
            const updateNumber = () => {
                const targetNumber = parseInt(curElem.dataset.number);
                //console.log(targetNumber);
        
                const initialNumber = parseInt(curElem.innerText);
                // console.log(initialNumber);
        
                const incrementNumber = Math.trunc(targetNumber/speed);
                // console.log(incrementNumber);
        
                if(initialNumber < targetNumber){
                    curElem.innerText = `${initialNumber+incrementNumber}+`;
                    setTimeout(updateNumber,20);
                }
            };
        
            updateNumber();
        });        


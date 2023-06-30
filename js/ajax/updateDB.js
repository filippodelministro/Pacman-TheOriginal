//AJAX functions: pass variables to update.php to update DB

function updateMatches(score, ghost, timer, res) {
    const url = './../php/updateDB.php';
    const data = 'score=' + score + '&ghost=' + ghost + '&timer=' + timer + '&res=' + res;

    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data
    })

    .catch(error => {console.log('updateMatchesError:', error);});
}

function updateWallet(coins, fun) {
    const url = './../php/updateDB.php';
    const data = 'coins=' + coins + '&fun=' + fun;
    
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data
    })

    .catch(error => {console.log('Error during updateWallet():',  error);});
}
    

function handleSkin(buy, type, skin, coins, price) {    
    if (buy) {
        // Se si sta acquistando una nuova skin, controlla il wallet e lo aggiorna
        if(document.getElementById(type + "-" + "price" + "-" + skin)){
            let coins =  document.getElementById("user-coins").textContent;
            let c = parseInt(coins.split(":")[1]);
            
            if (c >= +price) 
                updateWallet(+price, "remove");
            else {
                window.alert("Low budget!");
                return;
            }
        }
    }
    
    const url = './../php/updateDB.php';
    const data = 'buy=' + buy + '&type=' + type + '&skin=' + skin;

    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data
    })
    
    .then(response => {
        if (response.ok) {
            changeSkin(buy, type, skin);            //update HTML element in Store page
        } else {
            console.log('Error during handleSkin');
        }
    })
        
    .catch(error => {console.log('Error during handleSkin():', error);});
}
      


function changeSkin(buy, type, skin){
    let el = document.getElementById(type + "-" + skin);
    
    //if buying, handle text element and check if is possible to buy
    let price = document.getElementById(type + "-" + "price" + "-" + skin);
    if(price){
        let p = parseInt(price.textContent);
        let coins =  document.getElementById("user-coins").textContent;
        let c = parseInt(coins.split(":")[1]);

        c -= p;
        if(c<0){
            window.alert("Low budget!");
            return;
        }
        
        document.getElementById("user-coins").textContent = "coins: " + c;

        el.classList.remove("locked");
        price.remove();
    }

    //remove the using color to the select element
    let using = document.querySelector(".using-"+type);
    using.classList.remove("using-"+type);
    using.classList.add("select");

    el.classList.add("using-"+type);

    //change skin in preview section
    document.getElementById("user-"+type+"-skin").textContent = type + ": " + skin;
}

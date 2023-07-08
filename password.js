
function validate()
{
    let input = document.getElementById("password").value;
    //console.log(input);
    
    if(input == 'latte')
    {
        //console.log('success!');
        let body = document.getElementById('websiteBody');
        //console.log(body);

        if (body.style.display == 'none') {
            body.removeAttribute('style');
            //console.log(body);
            //console.log('are we in here?');
         } 

        let passDiv = document.getElementById('passDiv');
        passDiv.style.display = 'none';

    }
    else{
        //alert('Invalid Password');
        let invalidPass = document.getElementById('invalidPass');
        //console.log(invalidPass);
        invalidPass.innerHTML = 'INVALID PASSWORD. TRY AGAIN.';

    }
    input.reset();    
}

const input = document.getElementById("password");
input.addEventListener("keydown", function(e) {
    if(e.code == "Enter"){
        validate();
    }
})


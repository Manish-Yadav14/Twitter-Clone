let form = document.getElementById('user-form');
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('pwd');
let cnfmsg = document.getElementById('cnfmsg');

const renderConfirmation = ()=>{
    let msg =  `<div id="alert" class="alert alert-info alert-dismissible fade show" role="alert">
        <strong>Success!</strong> You have been Successfully Registered. Login Now!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    cnfmsg.innerHTML = msg;
    
};


//form
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    // console.log("clicked on submit");
    const name  = inputName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;

    try {
        const req = await axios.post('/api/v2/user',{name,email,password});
        const res = req.data;
        if(res){
            renderConfirmation();
        }        
    } catch (error) {
        console.log(error);
    }

})

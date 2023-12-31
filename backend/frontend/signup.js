
let form = document.getElementById('user-form');
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('pwd');

const tohomepage =()=>{
    window.location.href('https://localhost:3000/index.html');
}


//form
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    // console.log("clicked on submit");
    const name  = inputName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;

    try {
        const req = await axios.post('/api/v2/signup',{name,email,password});
        const res = req.data;
        if(res){
            tohomepage();
        }
    
            
    } catch (error) {
        console.log(error);
    }

})

let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('pwd');
let login = document.getElementById('user-login');

const toHomePage = ()=>{
    window.location.href = 'http://localhost:3000/home.html';
}


login.addEventListener('submit',async(e)=>{
    e.preventDefault();

    const email = inputEmail.value;
    const password = inputPassword.value;

    try {
        const req = await axios.post('/api/v2/user/login',{email,password});
        const res = req.data;
        console.log(res);
        if(res){
            toHomePage();
        }
    } catch (error) {
        console.log(error);  
    }

})
welcomemsg()

function welcomemsg(){
     
    let nama = prompt("Please input your name : ")

    if (nama != null){
        document.getElementById("msg").innerText = "Hello " + nama + ", welcome to my website"
    }   
}


function validateFormData(){
    
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value
    const message = document.getElementById('message').value;

    output.innerHTML = `
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender}</p>
        <p><strong>Pesan :</strong> ${message}</p>
    `;

  form.reset();
};
  

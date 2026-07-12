// ===============================
// ROOMMATE FINDER SCRIPT
// ===============================


// Elements

const findBtn = document.getElementById("findBtn");

const loading = document.getElementById("loading");

const matchCard = document.getElementById("matchCard");


const profileBtn = document.getElementById("profileBtn");

const profileModal = document.getElementById("profileModal");

const closeModal = document.getElementById("closeModal");


const requestBtn = document.getElementById("requestBtn");


const chatWindow = document.getElementById("chatWindow");

const messages = document.getElementById("messages");

const messageInput = document.getElementById("messageInput");

const sendMessage = document.getElementById("sendMessage");


const confirmRoommate = document.getElementById("confirmRoommate");


const contactBox = document.getElementById("contactBox");





// ===============================
// FIND MATCH
// ===============================


findBtn.addEventListener("click",()=>{


    findBtn.innerText="Finding Match...";

    findBtn.disabled=true;


    loading.classList.remove("hidden");


    matchCard.classList.add("hidden");



    setTimeout(()=>{


        loading.classList.add("hidden");


        matchCard.classList.remove("hidden");


        findBtn.innerText="Match Found ✓";


    },2000);



});






// ===============================
// PROFILE MODAL
// ===============================


profileBtn.addEventListener("click",()=>{


    profileModal.classList.remove("hidden");


});





closeModal.addEventListener("click",()=>{


    profileModal.classList.add("hidden");


});





window.addEventListener("click",(event)=>{


    if(event.target === profileModal){


        profileModal.classList.add("hidden");


    }


});






// ===============================
// SEND ROOMMATE REQUEST
// ===============================


requestBtn.addEventListener("click",()=>{


    requestBtn.innerText="Request Sent";


    requestBtn.disabled=true;


    requestBtn.style.background="#f59e0b";




    setTimeout(()=>{


        requestBtn.innerText="Accepted ✓";


        requestBtn.style.background="#22c55e";



        const message=document.createElement("div");


        message.className="message received";


        message.innerText=
        "🎉 Riya accepted your request! Chat unlocked.";



        messages.appendChild(message);



        chatWindow.classList.remove("hidden");



    },2000);



});







// ===============================
// CHAT SYSTEM
// ===============================



sendMessage.addEventListener("click",sendChat);



messageInput.addEventListener("keypress",(event)=>{


    if(event.key==="Enter"){

        sendChat();

    }


});





function sendChat(){


    let text = messageInput.value.trim();



    if(text==="") return;




    addMessage(text,"sent");


    messageInput.value="";



    botReply();



}






function addMessage(text,type){


    const div=document.createElement("div");


    div.className="message "+type;


    div.innerText=text;



    messages.appendChild(div);



    messages.scrollTop=
    messages.scrollHeight;



}





function botReply(){


    const replies=[

        "That sounds good 😊",

        "I think our habits match well!",

        "Looking forward to staying together.",

        "Our schedules seem compatible."

    ];



    const randomReply=
    replies[Math.floor(Math.random()*replies.length)];



    setTimeout(()=>{


        addMessage(
            randomReply,
            "received"
        );


    },1200);



}







// ===============================
// CONFIRM ROOMMATE
// ===============================



confirmRoommate.addEventListener("click",()=>{


    chatWindow.classList.add("hidden");



    contactBox.classList.remove("hidden");



});
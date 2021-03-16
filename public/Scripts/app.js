
// IIfe 


/*File name: app.js
  Ruchit Patel
  301094664
  21th october 2020*/
(function() {
    function Start()
    {
        console.log("App Started...");

        if(document.title=="Contact"){
            let sendButton = document.getElementById("sendButton");
            let cancelButton = document.getElementById("cancelButton");
            let form = document.forms[0];

            sendButton.addEventListener("click", (event) => {
                event.preventDefault();

                let fullName = document.getElementById("fullName").value;
                let contactNumber = document.getElementById("contactNumber").value;
                let emailAddress = document.getElementById("emailAddress").value;
                let message = document.getElementById("message").value;
                
                console.info(`fullname: ${fullName}
                contactnumber : ${contactNumber}
                emailaddress  : ${emailAddress}
                message       : ${message}`);

                form.reset();
                location.href="/home";
            });

            cancelButton.addEventListener("click", (event) => {
                event.preventDefault();
                if(confirm("Are you sure?"))
                {
                    location.href="/home";
                }
            });
        }
        //To prevent the instant deletion...
        let deletButton = document.querySelectorAll('.btn-danger');
        
        for(button of deletButton)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) //if this is not true.. then it will goes into loop
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
        
    }
    window.addEventListener("load", Start);
  })();
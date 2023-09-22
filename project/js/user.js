class userclass {
    constructor(fname,lname,email,pass)
        {
        this.fname=fname;
        this.lname=lname;
        this.email=email;
        this.pass=pass;
        }
    }
    
var xu=localStorage.getItem("user");
if (!xu) var user=[];
else var user = JSON.parse(xu);    

      
    // Function for adding user
    function adduser()
    {
    let i;
    if (!user) i=0
    else i=user.length;
    user[i]=new userclass(
            fname.value,
            lname.value,
            email.value,
            pass.value
            );
            //emptying the record.
            fname.value="";
            lname.value="";
            email.value="";
            emailconfirm.value="";
            pass.value="";
            passconfirm.value="";
            tel.value="";

    localStorage.setItem("user", JSON.stringify(user));
    alert("User is created successfully.");                 
    }


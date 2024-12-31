
let status = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
};                      
let users_json = [{
		userId: 1,
		name: "Jon Snow",
		profilePicture:
			"https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
		statusMessage: "We become what we think about!",
		presence: 1,
	},
	{
		userId: 2,
		name: "Daenerys Targaryen",
		profilePicture:
			"https://preview.redd.it/hlxen8gtwpm01.jpg?width=640&crop=smart&auto=webp&v=enabled&s=a3c43bcbfc1db31d542ef67071559264358b3d2b",
		statusMessage: "A positive mindset brings positivethings.",
		presence: 3,
	},
	{
		userId: 3,
		name: "Tyrion Lannister",
		profilePicture:
			"https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
		statusMessage: "One small positive thought can change your whole day",
		presence: 3,
	},
	{
		userId: 4,
		name: "Jaime Lannister",
		profilePicture:
			"https://images.nightcafe.studio/jobs/mWfF1s7OOVg5DMTYiNZ8/mWfF1s7OOVg5DMTYiNZ8--4--qccau.jpg?tr=w-1600,c-at_max",
		statusMessage: "I am a rockstar",
		presence: 1,
	},
	{
		userId: 5,
		name: "Arya Stark",
		profilePicture:
			"https://64.media.tumblr.com/21de4501827aba1c6463ce2ae6a36780/tumblr_ps5le9xxRb1w9a5vgo1_1280.jpg",
		statusMessage: "I am using Gradious messenger",
		presence: 4,
} ];
let user_id=users_json.length+1;
function addUser(){
	let name=document.getElementById("name");
   let status_mess=document.getElementById("statusMessage");
   let profilePic_link=document.getElementById("profilePicLink");
   let availability=document.getElementById("presence");
   user={
	userId:++user_id,
		name:name.value,
		profilePicture:profilePic_link.value,
		statusMessage:status_mess.value ,
		presence: availability.value

   }
   document.getElementById("name").value="";
	document.getElementById("statusMessage").value="";
	document.getElementById("profilePicLink").value="";
	document.getElementById("presence").value=1;
   addBuddy(user);
}
function addBuddy(user)
{  
    users_json.unshift(user);
	display();

}
function display()
{    console.log("working");
	let ediv="";
	let link = document.createElement('link');
    link.rel='stylesheet';
    link.type='text/css';
    link.href='styledummy.css';
	document.head.appendChild(link);
	let i=0;
	users_json.forEach((each)=>{
		let bcol;
		console.log(each)
		if(each.presence==1)
			bcol="green";
		else if(each.presence==2)
			bcol="red";
		else if(each.presence==3)
			bcol="yellow";
		else
		   bcol="grey";
	ediv+=`<div class="user">
	<div class="img-container">
		<img src="${each.profilePicture}" class='user-image one' style="border-color:${bcol};" alt="user image" />
	</div>
	<div class="user-detail">
	<p class="user-name">${each.name}</p>
	<p class="user-message">${each.statusMessage}</p>
	</div>
	<div class='three-btn'>
		<div class="dropdown">
			<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
			<ul class="dropdown-menu">
			<li><button id='USR0001' onclick='deleteItem(${i})'class="dropdown-item ">Delete</button></li>
			<li><button  id='update-USR0001' onclick='updateBuddy(${i})'class="dropdown-item ">Update</button></li>
			</ul>
		</div>
	</div>
</div>`

i++;
}
)
document.getElementById("root").innerHTML=ediv;
}
 function updateBuddy(index)
 {  
	let link = document.createElement('link');
    link.rel='stylesheet';
    link.type='text/css';
    link.href='styledummy.css';
	document.head.appendChild(link);
	a=`<div class='form'>
                <div class="input">
                    <input type="text" name="" id="uname" placeholder="Name">
                </div>
                <div class="input">
                    <input type="text" name="" id="ustatusMessage" placeholder="Status Message">
                </div>
                <div class="input">
                    <input type="text" name="" id="uprofilePicLink" placeholder="Profile Picture Link">
                </div>
                <div class="input">
                    <select name="" id="upresence">
                        <option value="1">Availble</option>
                        <option value="2">Busy</option>
                        <option value="3">idle</option>
                        <option value="4">Not loggedin</option>
                    </select>
                </div>
                <div>
				<button type="button" class="btn" onclick="update(${index})">Update User</button>
                </div>                                
            </div>`
		document.getElementById("UpdateUserForm").innerHTML=a;
			 document.getElementById("addUserForm").style.display='none'
	       document.getElementById("UpdateUserForm").style.display='block';
		   document.getElementById("uname").value=users_json[index].name;
	document.getElementById("ustatusMessage").value=users_json[index].statusMessage;
	document.getElementById("uprofilePicLink").value=users_json[index].profilePicture;
	document.getElementById("upresence").value=users_json[index].presence;
		
 }
function update(index)
{   let id=users_json[index].userId;
	let a=document.getElementById("uname").value;
	let b=document.getElementById("ustatusMessage").value;
	let c=document.getElementById("uprofilePicLink").value;
	let d=document.getElementById("upresence").value;
	new_data={
		userId:id,
		name:a,
		profilePicture:c,
		statusMessage:b,
		presence:d
	}
	users_json.splice(index,1,new_data);
	console.log(users_json);
	document.getElementById("uname").value="";
	document.getElementById("ustatusMessage").value="";
	document.getElementById("uprofilePicLink").value="";
	document.getElementById("upresence").value="1";
	document.getElementById("addUserForm").style.display='block'
	      document.getElementById("UpdateUserForm").style.display='none';
	display();

}
function deleteItem(index)
{
	users_json.splice(index,1);
	display();
}
window.onload=display;
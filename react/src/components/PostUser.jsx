import axios from "axios";
import { useState } from "react";

/*************  ✨ Codeium Command 🌟  *************/
const PostUser = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        email: '',
    });
    const createUser = async () => {
        await axios.post("http://localhost:8080/api/form", 
        user, 
        {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
         })
        .then((response) => {
            setUser({name: '',age: '', email: '',});
            console.log(response);
            return alert("User Created: " + `${JSON.stringify(response.data,null,4)}`);
        })
        .catch((err) => {
            return alert(err);
        });
    };
};
   
return (
    <div>
  <div>
    <div>
      <h1>Create User</h1>
      <from>
        
        <div>
          
          <div>
            <label>Name</lable>
            <input type="text" value={user.name} onChange="" name="name" id="name" placeholder="Name">
          </div>
          
          <div>
            <label>Age</lable>
            <input type="text" value={user.age} onChange="" name="age" id="age" placeholder="Age">
          </div>
          
          <div>
            <label>Email</lable>
            <input type="text" value={user.email} onChange="" name="email" id="email" placeholder="Email">
          </div>
          
        </div>
        <button type="button" onClick=""> Create </button>
        
      </from>
    </div>
  </div>
</div>
);

export default PostUser;
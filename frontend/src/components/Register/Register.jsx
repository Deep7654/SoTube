import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [fullname, setFullname] = useState();
  const [coverImage, setCoverImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [user , setUser] = useState({})
  const [isUserReady , setIsUserReady] = useState(false)
  const [registerMsg , setRegisterMsg] = useState("Wait until you Register")

  // useCallback(()=>{},[])
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!avatar) {
        alert("Please select an avatar image.");
        return; // Stop submission if avatar is not selected
      }
      if (!coverImage) {
        alert("Please select a cover image.");
        return; // Stop submission if cover image is not selected
      }
      const userData = new FormData();
      userData.append("username", username);
      userData.append("password", password);
      userData.append("email", email);
      userData.append("fullName", fullname);
      userData.append("coverImage", coverImage);
      userData.append("avatar", avatar);
      const resp = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        userData,
        {
          withCredentials: true, // Essential for cookie handling (e.g., login response)
        }
      );
      console.log(resp.data.user);
      setUser(resp.data.user);
      setRegisterMsg("User register Success")
      setIsUserReady(true)
    } catch (err) {
        setRegisterMsg(`Failed to register : ${err.response.data.message}`)
        setUser("")
      console.log(err);
    }
  };

  return (
    <div className=" p-2 flex flex-col justify-center items-center rounded-2xl w-full h-full">
      {" "}
      {/* Added max-w-md, mx-auto, my-10 for better centering */}
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Register Account
      </h2>
      <form onSubmit={handleSubmit} className="">
        {" "}
        {/* Added space-y-4 for vertical spacing */}
        <div>
          <label
            htmlFor="username"
            className=" text-white text-sm font-bold block  mb-2"
          >
            Username
          </label>{" "}
          {/* Added margin via mb-2 */}
          <input
            id="username"
            type="text" // Specify type for better validation/keyboard
            className="border-zinc-500 border-2 w-full p-2 rounded " // Added w-full, p-2, rounded
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username" // More specific placeholder
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>{" "}
          {/* htmlFor and id corrected */}
          <input
            id="email" // Added id
            type="text" // Specify type
            className="border-zinc-500 border-2 block w-full p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" // More specific placeholder
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-white text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password" // Specify type
            className="border-zinc-500 border-2 block w-full p-2 rounded" // Consistent border and added styles
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label
            htmlFor="fullName"
            className="block text-white text-sm font-bold mb-2"
          >
            Full Name
          </label>{" "}
          {/* htmlFor and id corrected */}
          <input
            id="fullName" // Added id
            type="text" // Specify type
            className="border-zinc-500 border-2 block w-full p-2 rounded" // Consistent border and added styles
            value={fullname} // Use corrected state variable
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label
            htmlFor="coverImage"
            className="block text-white text-sm font-bold mb-2"
          >
            Cover Image
          </label>{" "}
          {/* htmlFor and id corrected */}
          <input
            id="coverImage" // Added id
            type="file" // Specify type
            className="border-zinc-500 border-2 block w-full p-2 rounded" // Consistent border and added styles
            // value={coverImage} // Use corrected state variable
            onChange={(e) => setCoverImage(e.target.files[0])}
            placeholder="Enter your covver image"
          />
        </div>
        <div>
          <label
            htmlFor="Avatar"
            className="block text-white text-sm font-bold mb-2"
          >
            Avatar
          </label>{" "}
          {/* htmlFor and id corrected */}
          <input
            id="Avatar" // Added id
            type="file" // Specify type
            className="border-zinc-500 border-2 block w-full p-2 rounded" // Consistent border and added styles
            // value={avatar} // Use corrected state variable
            onChange={(e) => setAvatar(e.target.files[0])}
            placeholder="Enter the Avatr"
          />
        </div>
        <button
          type="submit"
          className="block mt-4 mx-auto bg-yellow-300 p-2 text-black rounded-full w-full max-w-xs transition-colors duration-200 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" // Improved button styling
        >
          Submit
        </button>
      </form>
      <div>{user.data  },{isUserReady},{registerMsg}</div>
    </div>
  );
}

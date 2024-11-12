import React ,{useState}from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);

    setName('');
    setEmail('');
    setAddress('');
  };
  return (
    <>
      {
      orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
              {/* header section */}
              <div className="flex items-center justify-between">
                <h1>Order Now</h1>
                <div> 
                  <IoCloseOutline
                    onClick={handleOrderPopup}
                    className="text-2xl cursor-pointer"
                  />
                </div>
              </div>

              {/* form section */}
              <div className="mt-4">
                <input type="text" placeholder="Name" className="form-input" value={name}
                  onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email" className="form-input" value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Address" className="form-input" value={address}
                  onChange={(e) => setAddress(e.target.value)}/>
                <div className="flex justify-center">
                   <Button text="Order Now" bgColor={"bg-primary"} textColor={"text-white"} onClick={handleClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

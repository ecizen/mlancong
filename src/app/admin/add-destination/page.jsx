'use client'
import React,{useState} from "react";
import Image from "next/image";
import gambar from '../../image/Group.svg'
import { useRouter } from "next/navigation";

export default function page(){

    const router = useRouter();

   
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        location: "",
        image: null
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
          const reader = new FileReader(); // Create a new FileReader instance
          reader.onload = () => {
            setFormData({
              ...formData,
              image: reader.result, // Set the image data URL to state
            });
          };
          reader.readAsDataURL(file); // Read the selected file as a data URL
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("/api/destination", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert("Product added successfully!");
        } else {
          alert("Failed to add product");
        }
       
      };

    return(

        <main className=" bg-white px-8 py-4">
            <div className="flex justify-between">
                <div className="">
                <h1 className="text-black text-2xl font-bold">Add Product</h1>
                </div>
                <button className="w-32 h-10 rounded-md bg-black text-white text-xs justify-center items-center">add product</button>
            </div>
            <form onSubmit={handleSubmit} className=" mt-8 lg:flex justify-between block">
                <div>
                    <div className="lg:w-72 h-16 px-4 rounded-t-lg py-4 border border-[#F4F5F4]">
                        <p className="text-xl text-black font-bold">Porduct Image</p>
                    </div>
                    <div className="lg:w-72 h-64 border border-[#F4F5F4] flex flex-col justify-center items-center rounded-b-lg">
            {/* Display uploaded image */}
            {formData.image ? (
              <img src={formData.image} alt="Uploaded" className="w-32 mb-4" />
            ) : (
              <Image src={gambar} className="w-32 mb-4" alt="destination-image" />
            )}
            {/* Input for uploading image */}
            <input
              name="image"
              onChange={handleImageChange}
              className="block w-52 text-sm text-green-400 rounded-sm cursor-pointer dark:text-black focus:outline-none dark:bg-white dark:placeholder-white"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />
            <button type="submit" className="text-black">Add Product</button>
          </div>     
                </div>
                <div>
                    <div className="lg:w-[580px] h-16 px-4 rounded-t-lg py-4 border border-[#F4F5F4]">
                        <p className="text-xl text-black font-bold">destination information</p>
                    </div>
                    <div className="lg:w-[580px]  border border-[#F4F5F4] rounded-b-lg px-4 py-4">
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor=""className="text-sm text-black">destination name</label>
                            <input type="text"  value={formData.name} onChange={handleChange} name="name" id="" className="w-full h-10 border rounded-md text-xs px-4 text-black" placeholder="name" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor=""className="text-sm text-black">Category</label>
                            <input type="text" value={formData.category} onChange={handleChange} name="category" id="" className="w-full h-10 border rounded-md text-xs px-4 text-black" placeholder=""/>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <label htmlFor=""className="text-sm text-black">location</label>
                            <input type="text" value={formData.location} onChange={handleChange} name="location" id="location" className="w-full h-10 border rounded-md text-xs px-4 text-black" placeholder="stock"/>
                        </div>          
                    </div>
                </div>
            </form>
                
        </main>
    )
}
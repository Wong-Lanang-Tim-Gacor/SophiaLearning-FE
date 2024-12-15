import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import InputLabel from '@/components/ui/InputLabel';
import { Link, useNavigate } from 'react-router-dom';
import { UpdateProfile, GetProfile } from "@/services/AuthService.jsx";
import {toast} from "react-hot-toast"; // Pastikan sudah ada fungsi GetProfile

const Profile = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null); // Default empty string for image
    const [profileData, setProfileData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        photo_profile: null, // Default to empty string
    });

    // Fetch profile data when the component mounts
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await GetProfile(); // Call GetProfile function from your service
                setProfileData({
                    name: profile.name,
                    username: profile.username,
                    email: profile.email,
                    phone: profile.phone,
                });
                setImage(profile.photo_profile || null); // Set image URL if available
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfile();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const newImage = URL.createObjectURL(file);
            setProfileData((prevData) => ({
                ...prevData,
                photo_profile: file, // Update photo_profile as file
            }));
            setImage(newImage); // Set image preview
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value, // Update the corresponding field in profileData
        }));
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        console.log(profileData)
        try {
            const response = await UpdateProfile(profileData);
            console.log(response)
            sessionStorage.setItem('user', JSON.stringify(response)); // Menyimpan response yang baru
            toast.success("Profile updated successfully");
            // navigate('/'); // Navigate to homepage or another page
        } catch (error) {
            toast.error("Error updating profile");
            console.log(error)
        }
    };


    return (
        <>
            <div className="flex items-center gap-x-6">
                <div className="py-6">
                    <img
                        className="w-[100px] sm:w-[150px] aspect-square rounded-full object-cover"
                        src={image || 'default-profile-image.jpg'} // Use default if no image set
                        alt="profile"
                    />
                </div>
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold">Edit Profile</h1>
                    <label className="text-xs text-gray-500 cursor-pointer">
                        <i className="fas fa-camera"></i> Ubah Photo
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden" // Hide the default file input
                        />
                    </label>
                </div>
            </div>
            <form onSubmit={handleUpdateProfile}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-8 mt-6">
                    <InputLabel
                        label="Nama"
                        value={profileData.name}
                        onChange={handleInputChange}
                        name="name"
                    />
                    <InputLabel
                        label="Username"
                        value={profileData.username}
                        onChange={handleInputChange}
                        name="username"
                    />
                    <InputLabel
                        label="Email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <InputLabel
                        label="Telepon"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        name="phone"
                    />
                </div>
                <div className="flex justify-between items-center mt-6 gap-x-2">
                    <div>
                        <Button type="primary" text="Simpan" />
                        <Button onClick={() => navigate('/')} type="button" text="Batal" />
                    </div>
                    <Link className="text-xs text-gray-500" to="password">
                        Ingin merubah password?
                    </Link>
                </div>
            </form>
        </>
    );
};

export default Profile;

import React, { useState, useEffect } from "react";
import DashLayout from "./_layout";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Tooltip, IconButton } from "@mui/material";
import { getApi } from "@/services/httpService";
import { getCookie } from 'cookies-next';
import Avatar from '@mui/material/Avatar';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function MyProfile() {
    const [user, setUser] = useState('');
    const [organisation, setOrganisation]= useState('');
    const [isdisabled, setIsdisabled] = useState(true)


    const getUser = () => {
        let token = getCookie('cookie-access')
        let url = process.env.NEXT_PUBLIC_HOST_URL + '/api/client/v1/team_members/profile/'
        console.log('url: ', url)

        getApi(url, token, true, null)
            .then((response) => {
                const data = response.data.user
                setUser(data)
                console.log(data)
                setOrganisation(response.data.organisation)
            })
    }
    const changeDisabled = () => {
        setIsdisabled(false)

    }
    useEffect(() => {
    const usr = getCookie("user")
    console.log('user: ', usr)
    setUser(JSON.parse(usr))
     }, [])


    useEffect(() => {
        getUser()
    }, [])

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value
        setUser({ ...user?.user, [name]: value })
    }


    const handleSubmit = (e) => {
        setIsdisabled(true)
        e.preventDefault();

    }

    const styles = {

        largeIcon: {
            width: 180,
            height: 80,
        },

    };
    const text =
            "<span>{user?.organisation?.subscription_plan?.name}</span>"
            

    return (
        <DashLayout>

            <div className="mt-5  md:mt-0 md:col-span-4 justify-center content-center">

                <h2 className="text-left font-semibold text-xl pt-2 mt-5 mb-16">My Profile  <button type="button" disabled className="text-sm border-2 border-x-primaryColor border-y-primaryColor border-spacing-x-2 pr-4  font-normal" >{user?.is_active ? "Active" : "Inactive"}</button>
                    <div className="flex pt-8 ">
                        <AccountCircleIcon fontSize="large" iconStyle={styles.largeIcon} />   <span>{(user?.is_active) ? <CheckCircleIcon color="success" fontSize="small" sx={{ fontSize: "16px" , marginLeft: -1, marginBottom: -2}} /> : <FiberManualRecordIcon color="action" fontSize="small" sx={{ fontSize: "16px" , marginLeft: -1, marginBottom: -2}} />}</span>

                        <button className="absolute right-1/2 text-sm text-white bg-black  font-medium rounded-sm border-4 border-spacing-7 border-x-primaryColor border-y-primaryColor" onClick={changeDisabled}> Edit Profile</button>
                    </div>

                </h2>
                <form method="post" action="#" onSubmit={handleSubmit}>
                    <div className="bg-white w-1/2 my-2 p-1 flex border-none rounded svelte-1l8159u">

                        <h3 className="font-bold h-6 mt-1 text-black-00 text-xs leading-8 uppercase"> Firstname :   </h3>
                        <input type="text" name="firstname" id="" placeholder="First Name" disabled={isdisabled} onChange={handleChange} value={user?.first_name} className=" ml-16 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5" required /> </div>

                    <div className="bg-white w-1/2 my-2 p-1 flex border-none rounded svelte-1l8159u">
                        <h3 className="font-bold h-6 mt-1 text-black-60 text-xs leading-8 uppercase"> Lastname :</h3>

                        <input type="text" name="lastname" id="" placeholder="Last Name" disabled={isdisabled} onChange={handleChange} value={user?.last_name} className=" ml-16 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5" required /> </div>

                    <div className="bg-white w-1/2 my-2 p-1 flex border-none rounded svelte-1l8159u">
                        <h3 className="font-bold h-6 mt-1 text-black-60 text-xs leading-8 uppercase"> Username :</h3>

                        <input type="text" name="username" id="" placeholder="Your userName" disabled onChange={handleChange} value={user?.username} className="ml-16 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5" required /> </div>

                    <div className="bg-white w-1/2 my-2 p-1 flex border-none rounded svelte-1l8159u">
                        <h3 className="font-bold h-6 mt-1 text-black-60 text-xs leading-8 uppercase"> Member role :</h3>

                        <input type="text" name="member role" id="" placeholder="Member role" disabled onChange={handleChange} value={user?.member_role} className=" ml-11 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5" required /> </div>

                    <div className="bg-white w-1/2 my-2 p-1 flex border-none rounded svelte-1l8159u">
                        <h3 className="font-bold h-6 mt-1 text-black-60 text-xs leading-8 uppercase"> Email :</h3>

                        <input type="text" name="member role" id="" placeholder="Member role" disabled onChange={handleChange} value={user?.email} className=" ml-24 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5" required /> </div>

                    <div className="flex flex-col items-left md:flex-col">

                        {!isdisabled && <button type="submit" className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 px-16 py-2.5 text-center" required>Submit</button>}
                    </div>

                    <h2 className="text-left font-semibold text-xl pt-4 mt-5 mb-8">Organisation</h2>
                    
                   
                    <div className="bg-white w-1/2 my-2 p-1 flex border-none rounded svelte-1l8159u">
                        <h3 className="font-bold h-6 mt-1 text-black-60 text-xs leading-8 uppercase"> Organisation Id:</h3>

                        <input type="text" name="username" id="" placeholder="Your userName" disabled onChange={handleChange} value={organisation?.id} className="ml-9 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5" required /> </div>
                        <div className="bg-white w-1/2 my-2 p-1 flex border-none rounded svelte-1l8159u">
                        <h3 className="font-bold h-6 mt-1 text-black-60 text-xs leading-8 uppercase"> Subscription Plan:</h3>

                        <input type="text" name="username" id="" placeholder="Your userName" disabled onChange={handleChange} value={organisation?.subscription_plan?.name} className="ml-5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-1/2 text-sm border-gray-300 p-2.5" required /> 
                    <Tooltip title= { organisation?.subscription_plan?.name + '-'+ ""+organisation?.subscription_plan?.services[0]?.description +
                    " "+ organisation?.organisation } >
                            <IconButton>
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                    </div>



                </form>


            </div >
        </DashLayout >
    )
}

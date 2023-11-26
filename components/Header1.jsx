"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const Header1 = () => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const key = Cookies.get("user")
        setAuth(true);
        return;
    }, [auth])
    const router = useRouter()
    const handleLogout = () => {
        Cookies.remove('user');
        router.push('/');
    }




    return (
        <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
            <Image
                src={"/logo.png"}
                alt="logo"
                width={200}
                height={200}
                className=" w-28 h-28 "
            />
            <div className=" h-full flex">
                <Block title={"Become a member"} para={"Additional 0% off on stays."} />
                <Block
                    title={"OYO for business"}
                    para={"Trusted by 5000 corporates."}
                />
                <Block title={"List your property"} para={"Start earning in 30 min."} />
                <Block title={"6263619336"} para={"Call us to book now."} />
                <div className="flex items-center px-3 ">
                    <Image
                        src={"/demo.svg"}
                        alt="demo"
                        width={200}
                        height={200}
                        className=" w-10 h-10 rounded-full mr-5"
                    />


                    {
                        auth ? (
                            <h3 className='font-bold cursor-pointer' onClick={handleLogout}>Logout</h3>
                        ) : (
                            <Link href={'/login'}> <h3 className='font-bold'>Login/SignUp</h3></Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header1;
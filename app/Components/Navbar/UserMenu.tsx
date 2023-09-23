'use client' ;
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/Hooks/useRegisterModal';
import useLoginModal from '@/app/Hooks/useLoginModal';

import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/Hooks/useRentModal';


interface useMenuProps {

    currentUser?: SafeUser | null
}

const UserMenu : React.FC<useMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen,setIsOpen] = useState(false);
    const rentModal = useRentModal();
    const toogleOpen = useCallback(() =>
    {
        setIsOpen((value) => !value);
    },[])
    const onRent = useCallback(()=>{
        if(!currentUser) {
         return loginModal.onOpen();
        }
        rentModal.onOpen();

    },[currentUser,loginModal,rentModal])
  return (
    <div className="relative">
        <div 
        className="
        flex
        flex-row
        items-center
        gap-3
        ">
            <div
           onClick={onRent}
            className="
            hidden
            md:block
            text-sm
            font-semibold
            py-4
            px-3
            rounded-full
            hover::bg-neutral-100
            transition
            cursor-pointer
            "
            >
                AirBnb your home
            </div>
            <div
            onClick={toogleOpen}
            className="
           
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover::shadow-md
            transition
            "

            >
                <AiOutlineMenu/>
                <div
            className='
            hidden
            md:block
            '>
                <Avatar src={currentUser?.image}/>
            </div>
            </div>
           
        </div>
      {isOpen &&(
        <div
        className='
        absolute
        rounded-xl
        shadow-md
        w-[40vw]
        md:w-3/4
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm

        '>
            <div className='flex flex-col cursor-pointer'>
                {currentUser ? (
                    <>
                        <MenuItem
                        onClick={()=>{}}
                        label='My Trips'
                        />
                        <MenuItem
                        onClick={()=>{}}
                        label='My Favorites'
                        />
                         <MenuItem
                        onClick={()=>{}}
                        label='My Propetries'
                        />
                          <MenuItem
                        onClick={rentModal.onOpen}
                        label='AirBnb my home'
                        />
                        <hr />
                        <MenuItem
                        onClick={()=>{signOut()}}
                        label='Log Out'
                        />
                    </>
                ) : (
                <>
                <MenuItem
                onClick={loginModal.onOpen}
                label='Login'
                />
                <MenuItem
                onClick={registerModal.onOpen}
                label='Sign up'
                />
                </>
                )}
            </div>
            </div>
      )}
    </div>
  )
}

export default UserMenu

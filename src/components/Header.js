import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineBell} from 'react-icons/ai'
const Header = () => {
    return (
        <div className="fixed bg-white top-0 left-0 flex flex-col w-full p-3 flex z-10">
            <div className="flex items-center justify-between">
             <div className="div">

             </div>
             <div className="ml-36">
                 <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:fccdda69-e8c4-4ad4-8eed-d19665ff8f51;revision=0?component_id=0fadef1a-80d3-4444-a3a8-2358a4dbdc46&api_key=CometServer1&access_token=1627335183_urn%3Aaaid%3Asc%3AUS%3Afccdda69-e8c4-4ad4-8eed-d19665ff8f51%3Bpublic_155dbc31e06f0ad6de10acc3a0331f68e4c45b0b" alt="ANA" />
             </div>
             <div className="flex justify-evenly">
              <BiSearch className="text-xl mx-3"/>
              <AiOutlineUser className="text-xl mx-3"/>
              <FiShoppingCart className="text-xl mx-3"/>
              <AiOutlineBell className="text-xl mx-3"/>
             </div>
            </div>
            <div className="flex w-full px-10 items-center py-5 ">
                <ul className="cursor-pointer flex w-full items-center justify-evenly">
                    <li>Sales</li>
                    <li>Collections</li>
                    <li>Clothing</li>
                    <li>Dresses</li>
                    <li>Hijabs</li>
                    <li>Accessories</li>
                    <li>Collab</li>
                </ul>
            </div>
        </div>
    )
}

export default Header

import {IconBell, IconBrandCraft, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Avatar, Indicator } from "@mantine/core";

const Header =()=>{
    return <div>
        <nav className="bg-dark-950 text-dark-100 px-4 h-20">
            <div className="flex flex-wrap justify-between items-center h-full">
                <div className="flex justify-start items-center">
                    <a href="/" className="flex items-center justify-between text-mchite-400 gap-2">
                        <IconBrandCraft className="w-10 h-10" stroke={2.5}/>
                        <span className="self-center text-4xl font-semibold whitespace-nowrap">Job Hain</span>
                    </a>
                </div>
                <NavLinks/>
                <div className="flex items-center gap-2 lg:order-2">
                    <button
                        type="button"
                        className="p-2 rounded-full hover:text-gray-900 bg-dark-900 hover:bg-mchite-200 focus:ring-mchite-300"
                    >
                        <Indicator color="mchite" offset={5} size={9} processing>
                            <IconBell/>
                        </Indicator>
                    </button>
                    <div className="flex flex-row items-center gap-2">
                        <div>Jericho Nomat</div>
                        <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" alt="Profile"/>
                    </div>
                    <button
                        type="button"
                        className="p-2 rounded-full hover:text-gray-900 hover:bg-mchite-200 focus:ring-mchite-300"
                    >
                    <IconSettings/>
                    </button>
                </div>
            </div>
            </nav>
    </div>
}
export default Header;
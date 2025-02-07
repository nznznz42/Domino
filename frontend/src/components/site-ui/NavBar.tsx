import * as React from "react";
import {Button} from "@/components/ui/button.tsx";
import domino1 from "@/assets/domino1.svg"
import {Input} from "@/components/ui/input.tsx";
import ThemeToggle from "@/components/site-ui/ThemeToggle.tsx";

function NavBar(): React.JSX.Element {
    return (
        <nav className="z-20 flex w-screen items-center border-b-2 border-border dark:border-darkNavBorder bg-white dark:bg-darkBg px-5 py-3">
            <div className="mx-0 flex w-full dark:text-darkText text-text items-center justify-between gap-x-3">
                <div className="flex items-center gap-x-3">
                    <Button variant={"default"} size={"default"}>
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={domino1} className="w-full h-full object-contain"/>
                        </div>
                    </Button>
                    <Input type={"text"} placeholder={"file name"} className="w-full hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-light transition-all"/>
                </div>
                <ThemeToggle/>
            </div>
        </nav>
    )
}

export default NavBar;

// TODO: Actually fix components and styling in nav
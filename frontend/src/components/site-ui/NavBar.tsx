import * as React from "react";
import {Button} from "@/components/ui/button.tsx";
import domino1 from "@/assets/domino1.svg"
import ThemeToggle from "@/components/site-ui/ThemeToggle.tsx";
import Github from "@/components/site-ui/Github.tsx";

function NavBar(): React.JSX.Element {
    return (
        <nav className="z-20 flex w-screen items-center border-b-2 border-border dark:border-darkNavBorder bg-bg dark:bg-darkNavBg px-5 py-3">
            <div className="mx-0 flex w-full dark:text-darkText text-text items-center justify-between gap-x-3">
                <div className="flex items-center gap-x-3">
                    <Button variant={"default"} size={"default"} className="dark:bg-darkMain shadow-nav dark:shadow-navDark hover:!translate-x-[4px] hover:!translate-y-[4px] hover:shadow-none dark:hover:shadow-none transition-all">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={domino1} className="w-full h-full object-contain"/>
                        </div>
                    </Button>
                </div>
                <div className="flex items-end gap-4">
                    <Github/>
                    <ThemeToggle/>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;

// TODO: Actually fix components and styling in nav
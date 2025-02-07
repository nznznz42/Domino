import {Button} from "@/components/ui/button.tsx";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "@/components/context-providers/ThemeProvider.tsx";

function ThemeToggle() {
    const toggleTheme = useTheme();
    return (
        <Button
            className="h-11 w-11 m500:h-9 m500:w-9 p-0 shadow-nav dark:shadow-navDark hover:!translate-x-[4px] hover:!translate-y-[4px] hover:!shadow-none dark:hover:shadow-none !bg-white dark:!bg-secondaryBlack"
            onClick={() => toggleTheme()}
        >
            <Sun className="h-6 w-6 m500:h-4 m500:w-4 hidden dark:inline stroke-darkText" />
            <Moon className="h-6 w-6 m500:h-4 m500:w-4 inline dark:hidden stroke-text" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default ThemeToggle;
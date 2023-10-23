import { useState } from "react"

export const useToggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => setIsToggled((previous) => !previous);
    const on = () => setIsToggled(true);
    const off = () => setIsToggled(false);

    return {
        isToggled,
        toggle,
        on,
        off
    }
}
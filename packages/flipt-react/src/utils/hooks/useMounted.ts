import { useCallback, useEffect, useRef } from "react";

/**
 * React.js hook that returns if the component is mounted
 */
function useMounted() {
    const mountedRef = useRef(true);

    useEffect(() => () => {
        mountedRef.current = false;
    }, []);

    return useCallback(() => mountedRef.current, []);
}

export default useMounted;
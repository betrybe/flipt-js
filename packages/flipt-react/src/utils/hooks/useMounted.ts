import { useCallback, useEffect, useRef } from "react";

function useMounted() {
    const mountedRef = useRef(true);

    useEffect(() => () => {
        mountedRef.current = false;
    }, []);

    return useCallback(() => mountedRef.current, []);
}

export default useMounted;
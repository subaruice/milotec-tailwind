import { useState } from "react";

type Params = {
    limit: number,
    page: number,
}

type UseFetch = [
    Function,
    boolean,
    string
]

type Callback = (params?: Params) => Promise<void>;

export const useFetch = (callback?:Callback):UseFetch => {
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async (params?: Params) => {
        try {
            setIsLoading(true);
            await callback(params);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };
    return [fetching, loading, error];
};

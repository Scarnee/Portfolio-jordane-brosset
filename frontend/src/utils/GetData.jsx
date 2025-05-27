import { useState, useEffect } from "react";


export function GetData(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(url) {
            const response = await fetch(url);
            const data = await response.json();

            setData(data);
        }

        getData(url);
    }, []);

    return { data };
}
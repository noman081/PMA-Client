import { useState, useEffect } from "react";
const useSupervisor = user => {
    const [supervisor, setSupervisor] = useState(false);
    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/supervisor/${email}`;
        if (email) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data.supervisor);
                    setSupervisor(data.supervisor);
                })
        }
    }, [user]);

    return [supervisor, setSupervisor];
}

export default useSupervisor;
export default async (body={})=>{
    try {
        const resp = await fetch(process.env.LBRYNET || 'localhost:5279', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        return (await resp.json());
    } catch (err) {
        console.log(err);
        return { error: "failed to fetch"};
    }
};
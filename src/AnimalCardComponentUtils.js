async function FetchData(name) 
{
        try {
            const response = await fetch('https://api.the'+ name +'api.com/v1/images/search');
            return await response.json();
        } catch (error) {
            console.error(error);
        }
}

export default FetchData;
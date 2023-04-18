export async function fetchData(url) {
    try {
        const res = await fetch(url);
        const json = await res.json();
        return json;
    }
    catch (err) {
        console.error("Fetching data error", err);
        return null;
    }
}
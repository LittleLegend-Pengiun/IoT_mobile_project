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

export function transformData(data, startDate=null, endDate=null) {
    let ret = []
    if (startDate==null && endDate==null) {
        startDate = 0;
        endDate = Infinity;
    }
    const length = data.length;
    for (let i = 0 ; i < length; i++) {
        let t = new Date(data[i][0]).getTime()
        if (t >= startDate && t <= endDate)
            ret.push({x: new Date(data[i][0]).getTime(), y: data[i][1]})
    }

    return ret;
}

export function toChartData(data) {
    if (data.length <= 20)
        return data;
    
    const ret = []
    const cluster = parseInt(data.length / 20)
    for (let j = 0; j < data.length; j += cluster) {
        let totalTime = 0, totalData = 0;
        let stop = j + cluster > data.length? data.length: j+cluster;
        let avgDivNum = 0;
        for (let i = j; i < stop; i++) {
            totalTime += parseInt(data[i]["x"]);
            totalData += parseInt(data[i]["y"]);
            avgDivNum += 1;
        }
        ret.push({x: parseInt(totalTime/avgDivNum), y: parseInt(totalData/cluster)})
    }
    return ret;
}
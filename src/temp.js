let subId;
let sattus;

export function secret(body, setOutput) {

    var bigData = null ;

    fetch('https://codejudge.geeksforgeeks.org/submit-request', {
        headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/json; charset=UTF-8',
            'sec-ch-ua':
                '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
        },
        referrer: 'https://ide.geeksforgeeks.org/',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: body,
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
    }).then((res) => {
        res.json().then((data) => {
            console.log(data);
            subId = data.id;
            let k = 0;
            let interval = setInterval(() => {
                console.log('loopin');
                fetch(
                    `https://codejudge.geeksforgeeks.org/get-status/${subId}`,
                    {
                        headers: {
                            accept: '*/*',
                            'accept-language': 'en-US,en;q=0.9',
                            'sec-ch-ua':
                                '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
                            'sec-ch-ua-mobile': '?0',
                            'sec-ch-ua-platform': '"Windows"',
                            'sec-fetch-dest': 'empty',
                            'sec-fetch-mode': 'cors',
                            'sec-fetch-site': 'same-site',
                        },
                        referrer: 'https://ide.geeksforgeeks.org/',
                        referrerPolicy: 'strict-origin-when-cross-origin',
                        body: null,
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'omit',
                    }
                ).then((res) => {
                    res.json().then((data) => {
                        bigData = data;
                        if (data.status === 'SUCCESS') {
                            console.log(bigData);
                            k = 1;
                            // bigData =  data;sss
                            // clearInterval(interval);
                        } else if (data.status === 'in-queue') {
                            console.log('in qqueue');
                        } 
                    if(k===1){
                        console.log("idnar aya");
                        clearInterval(interval);
                        // return (data);
                        setOutput(data);
                    }
                    }
                    );
                });
            }, 1000);

             console.log(data, "logging");
            });
            
            // console.log(data, "logging");
    }
    
    );
    
    return bigData;

}
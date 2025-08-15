import dotenv from 'dotenv';
import arcjet , {tokenBucket , detectBot , shield} from '@arcjet/node';


dotenv.config();

export const detect = arcjet({
    key: process.env.ARCJET_KEY,

    characteristics: ["ip.src"],
    rules:
        [
            shield({ mode: "LIVE" }),
            detectBot({ mode: "LIVE", allow: ["google.com", "bing.com"] }),
            tokenBucket({
                mode: "LIVE",
                capacity: 10,
                refillRate: 5,
                interval: 5
            }),
        ],
})
import { dotenv } from 'dotenv';
import arcjet , {tokenBucket , detectBot , shield} from '@arcjet/node';


dotenv.config();

export const detect = arcjet({
    key: process.env.ARCJET_KEY,

    characteristics: ["ip.src"],
    rules:
        [
            shield({ mode: "LIVE" }),
            detectBot({ mode: "LIVE", allowlist: ["googlebot", "bingbot"] }),
            tokenBucket({
                mode: "LIVE",
                capacity: 10,
                refillRate: 5,
                refillInterval: 5
            }),
        ],
})
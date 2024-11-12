//API controller funtion to manage clerk user with database
//localhost

import { Webhook } from "svix"

const clerkWebbhooks =async (res, req)=> {
    try {
        // Create a instance with clerk webhook secret

        const whook = new Webhook(process.env.cl)
    } catch (error) {
        
    }
}

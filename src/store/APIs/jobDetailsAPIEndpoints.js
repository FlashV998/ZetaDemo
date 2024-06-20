import { sampleData } from "./sampleJson";

export const getAllJobDetailsData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let data = {
                status:200,
                data:sampleData
            }
            resolve(data)
        }, 2000);  // adding a timer to imitate an API, not rewuired though
    })
}
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        console.log('hello');
        await connectToDB()
        console.log('bye');
        const prompts = await Prompt.find({}).populate('creator')
        console.log(prompts, 'prompts');

        return new Response(JSON.stringify([
            {
              "_id": "67332956f4a3c3382b51c3c6",
              "creator": {
                "_id": "67332947f4a3c3382b51c3c2",
                "email": "himanshu.enact@gmail.com",
                "username": "himanshumittal",
                "image": "https://lh3.googleusercontent.com/a/ACg8ocIWRpanxXHILGLuMqYOxB6B_7Wgd3v52LPFTGwBg24ONV2V3g=s96-c",
                "__v": 0
              },
              "prompt": "fourth",
              "tag": "fourth",
              "__v": 0
            },
            {
              "_id": "673386d72b9b167c63b7bc37",
              "creator": {
                "_id": "673252899d91d391dc7d3ba9",
                "email": "himanshumittal035@gmail.com",
                "username": "himanshumittal",
                "image": "https://lh3.googleusercontent.com/a/ACg8ocLZYQRN1SLG4PL5imexMja6AFE-VfpfPlaRufdudluzjZx8Fw=s96-c",
                "__v": 0
              },
              "prompt": "Fourth",
              "tag": "fourth",
              "__v": 0
            }
          ]
          ), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 
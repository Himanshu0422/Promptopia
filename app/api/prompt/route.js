import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        console.log('hello');
        await connectToDB()
        console.log('bye');
        const prompts = await Prompt.find({}).populate('creator')
        console.log(prompts, 'prompts');

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
      console.error(error);
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 
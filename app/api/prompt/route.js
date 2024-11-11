import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();
        
        console.log("Connected to DB in production"); // Debug connection

        const prompts = await Prompt.find({}).populate('creator');
        console.log("Fetched prompts:", prompts); // Debug data retrieval

        return new Response(JSON.stringify(prompts), {
            status: 200,
            headers: { "Cache-Control": "no-store" }
        });
    } catch (error) {
        console.error("Error fetching prompts:", error); // Debug error
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};

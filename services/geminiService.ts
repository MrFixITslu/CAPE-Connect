
import { GoogleGenAI } from "@google/genai";

// Ensure the API_KEY is available in the environment variables
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully,
  // but for this example, we'll throw an error if the key is missing.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

/**
 * Generates an explanation from the AI based on a user's question and current subject context.
 * @param question The user's question.
 * @param subjectContext The subject the user is currently studying.
 * @returns The AI-generated explanation as a string.
 */
export const getAIExplanation = async (question: string, subjectContext?: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash-preview-04-17";

    const systemInstruction = `You are a friendly and expert AI learning assistant for Caribbean primary school students. Your primary goal is to explain concepts in simple, clear, and engaging terms.
- ALWAYS use examples and contexts relevant to Caribbean culture, history, geography, or economy. For instance, if explaining addition, use counting mangoes or fishing boats.
- Keep responses concise, focused, and easy for a child aged 5-12 to understand.
- Adapt your tone to be encouraging, patient, and supportive.
${subjectContext ? `- The student is currently studying: ${subjectContext}. Tailor your response to this topic.` : ''}`;
    
    const response = await ai.models.generateContent({
        model: model,
        contents: question,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 1,
            topK: 32
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching AI explanation:", error);
    return "I'm sorry, but I encountered an issue while trying to get an explanation for you. Please check your connection or try again later.";
  }
};


export const generateLessonContent = async (lessonTitle: string, subjectName: string, lessonSummary: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash-preview-04-17";

    const systemInstruction = `You are an expert curriculum developer creating engaging educational content for primary school students (ages 5-12) in the Caribbean.
- Your task is to generate a complete, self-contained lesson based on the provided title, subject, and summary.
- **Output Format**: Respond ONLY with the lesson content as a single block of HTML.
  - Use tags like <h2>, <h3>, <p>, <ul>, <li>, <strong>, and <em>.
  - Do NOT include <html>, <head>, or <body> tags.
  - Do NOT use inline styles. Use standard semantic HTML.
- **Structure**: The lesson must be well-organized with clear headings, short paragraphs, and lists where appropriate.
- **Tone**: Friendly, encouraging, and easy for a child to understand.
- **Caribbean Context**: This is ESSENTIAL. You MUST integrate examples, scenarios, and vocabulary relevant to Caribbean life, culture, geography (e.g., local fruits, animals, places, folklore like Anansi).
- **Content**: The lesson should expand on the provided summary, fully explaining the core concept. It should be comprehensive enough for a student to understand the topic before taking a quiz.`;

    const prompt = `Generate a lesson for the subject "${subjectName}".
Lesson Title: "${lessonTitle}"
Lesson Summary: "${lessonSummary}"`;
    
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 1,
            topK: 32,
        }
    });

    const text = response.text.trim();
    // Use a more robust regex to handle optional language identifiers and surrounding whitespace.
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = text.match(fenceRegex);
    // If it's a fenced code block, extract the content. Otherwise, use the whole text.
    const content = match ? match[2].trim() : text;
    return content;

  } catch (error) {
    console.error("Error generating lesson content:", error);
    return "<p>I'm sorry, but I had trouble preparing your lesson. Please check your internet connection and try again.</p>";
  }
};
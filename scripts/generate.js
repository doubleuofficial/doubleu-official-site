const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
    const input = JSON.parse(process.argv[2]);
    
    // 1. Update music.json
    const db = JSON.parse(fs.readFileSync('./music.json', 'utf-8'));
    db.push(input);
    fs.writeFileSync('./music.json', JSON.stringify(db, null, 2));

    // 2. Build the HTML Page
    const prompt = `Create a Noir Cinematic page for ${input.type}: ${input.title}. 
                    Colors: #FF5F1F and #00FFFF. Bio: ${input.description}`;
    
    const result = await model.generateContent(prompt);
    const html = result.response.text().replace(/```html|```/g, "");

    // 3. Save File
    if (input.type === "Single") {
        if (!fs.existsSync('./single')) fs.mkdirSync('./single');
        fs.writeFileSync(`./single/${input.slug}.html`, html);
    } else {
        if (!fs.existsSync(`./${input.slug}`)) fs.mkdirSync(`./${input.slug}`);
        fs.writeFileSync(`./${input.slug}/index.html`, html);
    }
    
    console.log(`Successfully deployed ${input.title} locally.`);
}

run();

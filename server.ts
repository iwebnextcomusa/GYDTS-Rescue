import express from "express";
import path from "path";
import dns from "dns";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini AI Client successfully initialized.");
  } catch (err) {
    console.error("Error setting up Gemini AI Client:", err);
  }
} else {
  console.warn("GYFTS Rescue: GEMINI_API_KEY is not configured or holds placeholder value. Running in fallback mode.");
}

// System Instruction for the NGO chatbot
const SYSTEM_INSTRUCTION = `You are a warm, compassionate, and professional AI Assistant for GYFTS Rescue (gyftsrescue.org), a nonprofit organization based in Irving, Texas, dedicated to food donations, fighting hunger, and community support.

Your objective is to provide helpful, inspiring information about our mission, programs, donations, and volunteer opportunities. Emphasize dignity, hope, and community partnership.

Organization Quick Info:
- Name: GYFTS Rescue (gyftsrescue.org)
- Phone: (469) 639-6347
- Email: stensondavid@hotmail.com
- Location: Irving, Texas
- Address: Irving, TX (serving Dallas-Fort Worth metroplex families)
- Current Year: 2026

Core Rescue Programs & Services:
1. Food Pantry Assistance: Weekly fresh groceries, canned goods, and dairy for struggling local households.
2. Emergency Food Relief: Ready-to-eat hot meal distribution and immediate assistance boxes for urgent crises.
3. Community Food Drives: Food collecting drives in collaboration with regional schools, businesses, and faith groups.
4. Senior Support Programs: Grocery home delivery for homebound older adults ensuring nutrition and human connection.
5. Family Assistance Programs: Monthly care boxes, hygiene bags, and child-focused healthy snacks.
6. Educational Outreach: Budgeting workshops, cooking demonstrations using pantry staples, and nutrition guidance.

How People Can Help:
- Donate Online: Secure transactions on our website. $25 provides a food box for 1 family for a week; $50 feeds 2 families; $100 feeds 5 families. Recurring monthly options are highly encouraged!
- Volunteer: We need food packers, delivery drivers, community organizers, and administrative support. Registration is open on the website!
- Corporate Sponsorship: We offer tax-deductible sponsorship tiers for local Irving and DFW corporations.

Guidance for Requesting Assistance:
- Open to anyone in-need. No complex paperwork or stringent prerequisites; our goal is maintaining dignity. Individuals can easily submit their requests through our online Assistance Request Form.

Keep responses concise, polite, encouraging, and write in professional American English. Do not use markdown titles higher than ###. Keep paragraphs relatively brief. If the API key is not active, a friendly local response is provided.`;

// API routes first
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  // Fallback mode if Gemini Client is not available
  if (!aiClient) {
    let fallbackText = "Hello! I am the GYFTS Rescue Assistant. I would love to tell you more about our Irving, Texas programs, food donations, or volunteer drives! Currently our AI gateway is in secure local demonstration mode, but please let me know if you need our contact details (Phone: 469-639-6347) or would like to request assistance!";
    if (message.toLowerCase().includes("contact") || message.toLowerCase().includes("phone") || message.toLowerCase().includes("email")) {
      fallbackText = "You can reach GYFTS Rescue in Irving, Texas at (469) 639-6347 or via email at stensondavid@hotmail.com. We are here to support you!";
    } else if (message.toLowerCase().includes("donate") || message.toLowerCase().includes("help")) {
      fallbackText = "Every contribution helps fight hunger in Irving, TX! A donation of $25 provides a weekly food pantry box for an entire family. You can complete your donation directly in the Donate section of our website!";
    } else if (message.toLowerCase().includes("volunteer")) {
      fallbackText = "We are always looking for volunteers! You can fill out our quick registration form in the Volunteer tab. Opportunities include packing grocery bags, driving deliveries, or helping with community food drives.";
    }
    return res.json({ text: fallbackText });
  }

  try {
    // Construct the conversations contents history
    const contents: any[] = [];
    
    if (Array.isArray(history)) {
      history.forEach((turn: any) => {
        contents.push({
          role: turn.sender === "user" ? "user" : "model",
          parts: [{ text: turn.text }]
        });
      });
    }

    // Add current user message
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await aiClient.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API call failed:", error);
    res.json({
      text: "I apologize, our community AI service experienced a connection issue. Please feel free to reach out directly to us at (469) 639-6347 or stensondavid@hotmail.com for immediate food relief and volunteer questions!"
    });
  }
});

// Mock Endpoints for Forms
app.post("/api/donate/submit", (req, res) => {
  const { amount, frequency, name, email } = req.body;
  res.json({
    success: true,
    message: `Thank you, ${name || "generous donor"}! Your ${frequency || "one-time"} donation of $${amount || 25} has been processed mock-securely. Together, we are fighting hunger in Irving!`,
  });
});

app.post("/api/volunteer/register", (req, res) => {
  const { firstName, lastName, email, phone, program } = req.body;
  res.json({
    success: true,
    message: `Thank you for registering, ${firstName}! Your volunteer profile for the '${program}' program has been submitted. Our team will contact you at ${email} or ${phone} shortly.`,
  });
});

app.post("/api/assistance/request", (req, res) => {
  const { name, email, phone, membersCount, needs } = req.body;
  res.json({
    success: true,
    message: `Assistance request received. Thank you, ${name}. Our coordinators will review your details (Family size: ${membersCount || 1}) and call you at ${phone} to arrange a distribution time. We respect your dignity and are here to help.`,
  });
});

// Configure Vite or Serve Production Static Assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    // Mount Vite middleware
    app.use(vite.middlewares);
    console.log("Vite middleware mounted in development mode.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production files from dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`GYFTS Rescue server running on http://localhost:${PORT}`);
  });
}

startServer();

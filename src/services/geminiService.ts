import { PRODUCTS } from '../constants';
import { Message } from '../types';

// AI Studio API Key is provided via process.env.GEMINI_API_KEY on the server side
// But for this client side implementation, we use the key from environment variables
const API_KEY = process.env.GEMINI_API_KEY || '';

export const getAiSuggestion = async (input: string): Promise<string> => {
  if (!API_KEY) return "AI xizmati uchun API kaliti topilmadi.";

  try {
    const productsInfo = PRODUCTS.map(p => ({ nomi: p.name, narxi: p.price, toifasi: p.category }));
    const systemInstruction = `Siz MobiAks telefon aksesuarlari do'konining aqlli maslahatchisisiz. 
      Bizdagi mavjud mahsulotlar ro'yxati: ${JSON.stringify(productsInfo)}.
      Foydalanuvchi so'rovini tahlil qiling va faqatgina bizda mavjud mahsulotlardan 2-3 tasini tavsiya qiling.
      Nega aynan shu mahsulotlarni tanlaganingizni qisqa, do'stona va o'zbek tilida tushuntiring. Matnni Markdown yordamida chiroyli formatlang.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: input }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] }
      })
    });
    const result = await response.json();
    return result.candidates?.[0]?.content?.parts?.[0]?.text || "Kechirasiz, javob olishda xatolik yuz berdi.";
  } catch (error) {
    console.error("AI Tavsiya xatosi:", error);
    return "Xatolik yuz berdi. Iltimos qayta urinib ko'ring.";
  }
};

export const sendChatMessage = async (history: Message[], currentInput: string): Promise<string> => {
  if (!API_KEY) return "AI xizmati uchun API kaliti topilmadi.";

  try {
    const apiHistory = history.map(msg => ({
      role: msg.role, parts: [{ text: msg.text }]
    }));
    apiHistory.push({ role: 'user', parts: [{ text: currentInput }] });

    const systemInstruction = "Siz MobiAks telefon aksesuarlari do'konining aqlli va do'stona mijozlarga xizmat ko'rsatuvchi yordamchisisiz. Vazifangiz xaridorlarga telefon g'iloflari (chexollar), himoya oynalari, quvvatlagichlar, quloqchinlar va avto aksesuarlar tanlashda yordam berish. Qisqa, lo'nda va faqat o'zbek tilida yozing. O'rtacha narxlar 50-250 ming so'm oralig'ida deb hisoblang. Doim yordamga tayyor bo'ling.";

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: apiHistory,
        systemInstruction: { parts: [{ text: systemInstruction }] }
      })
    });
    const result = await response.json();
    return result.candidates?.[0]?.content?.parts?.[0]?.text || "Kechirasiz, xatolik yuz berdi.";
  } catch (error) {
    console.error("Chat xatosi:", error);
    return "Kechirasiz, xatolik yuz berdi.";
  }
};

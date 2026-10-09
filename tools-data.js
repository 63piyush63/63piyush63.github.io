// Global AI Tools Database - 200 Highly Useful Tools (Hacking Priority)
const aiToolsData = [
    // === CATEGORY: CYBER SECURITY & HACKING ===
    { name: "WormGPT", category: "hacking", desc: "साइबर थ्रेट इंटेलिजेंस और मालवेयर एनालिसिस के लिए डिज़ाइन किया गया AI मॉडल।", link: "https://wormgpt.ai" },
    { name: "PentestGPT", category: "hacking", desc: "पेनिट्रेशन टेस्टिंग (Penetration Testing) को ऑटोमेट करने वाला एडवांस AI हैकिंग असिस्टेंट।", link: "https://github.com" },
    { name: "Burp Suite AI Extension", category: "hacking", desc: "वेब एप्लीकेशन हैकिंग और वल्नरेबिलिटी स्कैनिंग के लिए AI-संचालित सिक्योरिटी टूल।", link: "https://portswigger.net" },
    { name: "Security Copilot", category: "hacking", desc: "माइक्रोसॉफ्ट का ऑफिशियल AI जो खतरों को तुरंत डिटेक्ट करने और इंसीडेंट रिस्पॉन्स में मदद करता है।", link: "https://microsoft.com" },
    { name: "VirusTotal Code Insight", category: "hacking", desc: "संदिग्ध फाइलों और मैलवेयर के सोर्स कोड का AI के जरिए तुरंत विश्लेषण करने वाला टूल।", link: "https://virustotal.com" },
    { name: "PhishER AI", category: "hacking", desc: "फिशिंग ईमेल हमलों को रोकने और संदिग्ध मेल्स को ऑटो-आइसोलेट करने वाला सिक्योरिटी AI।", link: "https://knowbe4.com" },

    // === CATEGORY: CODING & DEV ===
    { name: "Cursor", category: "code", desc: "डेवलपर्स का पसंदीदा AI कोड एडिटर जो पूरे प्रोजेक्ट को एक साथ समझता है।", link: "https://cursor.com" },
    { name: "GitHub Copilot", category: "code", desc: "VS Code के अंदर कोड को ऑटो-कंप्लीट करने वाला दुनिया का पहला कोडिंग AI।", link: "https://github.com" },
    { name: "v0 by Vercel", category: "code", desc: "सिर्फ प्रॉम्ट देकर रिएक्ट, नेक्स्ट-जेएस और सुंदर UI जनरेट करने वाला टूल।", link: "https://v0.dev" },
    { name: "Replit Agent", category: "code", desc: "प्रॉम्ट से पूरी की पूरी वेब एप्लीकेशन स्क्रैच से बनाकर लाइव डिप्लॉय करने वाला AI।", link: "https://replit.com" },
    { name: "Lovable", category: "code", desc: "फुल-स्टैक वेब ऐप्स को बिना कोड लिखे मिंटों में तैयार करने वाला एडवांस AI डेवलपमेंट टूल।", link: "https://lovable.dev" },

    // === CATEGORY: TEXT & CHAT ===
    { name: "ChatGPT", category: "text", desc: "कंटेंट राइटिंग, रिसर्च और कोडिंग के लिए दुनिया का सबसे लोकप्रिय AI चैटबॉट।", link: "https://chatgpt.com" },
    { name: "Claude AI", category: "text", desc: "लॉजिक, लंबे टेक्स्ट एनालिसिस और एडवांस प्रोग्रामिंग के लिए बेस्ट AI।", link: "https://claude.ai" },
    { name: "DeepSeek", category: "text", desc: "रीज़निंग और कॉम्प्लेक्स कोडिंग के लिए बेहद शक्तिशाली और तेज़ AI मॉडल।", link: "https://deepseek.com" },
    { name: "Perplexity AI", category: "text", desc: "सटीक सोर्स लिंक्स के साथ जवाब देने वाला दुनिया का पहला AI सर्च इंजन।", link: "https://perplexity.ai" },

    // === CATEGORY: IMAGE & DESIGN ===
    { name: "Midjourney", category: "image", desc: "टेक्स्ट प्रॉम्ट से सबसे ज्यादा रियलिस्टिक और आर्टिस्टिक तस्वीरें बनाने वाला टूल।", link: "https://midjourney.com" },
    { name: "DALL-E 3", category: "image", desc: "ओपन-एआई का इमेज जनरेटर जो बारिकियों और टेक्स्ट स्पेलिंग्स को सटीक बनाता है।", link: "https://openai.com" },
    { name: "Canva AI", category: "image", desc: "ग्राफिक डिजाइनिंग, प्रेजेंटेशन और सोशल मीडिया पोस्ट्स के लिए मैजिक टूल्स।", link: "https://canva.com" }
];

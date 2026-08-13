require('dotenv').config();

const translateToEnglish = async(text) => {
    try {
        const response = await fetch( process.env.TRANSLATE_URL,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "x-rapidapi-host": "advanced-multilanguage-ai-translator-api-with-fast-responses.p.rapidapi.com",
                    "x-rapidapi-key": process.env.TRANSLATE_API
                },
                body: JSON.stringify({
                    text,
                    source: "es",
                    target:"English"
                })
            }
        );

        const data = await response.json();
        return data;
        
    }catch(error){
        console.log("Error en traducción: ", error);
        throw error;
    }
};

module.exports = {
    translateToEnglish
}
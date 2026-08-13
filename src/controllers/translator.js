const translator = require("../services/translator");

const translateToEnglish = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "El campo 'text' es requerido",
      });
    }

    const result = await translator.translateToEnglish(text);

    return res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error("Error en controller:", error);

    return res.status(500).json({
      success: false,
      message: "Error al traducir el texto",
    });
  }
};

module.exports = {
  translateToEnglish,
};
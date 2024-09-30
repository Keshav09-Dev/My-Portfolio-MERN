const sendEmailController = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Your email is send successufully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Send email API failed",
      error,
    });
  }
};

module.exports = { sendEmailController };

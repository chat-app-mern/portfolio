export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Oops! Something went wrong. Please try again.',
        });
    }

    try {
        const { token } = req.body;
        if (!token) {
            return res.status(400).json({
                success: false,
                message:
                    'We couldn’t verify your request. Please refresh and try again.',
            });
        }
        const secret = process.env.RECAPTCHA_SECRET_KEY;
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
        const response = await fetch(verifyUrl, { method: 'POST' });
        const data = await response.json();
        if (!data.success) {
            return res.status(400).json({
                success: false,
                message: 'Verification failed. Please try again.',
            });
        }
        if (data.score && data.score < 0.5) {
            return res.status(400).json({
                success: false,
                message:
                    'Your request looks unusual. Please try again to continue.',
            });
        }
        return res.status(200).json({
            success: true,
            message: "You're all set! Verification completed successfully.",
            data,
        });
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return res.status(500).json({
            success: false,
            message:
                "We're facing a small issue right now. Please try again in a moment.",
        });
    }
}

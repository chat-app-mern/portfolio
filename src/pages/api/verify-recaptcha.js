export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    try {
        const { token } = req.body;
        if (!token) {
            return res
                .status(400)
                .json({ success: false, error: 'Token missing' });
        }
        const secret = process.env.RECAPTCHA_SECRET_KEY;
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
        const response = await fetch(verifyUrl, { method: 'POST' });
        const data = await response.json();
        if (!data.success || (data.score && data.score < 0.5)) {
            return res
                .status(400)
                .json({ success: false, error: 'Captcha verification failed' });
        }
        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
}



export default function verificationEmailTemplate(url) {
    return `
    <div style="font-family: 'Poppins', sans-serif; background-color: #f9f9f9; padding: 20px; text-align: center;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #3B82F6; font-size: 24px;">Verify Your Email</h2>
            <p style="color: #1F2937; font-size: 16px;">You're almost there! Click the button below to verify your email and activate your account.</p>
            
            <a href="${url}" target="_blank" style="display: inline-block; padding: 12px 24px; background: #3B82F6; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 6px; margin-top: 15px;">
                Verify Email
            </a>

            <p style="color: #6B7280; font-size: 14px; margin-top: 20px;">If you didn't create an account, you can safely ignore this email.</p>

            <div style="margin-top: 20px; font-size: 12px; color: #9CA3AF;">
                <p>Need help? <a href="mailto:support@yourcrm.com" style="color: #3B82F6; text-decoration: none;">Contact Support</a></p>
                <p>© 2024 YourCRM. All rights reserved.</p>
            </div>
        </div>
    </div>
    `;
}
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/newsletter
 * Subscribe to the newsletter
 */
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Validate the email
    // 2. Check if it's already subscribed
    // 3. Add to your email service provider (Mailchimp, SendGrid, etc.)
    // 4. Send confirmation email

    // For now, we'll just return success
    // Replace this with your actual newsletter service logic

    console.log('Newsletter signup:', email);

    // Example using Mailchimp API (uncomment to use):
    // const mailchimpResponse = await fetch(
    //   `https://us1.api.mailchimp.com/3.0/lists/{LIST_ID}/members`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email_address: email,
    //       status: 'subscribed',
    //     }),
    //   }
    // );

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/newsletter
 * CORS preflight
 */
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

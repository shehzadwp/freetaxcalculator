import { ImageResponse } from 'next/og';

export const alt = 'FreeTaxCalculator.us - Free Online Tax Calculators';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
          padding: '60px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}
          >
            $
          </div>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '28px', fontWeight: 600 }}>
            FreeTaxCalculator.us
          </span>
        </div>
        <div style={{ fontSize: '56px', fontWeight: 800, color: 'white', lineHeight: 1.2, maxWidth: '900px', marginBottom: '24px' }}>
          FreeTaxCalculator.us
        </div>
        <div style={{ fontSize: '28px', color: 'rgba(255,255,255,0.85)', maxWidth: '800px', lineHeight: 1.4 }}>
          Free, accurate tax calculators for salary, after-tax income, and state taxes
        </div>
      </div>
    ),
    { ...size }
  );
}

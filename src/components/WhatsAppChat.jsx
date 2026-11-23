import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppChat = () => {
  const phoneNumber = '919866213555'
  const message = encodeURIComponent('Hello KMC! I need assistance with land protection services.')

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '65px',
        height: '65px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        border: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.15)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.4)'
      }}
    >
      <MessageCircle size={32} color="white" strokeWidth={2.5} />
    </a>
  )
}

export default WhatsAppChat
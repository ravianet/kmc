import React from 'react'
import { FileText, Download, Upload, Lock, Eye, Trash2 } from 'lucide-react'

const Documents = ({ user }) => {
  const documents = [
    { id: 1, name: 'Property Title Deed - Plot #456.pdf', type: 'Title Deed', date: '2024-01-10', size: '2.4 MB' },
    { id: 2, name: 'Encumbrance Certificate - Plot #456.pdf', type: 'EC', date: '2024-01-08', size: '1.1 MB' },
    { id: 3, name: 'Survey Sketch - Plot #456.pdf', type: 'Survey', date: '2024-01-05', size: '850 KB' },
    { id: 4, name: 'Property Title Deed - Plot #789.pdf', type: 'Title Deed', date: '2024-01-03', size: '1.9 MB' },
    { id: 5, name: 'Encumbrance Certificate - Plot #789.pdf', type: 'EC', date: '2024-01-01', size: '920 KB' }
  ]

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h2>Document Vault</h2>
            <p style={{ color: '#64748b', marginTop: '4px' }}>Securely store and access all your property documents.</p>
          </div>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Upload size={18} /> Upload Document
          </button>
        </div>

        <div className="card" style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px', background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)', border: '1px solid #e9d5ff' }}>
          <Lock size={28} color="#7c3aed" />
          <div>
            <h4 style={{ margin: 0 }}>End-to-End Encryption</h4>
            <p style={{ margin: 0, color: '#7c3aed', fontSize: '0.9rem' }}>All your documents are encrypted and only accessible by you.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {documents.map((doc) => (
            <div key={doc.id} className="card" style={{ padding: '20px', border: '2px solid transparent', background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #7c3aed20, #ec489920) border-box' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, #7c3aed15, #ec489915)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <FileText size={24} color="#7c3aed" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h5 style={{ margin: 0, marginBottom: '4px', fontSize: '0.95rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.name}</h5>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>{doc.type} • {doc.date}</p>
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '16px' }}>{doc.size}</p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-outline" style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}>
                  <Eye size={14} />
                </button>
                <button className="btn btn-outline" style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}>
                  <Download size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Documents
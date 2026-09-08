import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Check, X, Shield, RefreshCw } from 'lucide-react';

export default function Dashboard({ products, onAddProduct, onUpdateProduct, onDeleteProduct, refreshCatalog }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    type: 'Clay',
    price: '',
    length: '230',
    width: '110',
    height: '76',
    stock: '5000',
    description: '',
    characteristics: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'Clay',
      price: '',
      length: '230',
      width: '110',
      height: '76',
      stock: '5000',
      description: '',
      characteristics: ''
    });
    setShowAddForm(false);
    setEditProductId(null);
  };

  const handleEditClick = (product) => {
    setEditProductId(product.id);
    setFormData({
      name: product.name,
      type: product.type,
      price: String(product.price),
      length: String(product.dimensions.length),
      width: String(product.dimensions.width),
      height: String(product.dimensions.height),
      stock: String(product.stock),
      description: product.description || '',
      characteristics: product.characteristics.join('\n')
    });
    setShowAddForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const charsArray = formData.characteristics
      ? formData.characteristics.split('\n').filter(line => line.trim() !== '')
      : [];

    const productPayload = {
      name: formData.name,
      type: formData.type,
      price: parseFloat(formData.price),
      dimensions: {
        length: Number(formData.length),
        width: Number(formData.width),
        height: Number(formData.height)
      },
      stock: Number(formData.stock),
      description: formData.description,
      characteristics: charsArray
    };

    if (editProductId) {
      onUpdateProduct(editProductId, productPayload);
    } else {
      onAddProduct(productPayload);
    }
    resetForm();
  };

  return (
    <section style={{ padding: '40px 0' }}>
      <div className="container">
        
        {/* Header Action Grid */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <div>
            <h2 style={{ fontSize: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Shield color="var(--accent-light)" /> Admin Control Center
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              Manage ACME bricks manufacturing stocks, catalog pricing, and dimension matrices.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-secondary" onClick={refreshCatalog} style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <RefreshCw size={14} /> Refresh
            </button>
            <button className="btn btn-primary" onClick={() => { resetForm(); setShowAddForm(true); }} style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Plus size={16} /> Add Brick
            </button>
          </div>
        </div>

        {/* Modal / Inline Form Drawer */}
        {showAddForm && (
          <div className="glass-panel animate-fade-in" style={{
            padding: '24px',
            borderRadius: '16px',
            marginBottom: '32px',
            border: '1px solid var(--accent-border)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px' }}>{editProductId ? 'Edit Product Specifications' : 'Register New Brick Variant'}</h3>
              <button onClick={resetForm} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              
              <div>
                <div className="input-group">
                  <label className="input-label">Product Name</label>
                  <input type="text" required name="name" value={formData.name} onChange={handleInputChange} className="form-input" placeholder="e.g. Cobalt Engineered Blue" />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="input-group">
                    <label className="input-label">Category</label>
                    <select name="type" value={formData.type} onChange={handleInputChange} className="form-select">
                      <option value="Clay">Clay</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Refractory">Refractory</option>
                      <option value="Natural Stone">Natural Stone</option>
                      <option value="Glazed Facing">Glazed Facing</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Unit Price ($)</label>
                    <input type="number" step="0.01" required name="price" value={formData.price} onChange={handleInputChange} className="form-input" placeholder="1.50" />
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Current Stock Count</label>
                  <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} className="form-input" />
                </div>

                <div className="input-group" style={{ marginBottom: 0 }}>
                  <label className="input-label">Product Description</label>
                  <textarea rows="3" name="description" value={formData.description} onChange={handleInputChange} className="form-textarea" placeholder="Brief copy for storefront listing..."></textarea>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Dimensions Matrix (mm)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div className="input-group" style={{ marginBottom: 0 }}>
                    <label className="input-label">Length</label>
                    <input type="number" required name="length" value={formData.length} onChange={handleInputChange} className="form-input" />
                  </div>
                  <div className="input-group" style={{ marginBottom: 0 }}>
                    <label className="input-label">Width</label>
                    <input type="number" required name="width" value={formData.width} onChange={handleInputChange} className="form-input" />
                  </div>
                  <div className="input-group" style={{ marginBottom: 0 }}>
                    <label className="input-label">Height</label>
                    <input type="number" required name="height" value={formData.height} onChange={handleInputChange} className="form-input" />
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Key Specifications (One entry per line)</label>
                  <textarea 
                    rows="6" 
                    name="characteristics" 
                    value={formData.characteristics} 
                    onChange={handleInputChange} 
                    className="form-textarea" 
                    placeholder="e.g. Compressive Strength: 60 MPa&#10;Water Absorption: < 6%"
                  ></textarea>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '16px' }}>
                  <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>
                  <button type="submit" className="btn btn-primary">
                    <Check size={16} /> Save Product
                  </button>
                </div>
              </div>

            </form>
          </div>
        )}

        {/* Inventory Table */}
        <div className="glass-panel" style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--border)'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            fontSize: '15px'
          }}>
            <thead>
              <tr style={{
                background: 'rgba(255,255,255,0.02)',
                borderBottom: '1px solid var(--border)'
              }}>
                <th style={{ padding: '16px 20px', color: 'var(--text-muted)', fontWeight: 600 }}>Product Details</th>
                <th style={{ padding: '16px 20px', color: 'var(--text-muted)', fontWeight: 600 }}>Category</th>
                <th style={{ padding: '16px 20px', color: 'var(--text-muted)', fontWeight: 600 }}>Dimensions</th>
                <th style={{ padding: '16px 20px', color: 'var(--text-muted)', fontWeight: 600 }}>Price</th>
                <th style={{ padding: '16px 20px', color: 'var(--text-muted)', fontWeight: 600 }}>Stock</th>
                <th style={{ padding: '16px 20px', color: 'var(--text-muted)', fontWeight: 600, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} style={{
                  borderBottom: '1px solid var(--border)',
                  transition: 'background 0.2s'
                }} className="table-row-hover">
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 600, color: '#fff' }}>{product.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', maxWidth: '280px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                      {product.description}
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span className="badge badge-accent" style={{ fontSize: '11px' }}>{product.type}</span>
                  </td>
                  <td style={{ padding: '16px 20px', fontFamily: 'monospace', fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {product.dimensions.length}x{product.dimensions.width}x{product.dimensions.height} mm
                  </td>
                  <td style={{ padding: '16px 20px', fontWeight: 600, color: '#fff' }}>
                    ${product.price.toFixed(2)}
                  </td>
                  <td style={{ padding: '16px 20px', color: product.stock < 2000 ? 'var(--warning)' : 'var(--text-secondary)' }}>
                    {product.stock.toLocaleString()} pcs
                  </td>
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button 
                        onClick={() => handleEditClick(product)}
                        style={{
                          background: 'none', border: '1px solid var(--border)', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: 'var(--text-secondary)', transition: '0.2s'
                        }}
                        title="Edit specifications"
                        className="btn-secondary-hover"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button 
                        onClick={() => onDeleteProduct(product.id)}
                        style={{
                          background: 'none', border: '1px solid rgba(239, 68, 68, 0.1)', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: 'var(--danger)', transition: '0.2s'
                        }}
                        title="Delete variant"
                        className="btn-danger-hover"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <style>{`
          .table-row-hover:hover {
            background-color: rgba(255, 255, 255, 0.015);
          }
          .btn-secondary-hover:hover {
            border-color: var(--accent-light) !important;
            color: var(--accent-light) !important;
          }
          .btn-danger-hover:hover {
            background-color: rgba(239, 68, 68, 0.1) !important;
            border-color: var(--danger) !important;
          }
        `}</style>

      </div>
    </section>
  );
}

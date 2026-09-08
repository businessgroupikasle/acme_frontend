import React, { useState, useEffect } from 'react';
import { Calculator, Hammer, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export default function BrickCalculator({ products, preselectedProduct }) {
  const API_URL = import.meta.env.VITE_API_URL || '';
  const [formData, setFormData] = useState({
    wallLength: '5',
    wallHeight: '3',
    brickLength: '230',
    brickHeight: '76',
    brickWidth: '110',
    mortarJoint: '10',
    wastePercentage: '10',
    brickPrice: '1.25'
  });

  const [selectedProductId, setSelectedProductId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sync preselected product if passed
  useEffect(() => {
    if (preselectedProduct) {
      updateWithProduct(preselectedProduct);
    }
  }, [preselectedProduct]);

  const updateWithProduct = (product) => {
    setSelectedProductId(product.id);
    setFormData((prev) => ({
      ...prev,
      brickLength: String(product.dimensions.length),
      brickHeight: String(product.dimensions.height),
      brickWidth: String(product.dimensions.width),
      brickPrice: String(product.price)
    }));
  };

  const handleProductSelect = (e) => {
    const pId = e.target.value;
    setSelectedProductId(pId);
    if (!pId) return;

    const prod = products.find(p => p.id === pId);
    if (prod) {
      updateWithProduct(prod);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/api/calculator/estimate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Calculator server responded with an error');
      }

      const resData = await response.json();
      if (resData.status === 'success') {
        setResult(resData.data);
      } else {
        throw new Error(resData.message || 'Failed to compute estimate');
      }
    } catch (err) {
      console.warn('Backend calculator failed. Running fallback local client-side estimation...');
      // Fallback local calculations in case backend isn't running
      runLocalCalculation();
    } finally {
      setLoading(false);
    }
  };

  const runLocalCalculation = () => {
    try {
      const wallL = parseFloat(formData.wallLength) || 0;
      const wallH = parseFloat(formData.wallHeight) || 0;
      const brickL = parseFloat(formData.brickLength) || 230;
      const brickH = parseFloat(formData.brickHeight) || 76;
      const brickW = parseFloat(formData.brickWidth) || 110;
      const mortarJ = parseFloat(formData.mortarJoint) || 10;
      const wasteP = parseFloat(formData.wastePercentage) || 10;
      const price = parseFloat(formData.brickPrice) || 0;

      const area = wallL * wallH;
      const singleBrickArea = ((brickL + mortarJ) / 1000) * ((brickH + mortarJ) / 1000);
      const baseBricks = area / singleBrickArea;
      const wasteBricks = baseBricks * (wasteP / 100);
      const totalBricks = Math.ceil(baseBricks + wasteBricks);
      
      const wallVol = area * (brickW / 1000);
      const singleBrickVol = (brickL / 1000) * (brickH / 1000) * (brickW / 1000);
      const netBricksVol = Math.ceil(baseBricks) * singleBrickVol;
      let mortarVol = wallVol - netBricksVol;
      if (mortarVol <= 0) mortarVol = area * 0.02;

      const cementBags = Math.ceil(mortarVol * 10);
      const sandTonnes = (mortarVol * 1.2).toFixed(2);
      const totalCost = (totalBricks * price).toFixed(2);

      setResult({
        wallArea: area.toFixed(2),
        baseBricksCount: Math.ceil(baseBricks),
        wastageCount: Math.ceil(wasteBricks),
        totalBricksCount: totalBricks,
        mortarVolumeM3: mortarVol.toFixed(3),
        cementBagsNeeded: cementBags,
        sandTonnesNeeded: parseFloat(sandTonnes),
        totalMaterialCost: parseFloat(totalCost)
      });
    } catch (err) {
      setError('Calculations failed. Please review your input values.');
    }
  };

  return (
    <section id="calculator-section" style={{ padding: '60px 0', position: 'relative' }}>
      <div className="glow-spot" style={{ top: '30%', right: '10%' }}></div>
      
      <div className="container">
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '12px' }}>Smart Material Estimator</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Enter your wall dimensions and product details to generate real-time masonry counts, mortar requirements, and structural cost plans.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Form */}
          <form className="glass-panel" onSubmit={handleCalculate} style={{
            padding: '32px',
            borderRadius: '20px',
            border: '1px solid var(--glass-border)'
          }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', marginBottom: '24px' }}>
              <Calculator color="var(--accent-light)" /> Input Dimensions
            </h3>

            {/* Select product preset */}
            <div className="input-group">
              <label className="input-label">Select Brick Catalog Preset</label>
              <select 
                className="form-select"
                value={selectedProductId}
                onChange={handleProductSelect}
                style={{ cursor: 'pointer' }}
              >
                <option value="">-- Custom Dimensions --</option>
                {products.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="input-group">
                <label className="input-label">Wall Length (meters)</label>
                <input 
                  type="number" step="0.1" required
                  name="wallLength" value={formData.wallLength} onChange={handleInputChange}
                  className="form-input" placeholder="e.g. 10" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">Wall Height (meters)</label>
                <input 
                  type="number" step="0.1" required
                  name="wallHeight" value={formData.wallHeight} onChange={handleInputChange}
                  className="form-input" placeholder="e.g. 3" 
                />
              </div>
            </div>

            <h4 style={{ fontSize: '15px', color: 'var(--text-muted)', margin: '16px 0 8px 0', textTransform: 'uppercase' }}>
              Brick Dimensions (mm)
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <div className="input-group">
                <label className="input-label">Length</label>
                <input 
                  type="number" required
                  name="brickLength" value={formData.brickLength} onChange={handleInputChange}
                  className="form-input" placeholder="e.g. 230" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">Height</label>
                <input 
                  type="number" required
                  name="brickHeight" value={formData.brickHeight} onChange={handleInputChange}
                  className="form-input" placeholder="e.g. 76" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">Width</label>
                <input 
                  type="number" required
                  name="brickWidth" value={formData.brickWidth} onChange={handleInputChange}
                  className="form-input" placeholder="e.g. 110" 
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '8px' }}>
              <div className="input-group">
                <label className="input-label">Mortar Joint (mm)</label>
                <input 
                  type="number" required
                  name="mortarJoint" value={formData.mortarJoint} onChange={handleInputChange}
                  className="form-input" placeholder="10" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">Wastage Buffer (%)</label>
                <input 
                  type="number" required
                  name="wastePercentage" value={formData.wastePercentage} onChange={handleInputChange}
                  className="form-input" placeholder="10" 
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Unit Price ($ per brick)</label>
              <input 
                type="number" step="0.01" required
                name="brickPrice" value={formData.brickPrice} onChange={handleInputChange}
                className="form-input" placeholder="0.00" 
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }} disabled={loading}>
              {loading ? 'Estimating...' : 'Generate Estimate'}
            </button>
          </form>

          {/* Results Panel */}
          <div>
            {!result ? (
              <div className="glass-panel" style={{
                padding: '40px',
                borderRadius: '20px',
                textAlign: 'center',
                minHeight: '450px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid var(--glass-border)'
              }}>
                <Calculator size={56} style={{ opacity: 0.1, marginBottom: '20px' }} />
                <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Awaiting Calculations</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '300px' }}>
                  Fill out the parameters and click "Generate Estimate" to load counts and costing.
                </p>
              </div>
            ) : (
              <div className="glass-panel animate-fade-in" style={{
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid var(--accent-border)',
                boxShadow: '0 8px 32px var(--accent-glow)'
              }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', marginBottom: '24px', color: '#fff' }}>
                  <Sparkles color="var(--accent-light)" /> Estimation Report
                </h3>

                {/* Primary Number Box */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, rgba(234, 88, 12, 0.04) 100%)',
                  padding: '24px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  marginBottom: '24px',
                  border: '1px solid var(--border)'
                }}>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Total Bricks Required</span>
                  <h2 style={{ fontSize: '48px', color: '#fff', margin: '8px 0 4px 0' }}>
                    {result.totalBricksCount.toLocaleString()}
                  </h2>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Base: {result.baseBricksCount.toLocaleString()} + Wastage ({formData.wastePercentage}%): {result.wastageCount.toLocaleString()}
                  </p>
                </div>

                {/* Secondary breakdown stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '12px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Wall Surface Area</span>
                    <h4 style={{ fontSize: '18px', color: '#fff' }}>{result.wallArea} m²</h4>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '12px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Estimated Cost</span>
                    <h4 style={{ fontSize: '18px', color: '#fff' }}>${result.totalMaterialCost.toLocaleString()}</h4>
                  </div>
                </div>

                {/* Mortar Breakdown */}
                <div style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '20px'
                }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                    <Hammer size={16} /> Mortar & Auxiliary Materials
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Mortar Wet Volume</span>
                      <span style={{ color: '#fff', fontWeight: 600 }}>{result.mortarVolumeM3} m³</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Cement Needed (50kg bags)</span>
                      <span style={{ color: '#fff', fontWeight: 600 }}>~ {result.cementBagsNeeded} bags</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Building Sand Needed</span>
                      <span style={{ color: '#fff', fontWeight: 600 }}>~ {result.sandTonnesNeeded} tonnes</span>
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '24px',
                  background: 'rgba(245, 158, 11, 0.05)',
                  border: '1px solid rgba(245, 158, 11, 0.15)',
                  padding: '12px',
                  borderRadius: '8px',
                  display: 'flex',
                  gap: '8px',
                  fontSize: '12px',
                  color: '#fcd34d'
                }}>
                  <HelpCircle size={28} style={{ flexShrink: 0 }} />
                  <span>
                    Estimates are structural approximations. Actual counts may fluctuate depending on lay pattern (Running Bond, Flemish, English) and job site conditions.
                  </span>
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function ProductsSidebar({
  selectedCategory,
  onCategoryChange,
  activeFilters,
  onFilterToggle,
    onResetFilters,
    categoryCounts = {
      'Fly Ash Bricks': 15,
      'Fly Ash Blocks': 12,
      'Paver Blocks': 18,
      'Interlock Bricks': 10,
      'Solid Blocks': 8,
      'AAC Blocks': 7
    },
    filterCounts = {
      residential: 12,
      commercial: 15,
      industrial: 10,
      infrastructure: 9,
      size1: 10,
      size2: 12,
      size3: 8,
      strength1: 10,
      strength2: 15,
      strength3: 12,
      strength4: 8
    }
  }) {
    const categories = [
      'Fly Ash Bricks',
      'Fly Ash Blocks',
      'Paver Blocks',
      'Interlock Bricks',
      'Solid Blocks',
      'AAC Blocks'
    ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      background: '#ffffff',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '24px',
      alignSelf: 'start',
      width: '100%'
    }}>
      {/* Product Categories */}
      <div>
        <h3 style={{
          fontSize: '15px',
          fontWeight: 800,
          color: 'var(--text-primary)',
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid var(--border)'
        }}>
          Product Categories
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <button
            onClick={() => onCategoryChange(null)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 14px',
              borderRadius: '4px',
              background: !selectedCategory ? 'var(--accent)' : 'transparent',
              color: !selectedCategory ? '#ffffff' : 'var(--text-primary)',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: !selectedCategory ? '700' : '500',
              textAlign: 'left',
              transition: 'var(--transition)'
            }}
            className="category-filter-btn"
          >
            <span>All Categories</span>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              opacity: !selectedCategory ? 1 : 0.6,
              background: !selectedCategory ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.05)',
              padding: '2px 6px',
              borderRadius: '9999px',
              color: !selectedCategory ? '#ffffff' : 'var(--text-primary)'
            }}>
              {String(Object.values(categoryCounts).reduce((sum, count) => sum + count, 0)).padStart(2, '0')}
            </span>
          </button>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 14px',
                  borderRadius: '4px',
                  background: isActive ? 'var(--accent)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-primary)',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: isActive ? '700' : '500',
                  textAlign: 'left',
                  transition: 'var(--transition)'
                }}
                className="category-filter-btn"
              >
                <span>{cat}</span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  opacity: isActive ? 1 : 0.6,
                  background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.05)',
                  padding: '2px 6px',
                  borderRadius: '9999px',
                  color: isActive ? '#ffffff' : 'var(--text-primary)'
                }}>
                  {String(categoryCounts[cat] || 0).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter By Section */}
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid var(--border)'
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)' }}>
            Filter By
          </h3>
          <button 
            onClick={onResetFilters}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--accent)',
              cursor: 'pointer'
            }}
          >
            Clear All
          </button>
        </div>

        {/* 1. Application */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Application
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'residential', label: 'Residential', count: filterCounts.residential },
              { id: 'commercial', label: 'Commercial', count: filterCounts.commercial },
              { id: 'industrial', label: 'Industrial', count: filterCounts.industrial },
              { id: 'infrastructure', label: 'Infrastructure', count: filterCounts.infrastructure }
            ].map((item) => (
              <label key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="checkbox" 
                    checked={!!activeFilters[item.id]} 
                    onChange={() => onFilterToggle(item.id)}
                    style={{ accentColor: 'var(--accent)' }} 
                  />
                  <span>{item.label}</span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 2. Size */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Size (mm)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'size1', label: '190 x 90 x 90', count: filterCounts.size1 },
              { id: 'size2', label: '190 x 90 x 75', count: filterCounts.size2 },
              { id: 'size3', label: '390 x 190 x 190', count: filterCounts.size3 }
            ].map((item) => (
              <label key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="checkbox" 
                    checked={!!activeFilters[item.id]} 
                    onChange={() => onFilterToggle(item.id)}
                    style={{ accentColor: 'var(--accent)' }} 
                  />
                  <span>{item.label}</span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.count}</span>
              </label>
            ))}
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontWeight: 600 }}>
              <span>Other Sizes</span>
              <span>▾</span>
            </div>
          </div>
        </div>

        {/* 3. Strength */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Strength (MPa)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'strength1', label: '3.5', count: filterCounts.strength1 },
              { id: 'strength2', label: '5', count: filterCounts.strength2 },
              { id: 'strength3', label: '7.5', count: filterCounts.strength3 },
              { id: 'strength4', label: '10', count: filterCounts.strength4 }
            ].map((item) => (
              <label key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="checkbox" 
                    checked={!!activeFilters[item.id]} 
                    onChange={() => onFilterToggle(item.id)}
                    style={{ accentColor: 'var(--accent)' }} 
                  />
                  <span>{item.label}</span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Reset filters button */}
        <button 
          onClick={onResetFilters}
          className="btn"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '12px',
            fontWeight: 700,
            borderRadius: '4px',
            background: 'transparent',
            color: 'var(--accent)',
            border: '1.5px solid var(--accent)'
          }}
        >
          RESET FILTERS
        </button>

      </div>
    </div>
  );
}

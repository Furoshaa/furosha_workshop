const categories = [
    { name: 'PS3', color: '#4F8EF7', navigation: '/ps3' },
    { name: 'PS2', color: '#7B7FEC', navigation: '/ps2' },
    { name: 'PSP', color: '#F7B32B', navigation: '/psp' },
    { name: 'DSi', color: '#2EC4B6', navigation: '/dsi' },
];

const cardStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    padding: '32px 24px',
    margin: '16px',
    minWidth: '160px',
    minHeight: '120px',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s',
};

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
};

const ProductsCategory = () => {
    return (
        <div style={containerStyle}>
            {categories.map((cat) => (
                <a
                    key={cat.name}
                    href={cat.navigation} // Placeholder for future navigation
                    style={{ ...cardStyle, background: cat.color, textDecoration: 'none' }}
                >
                    {cat.name}
                </a>
            ))}
        </div>
    );
};

export default ProductsCategory;


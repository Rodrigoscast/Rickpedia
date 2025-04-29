function CharacterCard({ character }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '10px',
      width: '180px',
      textAlign: 'center',
      boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      backgroundColor: '#f9f9f9'
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={character.image} alt={character.name} style={{ width: '100%', borderRadius: '10px' }} />
      <h3 style={{ marginTop: '10px', color: '#333' }}>{character.name}</h3>
    </div>
  )
}

export default CharacterCard

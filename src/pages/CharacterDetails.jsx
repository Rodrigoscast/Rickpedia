import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CharacterDetails() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading character...</div>

  if (!character) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Character not found.</div>

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <Link to="/" style={{
        display: 'inline-block',
        marginBottom: '20px',
        textDecoration: 'none',
        color: '#00b5cc',
        fontSize: '18px'
      }}>
        ← Back
      </Link>

      <div style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
        color: 'black'
      }}>
        <img src={character.image} alt={character.name}
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginBottom: '20px'
          }}
        />
        <h1>{character.name}</h1>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
        <p><strong>Location:</strong> {character.location.name}</p>
      </div>
    </div>
  )
}

export default CharacterDetails

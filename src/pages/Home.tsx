import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import Pagination from '../components/Pagination'

function Home() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [info, setInfo] = useState({})
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${search}`)
      .then(response => {
        if (!response.ok) throw new Error('No characters found')
        return response.json()
      })
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
        setError(false)
      })
      .catch(() => {
        setCharacters([])
        setInfo({})
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page, search])

  function handleSearch(e) {
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Cabeçalho */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Rick and Morty Characters</h1>
        <input
          type="text"
          placeholder="Search character..."
          value={search}
          onChange={handleSearch}
          style={{
            padding: '10px',
            width: '300px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginTop: '10px'
          }}
        />
      </header>

      {/* Conteúdo Principal */}
      <main style={{ flexGrow: 1 }}>
        {loading ? (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading characters...</div>
        ) : error ? (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>No characters found 😢</h2>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            {characters.map(character => (
              <Link to={`/character/${character.id}`} key={character.id} style={{ textDecoration: 'none' }}>
                <CharacterCard character={character} />
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Paginação no final */}
      <footer style={{ marginBottom: '40px' }}>
        {!loading && !error && <Pagination page={page} setPage={setPage} info={info} />}
      </footer>
    </div>
  )
}

export default Home

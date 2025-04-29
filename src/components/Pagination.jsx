function Pagination({ page, setPage, info }) {
    return (
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={!info.prev}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: info.prev ? '#00b5cc' : '#ccc',
            color: '#fff',
            cursor: info.prev ? 'pointer' : 'not-allowed'
          }}
        >
          Previous
        </button>
        <span style={{ margin: '0 10px', fontSize: '18px' }}>Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={!info.next}
          style={{
            padding: '10px 20px',
            marginLeft: '10px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: info.next ? '#00b5cc' : '#ccc',
            color: '#fff',
            cursor: info.next ? 'pointer' : 'not-allowed'
          }}
        >
          Next
        </button>
      </div>
    )
  }
  
  export default Pagination
  
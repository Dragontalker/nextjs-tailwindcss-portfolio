import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-3'>Sidebar</div>
      <div className='col-span-9'>
        <Component {...pageProps} />
      </div>
    </div>
    
  )
}

export default MyApp

import { useSelector } from 'react-redux'
import Loader from './Loader'
import Error from './Error'
import { baseImgUrl } from '../constans'
const Hero = () => {
    const { isLoading, error, movies } = useSelector((store) => store.movies)
    // Populer filmler listesinden rastgele 1 filmi Renderlamak istersek
    //Populer list 20 elemanlı bir dizi ve her bir dizi elemanına indeks numarasıyla erişilebilir.Dolayısıyla Rastgele eleman saçmek için her seferinde random bir numara çevirmemiz lazım
    const i = Math.floor(Math.random() * 20)
    // Random sayıya eşit dizi indeksine eriştik
    const randomMovie = movies ? movies[i] : null
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:max-h-[400px]'>{!randomMovie || isLoading ? <Loader /> : error ? <Error /> : (
            <>
                <div className='flex flex-col gap-6 items-center'>
                    <h1 className='text-3xl font-bold'>{randomMovie.title}</h1>
                    <p className='text-start'>{randomMovie.overview}</p>
                    <p>
                        <span>IMDB:</span>
                        <span className='text-yellow-400 ms-2 font-semibold'>{randomMovie.vote_average.toFixed(1)}</span>
                    </p>
                    <div className='flex gap-5'>
                        <button className='p-2 rounded bg-red-600 hover:bg-red-700'>Filmi izle</button>
                        <button className='p-2 rounded bg-blue-600 hover:bg-blue-700'>Listeye Ekle</button>
                    </div>

                </div>
                <div className='flex justify-center'>
                    <img className=' hero-img my-4 object-contain rounded max-h-[300px]' src={baseImgUrl + randomMovie.backdrop_path} alt="" />
                </div>
            </>
        )}</div>
    )
}

export default Hero
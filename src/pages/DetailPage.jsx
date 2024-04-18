import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { baseImgUrl } from '../constans'
import DetailDisplay from '../components/DetailDisplay'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import ActorCarts from '../components/ActorCarts'

const DetailPage = () => {
    const [detail, setDetail] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        const params = {
            append_to_response: 'credits,videos',
        }
        api.get(`movie/${id}`, { params }).then((res) => setDetail(res.data)).catch((err) => console.log(err))


    }, [])

    return (
        <div>

            {!detail ? <Loader /> :
                (<div>
                    <div className='relative h-[30vh]'>
                        <img className='object-cover h-full w-full' src={baseImgUrl + detail.backdrop_path} />
                        <div className='absolute bg-black inset-0  grid place-items-center opacity-50'>
                            <span className='text-3xl'>{detail.title}</span>
                        </div>
                    </div>
                    <div className='my-10 grid grid-cols-1 md:grid-cols-2'>
                        <DetailDisplay data={detail.genres} title={"Kategoriler"} />
                        <DetailDisplay data={detail.spoken_languages} title={"Konuşulan Diller"} />
                        <DetailDisplay data={detail.production_companies} title={"Yapımcı Şirketler"} />
                        <DetailDisplay data={detail.production_countries} title={"Yapımcı Ülkeler"} />

                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>{detail.title}</h2>
                        <h3 className='text-xl my-3 text-yellow-200'>{detail.tagline}</h3>
                        <p>{detail.overview}</p>
                        <p className=' my-3'>
                            <span>Yapım Bütçesi:</span>
                            <span className='ms-2  text-green-700'>${detail.budget}</span>
                        </p>
                        <p>
                            <span>Hasılat:</span>
                            <span className='ms-2 text-green-700'>${detail.revenue}</span>
                        </p>
                    </div>
                    <div className='my-10'>
                        <Splide options={{ autoWidth: true, pagination: false }}>
                            {detail.credits.cast.map((actor, i) => (
                                <SplideSlide>
                                    <ActorCarts actor={actor} key={i} />
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>)}
        </div>
    )
}

export default DetailPage
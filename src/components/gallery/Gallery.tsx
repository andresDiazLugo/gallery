import React, { useEffect,useRef, useState,useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import {useGetToken} from '../coostomHoocks/hooks'
import {GalleryImg} from '../../interface/interface'
// import {getAllImg} from '../direccionesHTTPS/directions.hhtps'
// import {GET} from '../serviceHTTP/GET.http'
import NotSearchImg from '../NotSearchImg/NotSearchImg'
import Contexto from '../StateGlobal/Context'

export default function App() {
  const {gallery}:any = useContext(Contexto)
  // const [getAll, setGetAllImg] = useState<GalleryImg[]>([])
  // const token = useGetToken()
  // useEffect(()=>{
  //   (async()=>{
  //       const response:any = await GET(getAllImg,token,false)
  //       setGetAllImg(response)
  //   })()
  // },[])

  if(!gallery.length){
    return (<NotSearchImg msg="Galeria vacia"/>)
  }
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full  pt-50px pb-50px  mt-60"
      >
        { gallery.length > 0 && gallery.map((e:GalleryImg)=>{
          return <SwiperSlide key={e.id} className="bg-center bg-cover w-80 h-96 rounded-3xl">
          <img className="block w-80 h-96 rounded-3xl" src={e?.urlImg}/>
        </SwiperSlide>
        })}
      
      </Swiper>
    </>
  );
}

import Header from "../components/Header";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import mainImg from '../assets/images/guide/main.webp';
import cardImg01 from '../assets/images/guide/img_totalLiving.webp';
import cardImg02 from '../assets/images/guide/img_interior.webp';
import cardImg03 from '../assets/images/guide/img_homeDeco.webp';
import cardImg04 from '../assets/images/guide/img_lifeStyle.webp';
import cardImg05 from '../assets/images/guide/img_tableWare.webp';
import cardImg06 from '../assets/images/guide/img_artLiving.webp';
import otherExhi from '../assets/images/guide/otherExhi.webp';
import otherExhi2 from '../assets/images/guide/otherExhi2.webp';

const cardData = [
    {
      src: cardImg01,
      title: "TOTAL LIVING",
      contents: "거실/침실/주방/아동가구, 오피스, 조명",
    },
    {
      src: cardImg02,
      title: "INTERIOR",
      contents: "인테리어 컨설팅, 시공상담, 디스플레이",
    },
    {
      src: cardImg03,
      title: "HOME DECO",
      contents: "오브제, 인테리어 소품, 패브릭, 시계",
    },
    {
      src: cardImg04,
      title: "LIFESTYLE",
      contents: "가드닝, 디퓨저, 향초, 플라워, 파티, 가방",
    },
    {
      src: cardImg05,
      title: "TABLEWARE",
      contents: "키친웨어, 커트러리, 식기, 글라스",
    },
    {
      src: cardImg06,
      title: "ART LIVING",
      contents: "갤러리, 예술, 일러스트, 공예",
    },
];



const ExhibitionGuide = () =>{
    const navigate = useNavigate();

    const handleMove = (path) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    };
    return(
        <>
        <Header current="guide"></Header>
        <motion.div 
        id="exhi-guide"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96] // 부드럽고 고급진 느낌
        }}
        >
            
            <div className="cont-img">
                <img src={mainImg}/>
            </div>
            <section className="overview-exhi">
                <h2>전시 개요</h2>
                <dl className="info-list">
                    <div className="info-row">
                        <dt>명 칭</dt>
                        <dd>2025 부산 홈·테이블데코페어</dd>
                    </div>
                    <div className="info-row">
                        <dt>기 간</dt>
                        <dd>2025. 6. 26(목) ~ 29(일)</dd>
                    </div>
                    <div className="info-row">
                        <dt>시 간</dt>
                        <dd>목 금 10 ~ 17시, 토일 10 ~ 18시</dd>
                    </div>
                    <div className="info-row">
                        <dt>장 소</dt>
                        <dd>부산 벡스코 1전시장 3홀</dd>
                    </div>
                    <div className="info-row">
                        <dt>입 장</dt>
                        <dd>초청장 등록자 무료 입장</dd>
                    </div>
                    {/* <div className="info-row">
                        <dt>후 원</dt>
                        <dd>CJ온스타일</dd>
                    </div> */}
                </dl>

            </section>
            <section className="compose-exhi">
                <h2>전시 구성</h2>
                <ul>               
                    {cardData.map((card, idx) => (
                    <Card
                        key={idx}
                        src={card.src}
                        title={card.title}
                        contents={card.contents}
                    />
                    ))}
                </ul>
            </section>
            <section className="other-exhi other-exhi01">
                <h2>동시 개최</h2>
                <div className="cont-img">
                    <img src={otherExhi}/>
                </div>
                {/* <div className="other-desc">
                    <h3>2025 디자인살롱 서울 컨퍼런스</h3>
                    <p>5. 8(목) - 9(금)</p>
                    <p>서울 코엑스 컨퍼런스룸 402호</p>
                    <p>*컨퍼런스 티켓을 별도로 예매하셔야 합니다.</p>                    
                </div>
                <button className="btn_more" onClick={() => handleMove("/DesignSalon")}>자세히보기</button>                */}
            </section>
           
            

        </motion.div>
        </>
    )
};
export default ExhibitionGuide;
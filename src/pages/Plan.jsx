import {motion} from 'framer-motion'
import Header from "../components/Header";
import Card from "../components/Card";
import mainImg01 from '../assets/images/plan/main01.webp';
import mainImg02 from '../assets/images/plan/main02.webp';
import mainImg03 from '../assets/images/plan/main03.webp';
import plan01 from '../assets/images/plan/img_plan01.webp';
import plan02 from '../assets/images/plan/img_plan02.webp';
import plan03 from '../assets/images/plan/img_plan03.webp';
import plan04 from '../assets/images/plan/img_plan04.webp';
import plan05 from '../assets/images/plan/img_plan05.webp';
import plan06 from '../assets/images/plan/img_plan06.webp';
import plan07 from '../assets/images/plan/img_plan07.webp';
import plan08 from '../assets/images/plan/img_plan08.webp';


const Plan = () => {
    const cardData = [
        { src: plan01, title: 'SIGNATURE 4: 취향의 정점' , contents:'글로벌 라이프스타일 큐레이셔 특별관'},
        { src: plan02, title: 'OUTDOOR LIFE', contents:'써머시즌 프리미엄 아웃도어 특별관' },
        { src: plan03, title: 'HOME FABRIC', contents:'다채로운 분위기 연출 노하우를 제안하는 패브릭 존' },        
        { src: plan04, title: 'PLANTERIOR' , contents:'공간에 생명력을 불어넣는 힐링 인테리어 솔루션'},
        { src: plan05, title: 'KIDS ROOM' , contents:'가정의 달 5월, 우리 아이를 위한 특별한 공간제안'},
        { src: plan06, title: 'ART LIVING', contents:'갤러리들이 선사하는 일상 속 예술' },
        { src: plan07, title: 'LIVING ON FAIR: Gifted Moments, with ONStyle', contents:'CJ온스타일 리빙 특별관' },
        { src: plan08 , title: 'A Garden of Happiness by Christmas World Korea', contents:'행복의 정원' },

      ];    
    return(
        <>
            <Header current="plan"/>
            <motion.div id="plan"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96] // 부드럽고 고급진 느낌
            }}
            >
                
                <div className="cont-img">
                    <img src={mainImg01} />
                    <img src={mainImg02} />
                    <img src={mainImg03} />
                </div>
                <section className="features">
                    <h2>LIVING FEATURE <strong>by</strong><span> 마초의 사춘기</span></h2>
                    <h3>The Green Celebration:<br /></h3>
                    <h4>설렘을 디자인하는 비밀스러운 리빙 공간</h4>
                    <h5>5월, 자연과 빛이 가득한 계절.</h5>
                    <p>‘설렘을 디자인하는 과정’을 담은 
                        ‘<strong>The Green Celebration</strong>’은 단순한 공간 연출을 넘어 ‘과정을 디자인하는 즐거움’을 경험하는 몰입형 스토리 콘텐츠 공간입니다.</p>
                    <p>크리스마스의 설렘이 하루 만에 완성되는 것이 아니듯, 초록의 식물이 공간을 감싸며 호기심을 자극하고, 헤리티지 무드의 리빙 아이템과 빈티지 오브제가 자연스럽게 어우러져 다가올 특별한 순간을 준비하는 즐거움을 선사합니다.</p>                        
                    <p>자연의 디테일, 빛의 온기, 프리미엄 가구가 조화된 이곳에서 리빙 트렌드의 새로운 인사이트. 설렘을 디자인하는 새로운 영감을 만나보세요.</p>        
                </section>
                <section>
                    <ul className="cont-card">
                        {cardData.map((item, idx) => (
                        <Card 
                            key={idx}
                            src={item.src} 
                            title={
                           
                                item.title
                            
                            }
                            contents={item.contents}
                        />
                        ))}
                    </ul>
                </section>
                
            </motion.div>
        </>
    )
};

export default Plan;
import {motion} from 'framer-motion';
import Header from '../components/Header';
import mainImg from '../assets/images/salon/main.webp';
import day1_01 from '../assets/images/salon/day1_01.webp';
import day1_02 from '../assets/images/salon/day1_02.webp'
import day1_03 from '../assets/images/salon/day1_03.webp';
import day1_04 from '../assets/images/salon/day1_04.webp';
import day1_05 from '../assets/images/salon/day1_05.webp';
import day1_06 from '../assets/images/salon/day1_06.webp';
import day2_01 from '../assets/images/salon/day2_01.webp';
import day2_02 from '../assets/images/salon/day2_02.webp';
import day2_03 from '../assets/images/salon/day2_03.webp';
import day2_04 from '../assets/images/salon/day2_04.webp';
import day2_05 from '../assets/images/salon/day2_05.webp';
import day2_06 from '../assets/images/salon/day2_06.webp';
import desingSalonLogo from '../assets/images/salon/designSalonLogo.svg';
import rxLogo from '../assets/images/salon/rxLogo.svg';
import cslvLogo from '../assets/images/salon/cslvLogo.svg';

const DesignSalon = ()=>{
    const speakers = [
        {
          name: '권정윤',
          desc: '서울대 소비트렌드분석센터 연구위원',
          img: day1_01,
        },
        {
          name: '이정민',
          desc: '트랜드랩506 대표',
          img: day1_02,
        },
        {
          name: '권오정',
          desc: '노페이크마케팅 대표',
          img: day1_03,
        },
        {
          name: '조지아',
          desc: '조지아컴퍼니 대표',
          img: day1_04,
        },
        {
          name: '오경희',
          desc: '서울프라퍼티인사이트 플랫폼마케팅 상무',
          img: day1_05,
        },
        {
          name: '이혜리',
          desc: 'LX하우시스 트렌드팀 책임',
          img: day1_06,
        },
      ];
    const speakers2 = [
        {
          name: '임대선',
          desc: '이스턴에디션 CEO',
          img: day2_01,
        },
        {
          name: '김종유, 김현진',
          desc: '유랩 소장, 유랩 이사',
          img: day2_02,
        },
        {
          name: '성혜진',
          desc: 'HIT THE TEA CBO',
          img: day2_03,
        },
        {
          name: '조홍래',
          desc: '빔인터랙티브 대표',
          img: day2_04,
        },
        {
          name: '김용철',
          desc: '스튜디오 김거실 대표',
          img: day2_05,
        },
        {
          name: '오현주, 이범수',
          desc: '안마당더랩 소장',
          img: day2_06,
        },
      ];


    return(
        <>
            <Header current="salon" />
            <motion.div id="salon"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96] // 부드럽고 고급진 느낌
            }}
            >
                
                <div className='cont-img'>
                    <img src={mainImg} />
                </div>
                <section className='ticket-area'>
                    <h2>TICKET</h2>
                    <table>
                        <colgroup>
                        <col width="50%"/>
                        <col width="50%"/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>정가</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DAY 1<span className='date'>(5월 8일)</span></td>
                                <td className='amount'>220,000<span className='won'>won</span></td>
                                
                            </tr>
                            <tr>
                                <td>DAY 2<span className='date'>(5월 9일)</span></td>
                                <td className='amount'>220,000<span className='won'>won</span></td>
                                
                            </tr>
                            <tr>
                                <td>DAY 1 & 2</td>
                                <td className='amount'>385,000<span className='won'>won</span></td>
                                
                            </tr>
                        </tbody>
                    </table>
                    <a className='btn-regis' href='https://www.hometabledeco.com/ko-kr/designsalonseoul.html'>티켓 예매하기<span>▶</span></a>
                </section>
                <section className="schedule-day">
                    <div className="schedule-header">
                        <h2 className="day-title">DAY 1</h2>
                        <p className="day-date">May. 8</p>
                    </div>                
                    <ul className="speaker-list">
                        {speakers.map((speaker, index) => (
                            <li className="speaker" key={index}>
                                <img src={speaker.img} alt={speaker.name} />
                                <p className="speaker-name">{speaker.name}</p>
                                <p className="speaker-desc">{speaker.desc}</p>
                            </li>
                        ))}
                    </ul>                
                    <ul className="program-list">
                        <li className="program-block">
                            <p className="time">REGISTRATION<span>(09:00 – 10:00)</span></p>                        
                            <div className="program-content">                            
                                <p className='program-time'>10:00 - 10:55</p>
                                <div className='program-ts'>
                                    <p className="program-title">대한민국 2030 여성의 리얼 트렌드</p>
                                    <p className="program-speaker">{speakers[0].name} _ {speakers[0].desc}</p>
                                </div>
                            </div>
                            <div className="program-content">                            
                                <p className='program-time'>10:55 - 11:40</p>
                                <div className='program-ts'>
                                    <p className="program-title">불확실성의 시대, 리테일 방향 찾기</p>
                                    <p className="program-speaker">{speakers[1].name} _ {speakers[1].desc}</p>
                                </div>
                            </div>
                        </li>
                        <li className="program-block">
                            <p className="time">LUNCH BREAK<span>(11:40 – 13:30)</span></p>                        
                            <div className="program-content">                            
                                <p className='program-time'>13:30 - 14:20</p>
                                <div className='program-ts'>
                                    <p className="program-title">마케팅 과열의 시대, 크리에이티브<br /> 전략 기획의 힘</p>
                                    <p className="program-speaker">{speakers[2].name} _ {speakers[2].desc}</p>
                                </div>
                            </div>
                            <div className="program-content">                            
                                <p className='program-time'>14:20 - 15:10</p>
                                <div className='program-ts'>
                                    <p className="program-title">럭셔리 VIP 경험 설계: <br />'선택받은 고객'이 되게 하라</p>
                                    <p className="program-speaker">{speakers[3].name} _ {speakers[3].desc}</p>
                                </div>
                            </div>
                        </li>
                        <li className="program-block">
                            <p className="time">BREAK<span>(15:10 – 15:30)</span></p>                        
                            <div className="program-content">                            
                                <p className='program-time'>15:30 - 16:20</p>
                                <div className='program-ts'>
                                    <p className="program-title">도쿄에서 발견한 도시 개발<br /> 비즈니스 인사이트</p>
                                    <p className="program-speaker">{speakers[4].name} _ {speakers[4].desc}</p>
                                </div>
                            </div>
                            <div className="program-content">                            
                                <p className='program-time'>16:20 - 17:10</p>
                                <div className='program-ts'>
                                    <p className="program-title">2025 디자인 트렌드</p>
                                    <p className="program-speaker">{speakers[5].name} _ {speakers[5].desc}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>            
                <section className="schedule-day">
                    <div className="schedule-header header02">
                        <h2 className="day-title">DAY 2</h2>
                        <p className="day-date">May. 9</p>
                    </div>                
                    <ul className="speaker-list">
                        {speakers2.map((speaker, index) => (
                            <li className="speaker" key={index}>
                                <img src={speaker.img} alt={speaker.name} />
                                <p className="speaker-name">{speaker.name}</p>
                                <p className="speaker-desc">{speaker.desc}</p>
                            </li>
                        ))}
                    </ul>                
                    <ul className="program-list">
                        <li className="program-block">
                            <p className="time">REGISTRATION<span>(09:00 – 10:00)</span></p>                        
                            <div className="program-content">                            
                                <p className='program-time'>10:00 - 10:50</p>
                                <div className='program-ts'>
                                    <p className="program-title">트래픽 높은 공간의 보이지 않는 힘</p>
                                    <p className="program-speaker">{speakers2[0].name} _ {speakers2[0].desc}</p>
                                </div>
                            </div>
                            <div className="program-content">                            
                                <p className='program-time'>10:50 - 11:40</p>
                                <div className='program-ts'>
                                    <p className="program-title">『Blending the Boundaries: <br />공간과 생각을 연결하다』</p>
                                    <p className="program-speaker">{speakers2[1].name} _ {speakers2[1].desc}</p>
                                </div>
                            </div>
                        </li>
                        <li className="program-block">
                            <p className="time">LUNCH BREAK<span>(11:40 – 13:30)</span></p>                        
                            <div className="program-content">                            
                                <p className='program-time'>13:30 - 14:20</p>
                                <div className='program-ts'>
                                    <p className="program-title">말차 하나로 강력한 팬덤을 만든 <br />슈퍼말차의 브랜딩</p>
                                    <p className="program-speaker">{speakers2[2].name} _ {speakers2[2].desc}</p>
                                </div>
                            </div>
                            <div className="program-content">                            
                                <p className='program-time'>14:20 - 15:10</p>
                                <div className='program-ts'>
                                    <p className="program-title">디지털 아트가 아날로그 공간에 <br />침투하면 생기는 일</p>
                                    <p className="program-speaker">{speakers2[3].name} _ {speakers2[3].desc}</p>
                                </div>
                            </div>
                        </li>
                        <li className="program-block">
                            <p className="time">BREAK<span>(15:10 – 15:30)</span></p>                        
                            <div className="program-content">                            
                                <p className='program-time'>15:30 - 16:20</p>
                                <div className='program-ts'>
                                    <p className="program-title">형태가 기능을 따르는 <br />리테일 디자인 접근법</p>
                                    <p className="program-speaker">{speakers2[4].name} _ {speakers2[4].desc}</p>
                                </div>
                            </div>
                            <div className="program-content">                            
                                <p className='program-time'>16:20 - 17:10</p>
                                <div className='program-ts'>
                                    <p className="program-title">리테일 테라피를 넘어 <br />브랜드 공간에 스며든 조경 설계</p>
                                    <p className="program-speaker">{speakers2[5].name} _ {speakers2[5].desc}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <footer>
                    <div className='logo'><img src={desingSalonLogo} /></div>
                    <ul className='contact-box'>
                        <li className='title'>컨퍼런스 사무국</li>
                        <li>서울시 송파구 송파대로 201, <br />A동 1602호(테라타워 2차)</li>
                        <li>T 02-554-3122</li>
                        <li>E. <span>yechan.park@rxkfairs.com</span></li>
                        
                    </ul>
                    <div className='sponsor-box'>
                        <img src={rxLogo} className='rxLogo' />
                        <img src={cslvLogo}  className='cslvLogo'/>
                    </div>
                </footer>            
            </motion.div>
        </>
    )
}

export default DesignSalon;
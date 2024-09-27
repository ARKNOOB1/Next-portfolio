import Layout from '../components/layout'
import style from '../styles/about-me.module.css'

export default function AboutMe() {
    return (
        <Layout>
            <div>
                <div className={style.cen}>
                    <h1>안녕하세요.</h1>
                    <p>충주상업고등학교 스마트IT과에 재학중인 피금황입니다.<br/>현재 여러 프로그래밍 언어를 배우고있습니다.</p>
                </div>
                
                <br/>
                <div className={style.content}>
                    <div>
                        <h2>배우고있는 언어</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <li>
                            Node.js
                        </li>
                        <p>C</p>
                    </div>

                    <br/>

                    <div>
                        <h2>프레임워크</h2>
                        <p>React</p>
                        <li>Next.js</li>
                    </div>

                    <br/>

                    <div>
                        <h2>사용가능한 기술</h2>
                        <p>HTML로 웹 만들기</p>
                        <p>CSS 디자인</p>
                        <p>JavaScript를 활용한 동적 웹 프로그래밍</p>
                        <p>React를 활용한 웹 개발</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
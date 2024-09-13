import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid2"
import Lottie from 'react-lottie-player'
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import { useRouter } from "next/router"

export default function Mainpage() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/project');
    }
    return (
        <>
            
            <Grid container spacing={2}>
                <Grid size={4}>
                    <div className={styles.introduce}>
                        <h2 style={{fontSize : '45px'}}>안녕하세요</h2>
                        <p>안녕하세요 취미는 게임이고 프로그래밍을 배우고 있습니다.</p>
                        <Button variant="outlined" onClick={handleClick}>프로젝트 보러가기</Button>
                    </div>
                </Grid>
                <Grid size={8}>
                    <div>
                        <Lottie
                            Loop
                            animationData={lottiejson}
                            play  
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
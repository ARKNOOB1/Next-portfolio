import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

export default function ProjectItem({data}) {
    const title = data.properties.이름.title[0]?.plain_text;
    const tag = data.properties.태그.multi_select;
    const start = data.properties?.작업기간.date.start;
    const end = data.properties?.작업기간.date.end;
    const description = data.properties.설명.rich_text[0].plain_text;
    const github = data.properties.Github.url;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const demo = data.properties?.Demo.url;
    const router = useRouter();
    
    function countWorkDays(start,end) {
        const startDate = new Date(start);
        const endDate = new Date(end);

        let workdays = 1;
        let currntDate = new Date(startDate);

        while(currntDate <= endDate){
            workdays++
            currntDate.setDate(currntDate.getDate()+1); 
        }
        return workdays;
    }

    const workDay = countWorkDays(start,end)
    return (
            <Card sx={{width : 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <CardMedia sx={{height : 300}} image={imgSrc} title={title} />
                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant='body1' sx={{color : 'text.secondary'}}>
                        {workDay} 일
                    </Typography>
                    <Typography variant="body2" sx={{color : 'text.secondary'}}>
                        {description}
                    </Typography>
                    <Typography variant='body2' sx={{color : 'text.secondary'}}>
                        {tag.map((aTag)=> (<span key={aTag.id}>#{aTag.name} </span>))}
                    </Typography>
                </CardContent>
                <CardActions>
                    {demo &&
                    (<Button size='small' onClick={() => {router.push(demo);}}>View Demo</Button>)}
                    <Button size='small' onClick={() => {router.push(github);}}>Visit Github</Button>
                </CardActions>
            </Card>
    )
}
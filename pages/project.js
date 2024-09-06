import Layout from "@/components/layout";
import Head from "next/head";
import {TOKEN, DATABASE_ID} from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({projects}){
    console.log(projects)

    return(
        <>
            <Layout>
                <Head>
                    <title>Portfolio with ARKNOOB1</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>프로젝트</h1>
                <span>총 프로젝트 : {projects.results.length}</span>
                {projects.results.map((aProject) => (
                    <ProjectItem key={aProject.id} data={aProject}/>
                ))}
            </Layout>
            
        </>
    )
}
export async function getStaticProps() {
    const options = {
        method : 'POST',
        headers : {
            Accept : 'application/json',
            'Notion-Version' : '2022-06-28',
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${TOKEN}`
        },
        body : JSON.stringify({page_size : 100})
    };
    const res = await fetch (`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()

    return{
        props : {projects}
    }
    

}
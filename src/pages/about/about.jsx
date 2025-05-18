import Content from "../../components/content";
import { content1, content2, content3 } from "./data";

const About = () => {
    return (
        <div className="p-[3rem]">

            <h1 className="text-4xl text-(--black) my-[1rem] border-b-2">Tentang Kami</h1>

            <Content {...content1} />
            <Content {...content2} />
            <Content {...content3} />

        </div>
    )
}

export default About;
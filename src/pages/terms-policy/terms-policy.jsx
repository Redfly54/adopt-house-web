import Accordition from "../../components/accordition";
import { content1 } from "./data";

const TermsPolicy = () => {
    return (
        <div className="terms-policy section p-10">

            <h1 className="text-[2rem] my-10 border-b-2">ini Terms & Policy</h1>

            <Accordition {...content1} />
        </div>
    )
}

export default TermsPolicy;
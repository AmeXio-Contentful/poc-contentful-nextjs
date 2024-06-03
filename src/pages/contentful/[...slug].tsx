import {NextPage} from "next";
import {useRouter} from "next/router";

const Page: NextPage = () => {
    // fetch the page structure from contentful
    // loop through the structure to fetch the data and format it with the mapping
    // to match the format so they can be used to fill the components

    const router = useRouter();
    const slug = (router?.query.slug) || '';


    return <div>{slug[0]}</div>;
}
export default Page;

import { useRouter } from "next/router";

const Details = () => {
    const router = useRouter();
    const { slug } = router.query;

    return <div>Car Make: {slug}</div>;
};

export default Details;

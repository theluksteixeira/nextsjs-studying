import { useRouter } from "next/router";
export default function Produtcs() {
    const router = useRouter();
    return (
        <div>
            <h1>{router.query.slug}</h1>
        </div>
    );
}

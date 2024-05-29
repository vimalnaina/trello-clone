import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/">
            <p className="text-lg text-neutral-700 pb-1">Taskify</p>
        </Link>
    )
}
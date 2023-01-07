import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Utils from "../utils/Utils";

export default function Home() {
    const router = useRouter();
    const { timestamp } = router.query;
    const duration = new Date(Number(timestamp)).getTime() - Date.now();
    const [[sec, min, hour, day], setTime] = useState(
        Utils.parseMillsecond(duration)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Utils.parseMillsecond(duration));
        }, 1000);
        return () => clearInterval(interval);
    }, [duration]);

    return (
        <div className="bg-zinc-900 text-slate-100 min-h-screen w-full">
            <Head>
                <title>Giveaway Timestamp</title>
            </Head>
            <div className="px-16 py-16 items-center text-center">
                <div>
                    {duration < 0 ? (
                        <h1 className="text-5xl text-red-500 font-poppins font-bold">
                            Giveaway Ended
                        </h1>
                    ) : (
                        <h1 className="text-4xl text-green-500 font-poppins font-bold">
                            <span className="px-4 py-2 bg-zinc-800 text-orange-500 rounded-md">
                                {day} hari
                            </span>{" "}
                            {hour}:{min}:{sec}
                        </h1>
                    )}
                </div>
                <div className="px-4 py-4">
                    <h1 className="text-lg text-blue-500 font-poppins font-semibold">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/NegionDev"
                        >
                            By Negion
                        </a>
                    </h1>
                </div>
            </div>
        </div>
    );
}

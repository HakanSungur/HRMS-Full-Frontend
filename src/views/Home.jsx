import React, {useEffect, useState} from "react";

import HomeNavbar from "../components/Navbars/HomeNavbar";
import Footer from "../components/Footers/Footer";
import JobAdvertService from "../services/JobAdvertService";
import HomeJobAdvertList from "../components/Cards/HomeJobAdvertList";
import EmptyJobAdvertList from "../components/Cards/EmptyJobAdvertList";

export default function Home() {

    const [jobAdverts, setJobAdverts] = useState([]);

    const [isNull, setNull] = useState(false);

    let jobAdvertService = new JobAdvertService();

    useEffect(() => {
        let isMounted = true;
        jobAdvertService.getJobAdvertByIsActiveTrueAndIsConfirmedTrueByPageAsc(1, 10)
            .then(result => {
                if (isMounted) setJobAdverts(result.data.data)
            })

        if (jobAdverts.length <= 0) {
            if (isMounted) setNull(true);

        } else {
            if (isMounted) setNull(false);

        }
        return () => {
            isMounted = false
        }
    }, [jobAdverts.length])

    return (
        <div style={{background: "linear-gradient(#fff, #8BA5BEFF)", backgroundColor: "#51627f"}}>
            <HomeNavbar fixed/>
            

            {isNull ? <EmptyJobAdvertList/> : <HomeJobAdvertList/>}

            

            <section className="mt-20 relative bg-blueGray-100">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blueGray-100 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
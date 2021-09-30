import React from "react";

// components
import AdminJobAdvertList from "../../components/Cards/AdminJobAdvertList";

export default function jobAdvertList() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full mb-4 mt-6 px-4">
                    <AdminJobAdvertList/>
                </div>
            </div>
        </>
    );
}